import {
  AST,
  ProgDecl,
  Seq,
  IfElseStmt,
  RepeatStmt,
  WhileStmt,
  ProgCallStmt,
  PrintStmt,
  MakeStmt,
  BuiltInCommand,
  BinaryOpExpr,
  UnaryOpExpr,
  FuncExpr,
  ColorExpr,
  VarExpr,
  NumberConst,
  BoolConst,
  ColorConst,
  VarDecl,
} from './ir/ast.js';

export abstract class ASTVisitor<Args, Result> {
  public visit(ast: AST, args: Args): Result {
    return ast.accept(this, args);
  }

  public visitChildren(ast: AST, args: Args): Result {
    let result: Result = this.defaultResult();
    const children: AST[] = ast.getChildren();
    const n: number = children.length;
    for (let i = 0; i < n; i++) {
      const c: AST = children[i];
      const childResult: Result = c.accept(this, args);
      result = this.aggregateResult(result, childResult);
    }

    return result;
  }

  /**
   * Aggregates the results of visiting multiple children of a node. After
   * all children are visited the aggregate value is returned as the result of
   * {@link #visitChildren}.
   *
   * The default implementation returns `nextResult`, meaning
   * {@link #visitChildren} will return the result of the last child visited
   * (or return the initial value if the node has no children).
   *
   * @param aggregate The previous aggregate value. In the default
   * implementation, the aggregate value is initialized to
   * {@link #defaultResult}, which is passed as the `aggregate` argument
   * to this method after the first child node is visited.
   * @param nextResult The result of the immediately preceeding call to visit
   * a child node.
   *
   * @returns The updated aggregate result.
   */
  protected aggregateResult(_aggregate: Result, nextResult: Result): Result {
    return nextResult;
  }

  /**
   * Gets the default value returned by visitor methods.
   * The default implementation of {@link #visitChildren visitChildren}
   * initializes its aggregate result to this value.
   *
   * @returns The default value returned by visitor methods.
   */
  protected abstract defaultResult(): Result;

  public defaultNode(ast: AST, args: Args): Result {
    return this.visitChildren(ast, args);
  }

  public visitProgDecl(ast: ProgDecl, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitSeq(ast: Seq, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitVarDecl(ast: VarDecl, args: Args): Result {
    return this.defaultNode(ast, args);
  }

  public visitIfElseStmt(ast: IfElseStmt, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitRepeatStmt(ast: RepeatStmt, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitWhileStmt(ast: WhileStmt, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitProgCallStmt(ast: ProgCallStmt, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitPrintStmt(ast: PrintStmt, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitMakeStmt(ast: MakeStmt, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitBuiltInCommand(ast: BuiltInCommand, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitBinaryOpExpr(ast: BinaryOpExpr, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitUnaryOpExpr(ast: UnaryOpExpr, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitFuncExpr(ast: FuncExpr, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitColorExpr(ast: ColorExpr, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitVarExpr(ast: VarExpr, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitNumberConst(ast: NumberConst, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitBoolConst(ast: BoolConst, args: Args): Result {
    return this.defaultNode(ast, args);
  }
  public visitColorConst(ast: ColorConst, args: Args): Result {
    return this.defaultNode(ast, args);
  }
}
