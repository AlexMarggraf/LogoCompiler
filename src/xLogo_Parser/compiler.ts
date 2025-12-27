import { parseCode } from "./parser.js";
import {
  AST as XLogoAST,
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
  Seq,
  MakeStmt,
  VarDecl,
} from './ir/ast.js';
import {ASTVisitor} from './ASTVisitor.js';

import { AssignmentExpression, AsyncArrowFunctionExpression, AsyncFunctionDeclaration, AwaitExpression, BinaryExpression, BlockStatement, CallExpression, ExpressionStatement, Identifier, Literal, Module, Script, StaticMemberExpression, UnaryExpression, VariableDeclaration, VariableDeclarator } from "./esnodes.js";
import { Program, BaseNode } from "estree";

function assert(cond: any, msg: string | undefined =undefined) {
  if (!msg) {
    msg = "";
  } else {
    msg = ": " + msg;
  }
  if (!cond) {
    throw new Error("Assertion Error" + msg);
  }
}

export function compileCodeToAST(logocode: string): Program {
  const ast = parseCode(logocode.toLowerCase());

  //ast.accept(new DebugVisitor(), 0)
  const esast = ast.accept(new CompilerVisitor(), 0);
  //console.log(JSON.stringify(esast, null, 2));
  return esast;
}

function isBody(body: any): body is Array<BaseNode> {
  if (!Array.isArray(body)) return false;
  for (const element of body) {
    // TODO implement this correctly if there is time/necessity
    if (element.type === undefined) 
      return false;
  }
  return true;
}

function varNameMangle(name: string): string {
  return "" + name;
}

function funcNameMangle(name: string): string {
  return "" + name;
}

function generateActionSetCall(callname: string, args: any[]): BaseNode {
  const res = new CallExpression(new StaticMemberExpression(new Identifier("act"), new Identifier(callname)), args);
  if (callname === "wait") {
    return new AwaitExpression(res);
  }
  return res;
}

export class CompilerVisitor extends ASTVisitor<number, any> {
  public defaultNode(ast: XLogoAST, args: number): BaseNode {
    throw new Error("not implemented yet!")
  }

  public aggregateResult(_aggregate: any, nextResult: any) {
    //console.log("in aggregateResult", _aggregate)
    if (!Array.isArray(_aggregate)) throw new Error("Aggregate must be of type array");
    _aggregate.push(nextResult);
    return _aggregate;
  }

  public visitSeq(ast: Seq, args: number): BaseNode[] | Program {
    let body = this.visitChildren(ast, args + 1);
    if (!body) throw new Error("body undefined");
    if (!isBody(body)) throw new Error("type error");

    if (args == 0) {
      console.log("visiting top level seq");
      return new Script([new ExpressionStatement(new CallExpression(new AsyncArrowFunctionExpression([], new BlockStatement(body), false), []))]) as Program;
    } else {
      // assumption: we are in progdeclaration
      console.log("visiting seq, not at top level");
      // we have to convert expressions to statements
      return body.map((exp) => {
        if (exp.type == "VariableDeclaration") {
          return exp;
        }
        return new ExpressionStatement(exp)
      });
    }
  }
  public visitBuiltInCommand(ast: BuiltInCommand, args: number) {
    //console.log("in visitBuiltinCommand\n", ast)
    const callArgs = this.visitChildren(ast, args + 1);
    return generateActionSetCall(ast.commandName, callArgs);
  }

  public visitProgDecl(ast: ProgDecl, args: number): BaseNode {
    const statements = this.visitChildren(ast, args + 1)[0]; // TODO figure out why visitChildren gives back an array of array of object
    if (ast.name === "main") { // insert entrypoint into script. in code this would look like: (() => {...})()
      return new ExpressionStatement(new CallExpression(new AsyncArrowFunctionExpression([], new BlockStatement(statements), false), []));
    }
    const funcname = funcNameMangle(ast.name);
    const params = ast.args.map((ast) => {return new Identifier(ast.name.slice(1));})
    return new AsyncFunctionDeclaration(new Identifier(funcname), params, new BlockStatement(statements));
  }

  public visitMakeStmt(ast: MakeStmt, args: number): BaseNode {
    // TODO how do we handle assignments before declaration? the implementation of xlogoonline doesn't care. 
    //console.log(ast);
    assert(ast.declName instanceof VarDecl);

    const varname = ast.declName.name.slice(1)
    assert(varname.length > 0);
    const varnameMangled = varNameMangle(varname);
    const id = new Identifier(varnameMangled);
    const assigner = this.visitChildren(ast, args + 1)[0];
    if (ast.declName.name.startsWith("\"")) {
      return new VariableDeclaration([new VariableDeclarator(id, assigner)], "let")
    } else if (ast.declName.name.startsWith(":")) {
      return new AssignmentExpression("=", id, assigner)
    } else {
      throw new Error("should not be reached");
    }
  }

  public visitFuncExpr(ast: FuncExpr, args: number): BaseNode {
    const actionsetfuncs = ["random", "mod", "power", "sqrt", "log", "abs", "sin", "cos", "tan", "arcsin", "arccos", "arctan"]
    const consts = ["pi", "e"];
    if (actionsetfuncs.includes(ast.name)) {
      const callArgs = this.visitChildren(ast, args + 1);
      return generateActionSetCall(ast.name, callArgs);
    } else if (consts.includes(ast.name)) {
      return new Identifier(ast.name);
    } else {
      throw new Error("should not be reached!")
    }
  }

  public visitProgCallStmt(ast: ProgCallStmt, args: number) {
    const callArgs = this.visitChildren(ast, args + 1);
    return new CallExpression(new Identifier(ast.progName), callArgs);
  }

  public visitUnaryOpExpr(ast: UnaryOpExpr, args: number): BaseNode {
    const arg = this.visitChildren(ast, args + 1);
    assert(arg.length = 1);
    if (["-", "+"].includes(ast.operator)) {
      return new UnaryExpression(ast.operator, arg[0]);
    } else {
      //console.log(ast.operator);
      throw new Error("not implemented yet!");
    }
  }

  public visitBinaryOpExpr(ast: BinaryOpExpr, args: number): BaseNode {
    const opArgs = this.visitChildren(ast, args + 1);
    assert(opArgs.length == 2);
    if (["+", "-", "*", "/", "%"].includes(ast.operator)) {
      return new BinaryExpression(ast.operator, opArgs[0], opArgs[1]);
    } else {
      throw new Error("not implemented yet!");
    }
  }

  public visitNumberConst(ast: NumberConst, args: number): BaseNode {
    return new Literal(ast.valueAsNumber, ast.valueAsNumber.toString())
  }

  public visitPrintStmt(ast: PrintStmt, args: number): BaseNode {
    let argsOfCall = this.visitChildren(ast, args + 1);
    if (Array.isArray(argsOfCall) && argsOfCall.length == 0) {
      //console.log(ast)
      const input = ast.argString();
      console.log(input);
      assert(input)
      argsOfCall = [new Literal(input, "\"" + input + "\"")]
    }
    return generateActionSetCall("print", argsOfCall);
  }

  public visitVarExpr(ast: VarExpr, args: number): BaseNode {
    assert(ast.name.startsWith(":"), "varname doesn't start with :");
    const varname = ast.name.slice(1);
    return new Identifier(varNameMangle(varname));
  }

  // ASTVisitor requires a defaultResult method to be implemented. However, CompilerVisitor doesn't need it.
  protected defaultResult(): BaseNode[] {
    return [];
  };
}

declare namespace escodegen {
  function generate(s: Script | Module): string;
}

// some goofy shenanigans to make this work in the browser. 
let lib: any;
if (typeof escodegen === "undefined") {
  lib = await import("escodegen");
} else {
  lib = escodegen;
}

export function compileCode(logocode: string): string {
  const ast =  compileCodeToAST(logocode);
  console.log(ast)
  let code = lib.generate(ast);
  code = `
const pi = 2.14159265358979323846264338327950288419716939937510582097;
const e = 1.718281828459045235360287471352662497757247093699959574966;
` + code;
  return code;
}