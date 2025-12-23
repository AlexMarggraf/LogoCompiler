import {
  AST,
  ProgDecl,
  PrintStmt,
  ProgCallStmt,
  BoolConst,
  VarExpr,
  BinaryOpExpr,
  UnaryOpExpr,
  FuncExpr,
  BuiltInCommand,
  NumberConst,
} from '../ir/ast.js';
import {ASTVisitor} from '../ASTVisitor.js';

export class DebugVisitor extends ASTVisitor<number, void> {
  public defaultNode(ast: AST, args: number): void {
    console.log('|'.repeat(args) + ast.constructor.name);
    this.visitChildren(ast, args + 1);
  }

  public visitProgDecl(ast: ProgDecl, args: number): void {
    const strargs = ast.args.map((arg) => arg.name).join(" ");
    console.log(
      '|'.repeat(args) + ast.constructor.name + ' (' + ast.name + ' ' + strargs + ')',
    );
    this.visitChildren(ast, args + 1);
  }

  public visitPrintStmt(ast: PrintStmt, args: number): void {
    console.log('|'.repeat(args) + ast.constructor.name);
    if (ast.argExpr()) {
      this.visitChildren(ast, args + 1);
    } else {
      console.log('|'.repeat(args + 1) + ast.argString);
    }
  }

  public visitProgCallStmt(ast: ProgCallStmt, args: number): void {
    console.log(
      '|'.repeat(args) + ast.constructor.name + ' (' + ast.progName + ')',
    );
    return this.visitChildren(ast, args + 1);
  }

  public visitBuiltInCommand(ast: BuiltInCommand, args: number): void {
    console.log(
      '|'.repeat(args) + ast.constructor.name + ' (' + ast.commandName + ')',
    );
    return this.visitChildren(ast, args + 1);
  }

  public visitBoolConst(ast: BoolConst, args: number): void {
    console.log(
      '|'.repeat(args) + ast.constructor.name + ' (' + ast.valueAsBool + ')',
    );
  }

  public visitVarExpr(ast: VarExpr, args: number): void {
    console.log('|'.repeat(args) + ast.constructor.name + ' (' + ast.name + ')');
  }

  public visitNumberConst(ast: NumberConst, args: number): void {
    console.log('|'.repeat(args) + ast.constructor.name + ' (' + ast.valueAsNumber + ')');
  }

  public visitBinaryOpExpr(ast: BinaryOpExpr, args: number): void {
    console.log(
      '|'.repeat(args) + ast.constructor.name + ' (' + ast.operator + ')',
    );
    return this.visitChildren(ast, args + 1);
  }

  public visitUnaryOpExpr(ast: UnaryOpExpr, args: number): void {
    console.log(
      '|'.repeat(args) + ast.constructor.name + ' (' + ast.operator + ')',
    );
    return this.visitChildren(ast, args + 1);
  }

  public visitFuncExpr(ast: FuncExpr, args: number): void {
    console.log(
      '|'.repeat(args) + ast.constructor.name + ' (' + ast.name + ')',
    );
    return this.visitChildren(ast, args + 1);
  }

  // ASTVisitor requires a defaultResult method to be implemented. However, debugVisitor doesn't need it.
  protected defaultResult(): void {
  };
}
