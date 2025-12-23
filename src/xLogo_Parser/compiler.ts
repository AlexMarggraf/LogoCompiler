import { parseCode } from "./parser.js"
import {generate} from "escodegen"
import { parseModule, parseScript } from "esprima";
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

import {BaseNode, Directive, ExpressionStatement, FunctionDeclaration, Identifier, Literal, ModuleDeclaration, Program, SimpleLiteral, Statement, VariableDeclaration} from 'estree';
import assert from "assert";

function compileCodeToAST(logocode: string): Program {
  const ast = parseCode(logocode);

  const esast = ast.accept(new CompilerVisitor(), 0);
  console.log(JSON.stringify(esast, null, 2));
  return esast;
}
export function compileCode(logocode: string): string{
  return generate(compileCodeToAST(logocode));
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
  return "_XLogoCode_func_" + name;
}

export class CompilerVisitor extends ASTVisitor<number, any> {
  public defaultNode(ast: XLogoAST, args: number): BaseNode {
    throw new Error("not implemented yet!")
    console.log('|'.repeat(args) + ast.constructor.name);
    this.visitChildren(ast, args + 1);
  }

  public aggregateResult(_aggregate: any, nextResult: any) {
    console.log("in aggregateResult", _aggregate)
    if (!Array.isArray(_aggregate)) throw new Error("Aggregate must be of type array");
    _aggregate.push(nextResult);
    return _aggregate;
  }

  public visitSeq(ast: Seq, args: number): BaseNode[] | Program {
    let body = this.visitChildren(ast, args + 1);
    if (!body) throw new Error("body undefined");
    if (!Array.isArray(body)) {
      body = [body]
    }
    if (!isBody(body)) throw new Error("type error");

    if (args == 0) {
      console.log("visiting top level seq");
      return {
        type: 'Program', 
        sourceType: 'module',
        body: body,
      } as Program;
    } else {
      // assumption: we are in progdeclaration
      console.log("visiting seq, not at top level");
      return body;
    }
  }

  public visitProgDecl(ast: ProgDecl, args: number): BaseNode {
    const statements = this.visitChildren(ast, args + 1)[0]; // TODO figure out why statements is an array of array of object
    const id = {type: 'Identifier', name: funcNameMangle(ast.name)};
    const params = ast.args.map((ast) => {return {type: "Identifier", name: ast.name.slice(1)}})
    return {
      type: 'FunctionDeclaration',
      id, 
      params,
      body: {
        type: "BlockStatement", 
        body: statements
      },
      generator: false,
      expression: false,
      async: false
    } as FunctionDeclaration;
  }

  public visitMakeStmt(ast: MakeStmt, args: number): BaseNode {
    console.log(ast);
    assert(ast.declName instanceof VarDecl);

    const varname = ast.declName.name.slice(1)
    assert(varname.length > 0);
    const varnameMangled = varNameMangle(varname);
    const id = {type: "Identifier", name: varnameMangled}
    const assigner = this.visitChildren(ast, args + 1)[0];
    if (ast.declName.name.startsWith("\"")) {
      return {type: 'VariableDeclaration', declarations: [{type: "VariableDeclarator", id, init: assigner}], kind: "let"} as VariableDeclaration;
    } else if (ast.declName.name.startsWith(":")) {
      return {type: 'ExpressionStatement', expression: {type: "AssignmentExpression", operator: "=", left: id, right: assigner}} as ExpressionStatement;
    } else {
      throw new Error("should not be reached");
    }
  }

  public visitNumberConst(ast: NumberConst, args: number): BaseNode {
    return {type: "Literal", value: ast.valueAsNumber, raw: ast.valueAsNumber.toString()} as SimpleLiteral;
  }

  public visitPrintStmt(ast: PrintStmt, args: number): BaseNode {
    const argsOfCall = this.visitChildren(ast, args + 1);
    return {
      type: "ExpressionStatement", 
      expression: {
        type: "CallExpression", 
        callee: {
          type: "MemberExpression", 
          object: {
            type: "Identifier", 
            name: "console"
          }, 
          property: {
            type: "Identifier", 
            name: "log"
          }, 
          computed: false
        },
        arguments: argsOfCall
      }
    } as ExpressionStatement;
  }

  public visitVarExpr(ast: VarExpr, args: number): BaseNode {
    assert(ast.name.startsWith(":"), "varname doesn't start with :");
    const varname = ast.name.slice(1);
    return {type: "Identifier", name: varNameMangle(varname)} as Identifier;
  }

  // ASTVisitor requires a defaultResult method to be implemented. However, CompilerVisitor doesn't need it.
  protected defaultResult(): BaseNode[] {
    return [];
  };
}

/*compileCode(`
to main
  fd 10
  lt 90 bk 20
  rt 270 fd 30
  setpc red rt 90 fd 40
  setsc black
  wash
  setpc [43 167 200] rt 90 fd 50
  setsc [23 20 67]
  # ignore this twin ✌️
  setpw 5 rt 90 fd 60 setpw 1
  pu rt 90 fd 70 pd
  rt 90 fd 80 bk 40 pe fd 40 ppt
  cs
  setx -70
  sety 70
  home
  setxy 70 70
  setheading 180
  fd random 90
  rt 90 fd mod 1000 300
  rt 90 fd power 2 7
  rt 90 fd sqrt 14400
  rt 90 fd log 1000
  rt 90 fd abs -140
  rt 90 fd 100 * sin 0.4
  rt 90 fd 100 * cos 0.4
  rt 90 fd 100 * tan 0.4
  rt 90 fd 100 * arcsin 0.4
  rt 90 fd 100 * arccos 0.4
  rt 90 fd 100 * arctan 0.4
  #rt 90 fd 100 * PI # TODO
  #rt 90 fd 100 * E # TODO
  print 67
  print [yoplait]
  ct
  repeat 4 [fd 100 rt 90]
  make "a 6
  while[:a > 0][fd 30 rt 60 make :a :a - 1]
  IF(:a >= 0)[rt 90 bk 100]
  make :a 67
  if(:a = 67)[rt 90 fd 50]
  if(:a <= 67)[lt 90 fd 67][lt 90 bk 67]
  repeat 5 [rt 72 fd 100 stop]
  wait 100
  rt 90 fd 100
end
  `)*/

import { diff, applyChangeset } from 'json-diff-ts';

const compiled = compileCodeToAST(`
to main :x
  make "a 6
  make :a 7
  print :a
end
`);
const reference = parseModule(`
function _XLogoCode_func_main(x) {
  let a = 6;
  a = 7;
  console.log(a)
}
`)
console.log(JSON.stringify(reference, null, 2));

//console.log(JSON.stringify(diff(compiled, reference), null, 2))
console.log(generate(compiled))
