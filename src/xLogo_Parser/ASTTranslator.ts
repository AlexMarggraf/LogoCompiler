import { XLogoVisitor } from './parser/XLogoVisitor.js';
import {
  AST,
  ProgDecl,
  Seq,
  BuiltInCommand,
  Expr,
  ProgCallStmt,
  BoolConst,
  NumberConst,
  VarExpr,
  ColorConst,
  MakeStmt,
  PrintStmt,
  RepeatStmt,
  IfElseStmt,
  WhileStmt,
  ColorExpr,
  UnaryOpExpr,
  BinaryOpExpr,
  FuncExpr,
  VarDecl,
  Range,
} from './ir/ast.js';
import {
  ProgContext,
  ProgramDeclarationContext,
  StmtBlockContext,
  RepeatStmtContext,
  IfStmtContext,
  WhileStmtContext,
  MakeStmtContext,
  PrintStmtContext,
  ProgCallStmtContext,
  LiteralContext,
  ExprColorContext,
  ExprUnaryOpContext,
  ExprBOpMultContext,
  ExprBOpAddContext,
  ExprBOpCompContext,
  ExprBOpEqContext,
  ExprBOpAndContext,
  ExprBOpOrContext,
  ExprFuncTwoArgContext,
  ExprFuncNoArgContext,
  ExprFuncOneArgContext,
  ExprInBracketsContext,
  InputLinesContext,
} from './parser/XLogoParser.js';

import {
  Token,
  ParserRuleContext,
} from 'antlr4ts';
import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor.js';
import {getBuiltInCommandStructure} from './ir/builtInCommands.js';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode.js';

export class AstTranslatorVisitor
  extends AbstractParseTreeVisitor<AST>
  implements XLogoVisitor<AST>
{
  private static getRangeFromContext(ctx: ParserRuleContext) {
    if (!ctx.stop) throw Error("bruh3");
    return new Range(
      ctx.start.startIndex,
      ctx.start.line,
      ctx.start.charPositionInLine,
      ctx.stop.stopIndex,
      ctx.stop.line,
      ctx.stop.charPositionInLine + (ctx.stop.stopIndex - ctx.stop.startIndex) + 1,
    );
  }

  private getRangeFromToken(token: Token) {
    return new Range(
      token.startIndex,
      token.line,
      token.charPositionInLine,
      token.stopIndex,
      token.line,
      token.charPositionInLine + 1 + (token.stopIndex - token.startIndex),
    );
  }

  // private combineRange(left: AST, right: AST) {
  //     return new Range(
  //         token.startIndex,
  //         token.line,
  //         token.charPositionInLine,
  //         token.stopIndex,
  //         token.line,
  //         token.charPositionInLine + (token.stopIndex - token.startIndex),
  //     );
  // }

  /**
   *
   * @param programBlackList List of program names that should **not** be added into the final AST
   */
  constructor(
    private inputSourceName: string,
    private programBlackList: string[],
  ) {
    super();
  }

  public visitProg(ctx: ProgContext): AST {
    const decls: AST[] = [];
    ctx.programDeclaration().forEach((decl) => {
      try {
        const prog = this.visit(decl) as ProgDecl;
        if (prog.name && !this.programBlackList.includes(prog.name)) {
          decls.push(prog);
        }
      } catch (_e) {
        // We abort translation of blacklisted programs with an error
        // If another error happened rethrow it.
        // if (!(e instanceof BlackListedProgramNameError)) {
        //    throw e;
        // }
      }
    });
    return new Seq(decls);
  }

  public visitInputLines(ctx: InputLinesContext): AST {
    const statements: AST[] = [];
    ctx.stmt().forEach((stmt) => {
      statements.push(this.visit(stmt));
    });
    return new Seq(statements);
  }

  public visitProgramDeclaration(ctx: ProgramDeclarationContext): AST {
    const progName = ctx.Identifier();

    // if (this.programBlackList.includes(progName.text)) {
    //    throw new BlackListedProgramNameError(
    //        "program '" +
    //            progName.text +
    //            "' should not be added to the AST",
    //    );
    // }

    const statements: AST[] = [];
    ctx.stmt().forEach((stmt) => {
      statements.push(this.visit(stmt));
    });
    const paramList = ctx.paramList();
    const params: VarDecl[] = [];
    if (paramList !== null && paramList !== undefined) {
      paramList.Variable().forEach((item) => {
        params.push(
          new VarDecl(
            this.getRangeFromToken(item.symbol),
            item.symbol.inputStream,
            this.inputSourceName,
            item.symbol,
          ),
        );
      });
    }

    return new ProgDecl(
      AstTranslatorVisitor.getRangeFromContext(ctx),
      ctx.start.inputStream,
      this.inputSourceName,
      progName.symbol,
      params,
      new Seq(statements),
    );
  }

  public visitProgCallStmt(ctx: ProgCallStmtContext): AST {
    const args: Expr[] = [];
    ctx.expr().forEach((item) => {
      args.push(this.visit(item) as Expr);
    });
    const callRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    const builtin = getBuiltInCommandStructure(ctx.Identifier().text);
    if (builtin) {
      return new BuiltInCommand(
        callRange,
        ctx.start.inputStream,
        this.inputSourceName,
        builtin,
        ctx.Identifier().symbol,
        args,
      );
    }
    return new ProgCallStmt(
      callRange,
      ctx.start.inputStream,
      this.inputSourceName,
      ctx.Identifier().symbol,
      args,
    );
  }

  public visitMakeStmt(ctx: MakeStmtContext): AST {
    const value = this.visit(ctx.expr());
    let varToken = ctx.VarDecl();
    if (!varToken) {
      varToken = ctx.Variable();
    }
    if (!varToken) {
      throw new Error("bruh");
    }
    return new MakeStmt(
      AstTranslatorVisitor.getRangeFromContext(ctx),
      ctx.start.inputStream,
      this.inputSourceName,
      ctx.Make().symbol,
      new VarDecl(
        this.getRangeFromToken(varToken.symbol),
        varToken.symbol.inputStream,
        this.inputSourceName,
        varToken.symbol,
      ),
      value as Expr,
    );
  }

  public visitPrintStmt(ctx: PrintStmtContext): AST {
    const cur = ctx.expr();
    const printRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    if (cur) {
      const value = this.visit(cur) as Expr;
      return new PrintStmt(
        printRange,
        ctx.start.inputStream,
        this.inputSourceName,
        ctx.Print().symbol,
        value,
      );
    }
    // We have to skip the token 'print' and '['. That's why we start counting at 2
    // We also do not include the last token since that would be the ']' token
    let printString = '';
    for (let i = 2; i < ctx.childCount - 1; i++) {
      printString += ctx.getChild(i).text + ' ';
      // TODO: Either make here better or change lexer to only provide one token
    }

    return new PrintStmt(
      printRange,
      ctx.start.inputStream,
      this.inputSourceName,
      ctx.Print().symbol,
      printString,
    );
  }

  public visitRepeatStmt(ctx: RepeatStmtContext): AST {
    const repeatCount = this.visit(ctx.expr()) as Expr;
    const stmtBlock = this.visit(ctx.stmtBlock()) as Seq;

    return new RepeatStmt(
      AstTranslatorVisitor.getRangeFromContext(ctx),
      ctx.start.inputStream,
      this.inputSourceName,
      ctx.start,
      repeatCount,
      stmtBlock,
    );
  }

  public visitIfStmt(ctx: IfStmtContext): AST {
    const condition = this.visit(ctx.expr()) as Expr;
    const blocks = ctx.stmtBlock();
    const thenBlock = this.visit(blocks[0]) as Seq;
    let elseBlock: Seq | undefined = undefined;
    if (blocks.length === 2) {
      elseBlock = this.visit(blocks[1]) as Seq;
    }
    return new IfElseStmt(
      AstTranslatorVisitor.getRangeFromContext(ctx),
      ctx.start.inputStream,
      this.inputSourceName,
      ctx.start,
      condition,
      thenBlock,
      elseBlock,
    );
  }

  public visitWhileStmt(ctx: WhileStmtContext): AST {
    const condition = this.visit(ctx.expr()) as Expr;
    const whileBlock = this.visit(ctx.stmtBlock()) as Seq;

    return new WhileStmt(
      AstTranslatorVisitor.getRangeFromContext(ctx),
      ctx.start.inputStream,
      this.inputSourceName,
      ctx.start,
      condition,
      whileBlock,
    );
  }

  public visitStmtBlock(ctx: StmtBlockContext): AST {
    const statements: AST[] = [];
    ctx.stmt().forEach((stmt) => {
      statements.push(this.visit(stmt));
    });
    return new Seq(statements);
  }

  // -------------------
  // Expressions
  // -------------------

  public visitExprColor(ctx: ExprColorContext): AST {
    const red = this.visit(ctx.expr(0)) as Expr;
    const green = this.visit(ctx.expr(1)) as Expr;
    const blue = this.visit(ctx.expr(2)) as Expr;

    return new ColorExpr(
      AstTranslatorVisitor.getRangeFromContext(ctx),
      ctx.start.inputStream,
      this.inputSourceName,
      red,
      green,
      blue,
    );
  }

  public visitExprInBrackets(ctx: ExprInBracketsContext): AST {
    const ast = this.visit(ctx.expr());
    return ast;
  }

  public visitExprUnaryOp(ctx: ExprUnaryOpContext): AST {
    const arg = this.visit(ctx.expr()) as Expr;
    const operator = ctx.getChild(0);
    const uOpRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    if (operator instanceof TerminalNode) {
      var text = ctx.start.text;
      if (!text) throw new Error("bruh2");
      return new UnaryOpExpr(
        uOpRange,
        ctx.start.inputStream,
        this.inputSourceName,
        text,
        arg,
      );
    }
    throw new Error(
      'First child of unary operator is not a Terminal Node. Something went wrong',
    );
  }

  public visitExprBOpMult(ctx: ExprBOpMultContext): AST {
    const left = this.visit(ctx.expr(0)) as Expr;
    const right = this.visit(ctx.expr(1)) as Expr;
    const bOpRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    const operator = ctx.getChild(1);
    if (operator instanceof TerminalNode) {
      return new BinaryOpExpr(
        bOpRange,
        operator.symbol.inputStream,
        this.inputSourceName,
        operator.symbol,
        left,
        right,
      );
    }
    // There is no good way to get the token that defines the operator.
    // Antlr4ts has a bug that you cannot label a token in a parser rule so
    // you have to guess where it is.
    throw new Error(
      'The second child of binary operator is not a Terminal Node. Something went wrong',
    );
  }

  public visitExprBOpAdd(ctx: ExprBOpAddContext): AST {
    const left = this.visit(ctx.expr(0)) as Expr;
    const right = this.visit(ctx.expr(1)) as Expr;
    const bOpRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    const operator = ctx.getChild(1);
    if (operator instanceof TerminalNode) {
      return new BinaryOpExpr(
        bOpRange,
        operator.symbol.inputStream,
        this.inputSourceName,
        operator.symbol,
        left,
        right,
      );
    }
    // There is no good way to get the token that defines the operator.
    // Antlr4ts has a bug that you cannot label a token in a parser rule so
    // you have to guess where it is.
    throw new Error(
      'The second child of binary operator is not a Terminal Node. Something went wrong',
    );
  }

  public visitExprBOpComp(ctx: ExprBOpCompContext): AST {
    const left = this.visit(ctx.expr(0)) as Expr;
    const right = this.visit(ctx.expr(1)) as Expr;
    const bOpRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    const operator = ctx.getChild(1);
    if (operator instanceof TerminalNode) {
      return new BinaryOpExpr(
        bOpRange,
        operator.symbol.inputStream,
        this.inputSourceName,
        operator.symbol,
        left,
        right,
      );
    }
    // There is no good way to get the token that defines the operator.
    // Antlr4ts has a bug that you cannot label a token in a parser rule so
    // you have to guess where it is.
    throw new Error(
      'The second child of binary operator is not a Terminal Node. Something went wrong',
    );
  }

  public visitExprBOpEq(ctx: ExprBOpEqContext): AST {
    const left = this.visit(ctx.expr(0)) as Expr;
    const right = this.visit(ctx.expr(1)) as Expr;
    const bOpRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    const operator = ctx.getChild(1);
    if (operator instanceof TerminalNode) {
      return new BinaryOpExpr(
        bOpRange,
        operator.symbol.inputStream,
        this.inputSourceName,
        operator.symbol,
        left,
        right,
      );
    }
    // There is no good way to get the token that defines the operator.
    // Antlr4ts has a bug that you cannot label a token in a parser rule so
    // you have to guess where it is.
    throw new Error(
      'The second child of binary operator is not a Terminal Node. Something went wrong',
    );
  }

  public visitExprBOpAnd(ctx: ExprBOpAndContext): AST {
    const left = this.visit(ctx.expr(0)) as Expr;
    const right = this.visit(ctx.expr(1)) as Expr;
    const bOpRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    const operator = ctx.getChild(1);
    if (operator instanceof TerminalNode) {
      return new BinaryOpExpr(
        bOpRange,
        operator.symbol.inputStream,
        this.inputSourceName,
        operator.symbol,
        left,
        right,
      );
    }
    // There is no good way to get the token that defines the operator.
    // Antlr4ts has a bug that you cannot label a token in a parser rule so
    // you have to guess where it is.
    throw new Error(
      'The second child of binary operator is not a Terminal Node. Something went wrong',
    );
  }

  public visitExprBOpOr(ctx: ExprBOpOrContext): AST {
    const left = this.visit(ctx.expr(0)) as Expr;
    const right = this.visit(ctx.expr(1)) as Expr;
    const bOpRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    const operator = ctx.getChild(1);
    if (operator instanceof TerminalNode) {
      return new BinaryOpExpr(
        bOpRange,
        operator.symbol.inputStream,
        this.inputSourceName,
        operator.symbol,
        left,
        right,
      );
    }
    // There is no good way to get the token that defines the operator.
    // Antlr4ts has a bug that you cannot label a token in a parser rule so
    // you have to guess where it is.
    throw new Error(
      'The second child of binary operator is not a Terminal Node. Something went wrong',
    );
  }

  public visitExprFuncTwoArg(ctx: ExprFuncTwoArgContext): AST {
    const token: Token = ctx.FuncNameTwoArg().symbol;
    if (!token.text) {
      throw Error('Token for FuncNoArg has no text.');
    }
    const name: string = token.text;
    const exprs: Expr[] = [];
    const funcRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    ctx.expr().forEach((expr) => exprs.push(this.visit(expr) as Expr));

    return new FuncExpr(
      funcRange,
      token.inputStream,
      this.inputSourceName,
      token,
      name,
      exprs,
    );
  }

  public visitExprFuncOneArg(ctx: ExprFuncOneArgContext): AST {
    if (!ctx.start.text) {
      throw Error('Token for FuncNoArg has no text.');
    }
    const name: string = ctx.start.text;
    const token: Token = ctx.FuncNameOneArg().symbol;
    const arg = this.visit(ctx.expr()) as Expr;
    const funcRange: Range = AstTranslatorVisitor.getRangeFromContext(ctx);
    return new FuncExpr(
      funcRange,
      token.inputStream,
      this.inputSourceName,
      token,
      name,
      [arg],
    );
  }

  public visitExprFuncNoArg(ctx: ExprFuncNoArgContext): AST {
    if (!ctx.start.text) {
      throw Error('Token for FuncNoArg has no text.');
    }
    const name: string = ctx.start.text;
    const token: Token = ctx.FuncNameNoArg().symbol;

    return new FuncExpr(
      this.getRangeFromToken(token),
      token.inputStream,
      this.inputSourceName,
      token,
      name,
      [],
    );
  }

  public visitLiteral(ctx: LiteralContext): AST {
    if (!ctx.start.text) {
      throw Error('Token for literal has no text.');
    }
    const text: string = ctx.start.text;
    const literalRange: Range = this.getRangeFromToken(ctx.start);
    let cur = ctx.Boolean();
    if (cur) {
      return new BoolConst(
        literalRange,
        cur.symbol.inputStream,
        this.inputSourceName,
        text.toLowerCase() === 'true',
      );
    }

    cur = ctx.Number();
    if (cur) {
      return new NumberConst(
        literalRange,
        cur.symbol.inputStream,
        this.inputSourceName,
        Number(text),
      );
    }

    cur = ctx.Variable();
    if (cur) {
      return new VarExpr(
        literalRange,
        cur.symbol.inputStream,
        this.inputSourceName,
        text,
      );
    }

    cur = ctx.Colorname();
    if (cur) {
      return new ColorConst(
        literalRange,
        cur.symbol.inputStream,
        this.inputSourceName,
        text,
      );
    }

    throw new Error('Unknown Literal type');
  }

  protected override defaultResult(): AST {
    return new Seq([]);
  }
}
