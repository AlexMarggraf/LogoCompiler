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
  ColorConst,
  ColorExpr,
  RepeatStmt,
  WhileStmt,
  IfElseStmt,
} from './ir/ast.js';
import {ASTVisitor} from './ASTVisitor.js';

import {
  ArrayExpression,
  AssignmentExpression,
  AsyncArrowFunctionExpression,
  AsyncFunctionDeclaration,
  AwaitExpression,
  BinaryExpression,
  BlockStatement,
  BreakStatement,
  CallExpression,
  ExpressionStatement,
  ForStatement,
  Identifier,
  IfStatement,
  Literal,
  Module,
  ReturnStatement,
  Script,
  StaticMemberExpression,
  ComputedMemberExpression,
  UnaryExpression,
  VariableDeclaration,
  VariableDeclarator,
  WhileStatement,
  StatementListItem
} from "./esnodes.js";

import { Program, BaseNode, Statement, Class, ClassDeclaration, MethodDefinition, Expression, MemberExpression, PrivateIdentifier, Identifier as TIdentifier } from "estree";
import { ActionSet, CanvasActionSet } from "../ActionSet.js";
import { DefinedBuiltIns } from "./ir/builtInCommands.js";
import * as esprima from "esprima";
import { CustomESTreeWalker, mapThisToDoubleUnderscore, mapThisToStr } from "./CustomESTreeWalker.js";
import { getAllFuncs } from "./compilerUtils.js";

// some goofy shenanigans to make this work in the browser. 
declare namespace escodegen {
  function generate(s: Script | Module): string;
}
let lib: any;
if (typeof escodegen === "undefined") {
  lib = await import("escodegen");
} else {
  lib = escodegen;
}

type generateCallFunction = {
    (callname: string, args: any[]): BaseNode;
}

export type Stopper = {
  runid: number;
}

export type CompileStrategy =  "array_access" | "direct_access" | "hard_coded";

const ACT_PREFIX = "__act_"

function mapThis(n: MemberExpression) {
  if (n.object.type != "ThisExpression") {
    throw new Error("not a this expression!");
  }
  let t = n.property;
  if (t.type == "Identifier") {
    return new Identifier(ACT_PREFIX + t.name) as Expression;
  }
  throw Error("currently only identifiers are supported for members of a this-expression");
}
function mapId(s: string) {
  return "_" + s;
}


export class Compiler {
  act: CanvasActionSet
  appliedStrategy: CompileStrategy

  constructor(act: CanvasActionSet) {
    this.act = act;
  }

  public compileCode(logocode: string, strategy: CompileStrategy): string {
    this.appliedStrategy = strategy;
    const ast = this.compileCodeToAST(logocode, strategy);
    let code = lib.generate(ast);
    if (strategy == "hard_coded") {
      code = this.compileActionSet() + "\n" + code;
    }
    return code;
  }
  
  private compileActionSet(): string {
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this.act));
    let classStr = this.act.constructor.toString();
    classStr = classStr.slice(0, 6) + "_bruh " + classStr.slice(6);
    console.log(classStr);
    const classAst = esprima.parseScript(classStr).body[0] as ClassDeclaration;
    if (classAst.superClass) {
      throw new Error("subclasses not supported!");
    }


    let scriptBody = [] as StatementListItem[];

    const body = classAst.body.body
    const constructors = body.filter((m ) => {
      if (m.type == "MethodDefinition") {
        return m.kind == "constructor"
      }
      return false;
    });
    assert(constructors.length == 1, "more than one constructor found!");
    let con = constructors[0] as MethodDefinition;

    let globals: Identifier[] = [];
    for (let stmt of con.value.body.body) {
      if (stmt.type == "ExpressionStatement") {
        let expr = stmt.expression;
        if (expr.type == "AssignmentExpression") {
          globals.push(mapThis(expr.left as MemberExpression) as Identifier);
        }
      }
    }
    scriptBody.push(new VariableDeclaration(globals.map((id) => new VariableDeclarator(id, null)), "let"))
    let c = new CustomESTreeWalker(mapId, mapThis);
    const confun = c.walk(con.value);
    scriptBody.push(confun.body);
    
    for (const m of body) {
      assert(m.type == "MethodDefinition", "something other than a method definition in ActionSet class");
      let method = m as MethodDefinition;
      if (method.kind != "method") {console.log("skipped method of kind: " + method.kind); continue;}
      console.log("======= body of actionset ========");
      console.log(m);
      assert(method.key.type == "Identifier");
      let methodid = method.key as Identifier;
      let fun = c.walk(method.value);
      fun.id = new Identifier((ACT_PREFIX + methodid.name)) as TIdentifier;
      scriptBody.push(fun);
    }
    
    let script = new Script(scriptBody);
    console.log("====== generated ======");
    let res = escodegen.generate(script);
    console.log(res);
    return res;
  }

  public runnableFromCode(script: string): (stopper?: Stopper, runid?: number) => Promise<void> {
    const prefix = `
    const _console = console;
    const _Promise = Promise;
    const _setTimeout = setTimeout;
    const _Math = Math;
    const _pi = Math.PI, _e = Math.E;
    const _random = (max) => {return Math.random() * max};
    const _mod = (a, b) => {return a % b};
    const _power = (a, b) => {return Math.pow(a, b)};
    const _sqrt = (a) => {return Math.sqrt(a)};
    const _log = (a) => {return Math.log10(a)};
    const _abs = (a) => {return Math.abs(a)};
    const _sin = (a) => {return Math.sin(a)};
    const _cos = (a) => {return Math.cos(a)};
    const _tan = (a) => {return Math.tan(a)};
    const _arcsin = (a) => {return Math.asin(a)};
    const _arccos = (a) => {return Math.acos(a)};
    const _arctan = (a) => {return Math.atan(a)};
    const _numOrCol2Col = (c) => {
      if (Array.isArray(c)) return c;
      switch (Math.floor(c)) {
        case 0: return [0,0,0];
        case 1: return [255,0,0];
        case 2: return [0,255,0];
        case 3: return [255,255,0];
        case 4: return [0,0,255];
        case 5: return [255,0,255];
        case 6: return [0,255,255];
        case 7: return [255,255,255];
        case 8: return [128,128,128];
        case 9: return [192,192,192];
        case 10: return [128,0,0];
        case 11: return [0,128,0];
        case 12: return [0,0,128];
        case 13: return [255,200,0];
        case 14: return [255,175,175];
        case 15: return [128,0,255];
        case 16: return [153,102,0];
        default: throw new Error("numberconst out of range: " + num.toString());
        }
      };
    `;
    console.log("==== prefix ====");
    console.log(prefix);
    
    // Curryfication! yay!
    return (stopper?: Stopper, runid?: number) => {
      return new Function("_act", "_ctx2", "_stopper", "_runid", 
        prefix + `return new Promise (async (_resolve) => { ` + script + ` console.log("promise fulfilled"); _resolve();});`)(this.act, this.act.ctx, stopper, runid) ;
    }
  }

  public compileCodeToAST(logocode: string, strategy: CompileStrategy): Program {
    let generateCall: generateCallFunction;

    switch(strategy) {
      case "direct_access":
        generateCall = this.generateDirectActionSetCall;
        break;
      case "array_access":
        generateCall = this.generateArrayActionSetCall;
        break;
      case "hard_coded":
        generateCall = (a, b) => this.generateHardCodedActionSetCall(this.act, a, b);
        break;
      default:
        throw new Error("invalid compile strategy: " + strategy)
    }
    const ast = parseCode(logocode.toLowerCase());

    //ast.accept(new DebugVisitor(), 0)
    const esast = ast.accept(new CompilerVisitor(generateCall), {depth: 0, parenttype: "Program"});
    return esast;
  }

  public generateDirectActionSetCall(callname: string, args: any[]): BaseNode {
    // act.<callname>(<args>);
    const res = new CallExpression(new StaticMemberExpression(new Identifier("_act"), new Identifier(callname)), args);
    if (callname === "wait") {
      return new AwaitExpression(res);
    }
    return res;
  }

  public generateArrayActionSetCall(callname: string, args: any[]): BaseNode {
    // act["<callname>"](<args>);
    const res = new CallExpression(new ComputedMemberExpression(new Identifier("_act"), new Literal(callname, "\"" + callname + "\"")), args);
    if (callname === "wait") {
      return new AwaitExpression(res);
    }
    return res;
  }

  public generateHardCodedActionSetCall(actionset: ActionSet, callname: string, args: any[]): BaseNode {
    if (callname == "wait") {
      return new ExpressionStatement(new AwaitExpression(new CallExpression(new Identifier(ACT_PREFIX + "wait"), args)));
    }
    const methodCode: string = actionset[callname].toString();
    let localIdMap = (s: string) => "_" + s; // TODO make the customESTreeWalker accept another mapping for local variables.
    const c = new CustomESTreeWalker(localIdMap, mapThis);
    const slicedCode = methodCode.slice(methodCode.indexOf("{") + 1, methodCode.lastIndexOf("}"));
    let bodyAst;
    try {
      bodyAst = esprima.parseScript(slicedCode);
    } catch (error) {
      console.log(methodCode);
      console.log("============")
      console.log(slicedCode);
      throw Error("esprima failed: ", error);
    }
    const argregex = /\(([^\)]*)\)/; // first capture group contains list of arguments
    const argStr = methodCode.match(argregex)[1]; 
    const argIds = argStr.split(/,\s+/);
    const newBodyAst = c.walk(bodyAst);
    let body = newBodyAst.body;
    let variableDeclarators = argIds.map((id, index) => new VariableDeclarator(new Identifier(localIdMap(id)), args[index]))

    body.unshift(new VariableDeclaration(variableDeclarators, "let") as Statement);

    return new BlockStatement(body) as Statement;
  }
}

type AstParentType = "FunctionDefinition" | "Loop" | "Program";
type CompilerInfo = {
  depth: number,
  parenttype: AstParentType,
}

export class CompilerVisitor extends ASTVisitor<CompilerInfo, any> {
  generateCall: generateCallFunction;

  constructor(generateCall: generateCallFunction) {
    super();
    this.generateCall = generateCall;
  }

  public defaultNode(ast: XLogoAST, args: CompilerInfo): BaseNode {
    throw new Error("not implemented yet!")
  }

  public aggregateResult(_aggregate: any, nextResult: any) {
    if (!Array.isArray(_aggregate)) throw new Error("Aggregate must be of type array");
    _aggregate.push(nextResult);
    return _aggregate;
  }

  public visitSeq(ast: Seq, args: CompilerInfo): BaseNode[] | Program {
    let body = this.visitChildren(ast, {...args, depth: args.depth + 1});
    if (!body) throw new Error("body undefined");
    if (!isBody(body)) throw new Error("type error");

    if (args.depth == 0) {
      return new Script(body) as Program;
    } else {
      // assumption: we are in progdeclaration
      // we have to convert expressions to statements
      return body.map((exp) => {
        if (exp.type == "VariableDeclaration" || exp.type == "ExpressionStatement" || exp.type == "BlockStatement") {
          return exp;
        }
        return new ExpressionStatement(exp)
      });
    }
  }

  public visitBuiltInCommand(ast: BuiltInCommand, args: CompilerInfo) {
    const callArgs = this.visitChildren(ast, {...args, depth: args.depth + 1}) as any[];
    const normalizedCommandName = builtinToActionSetName(ast.command, ast.commandName);
    switch (normalizedCommandName) {
      case "stop":
        if (args.parenttype == "FunctionDefinition" || args.parenttype == "Program") { // in a program declaration (which is at level 3) a stop has the meaning of a return statement.
          return new ReturnStatement(null);
        } else {
          return new BreakStatement(null);
        }
      case "wait":
        return new BlockStatement(
          [this.generateCall(normalizedCommandName, callArgs), 
            new IfStatement(new BinaryExpression("&&", 
              new BinaryExpression("&&", 
                new BinaryExpression("!=", new Identifier("_runid"), new Identifier("undefined")), 
                new BinaryExpression("!=", new Identifier("_stopper.runid"), new Identifier("undefined")), 
              ),
              new BinaryExpression("!=", new Identifier("_runid"), new StaticMemberExpression(new Identifier("_stopper"), new Identifier("runid"))), 
            ), new ReturnStatement(null), null)]
        )
      case "setpc": case "setsc": // all the commands which take a color as input
        assert(callArgs.length == 1, "setpc should only have exactly one argument. has " + callArgs.length);
        const arg = callArgs[0];
        if (arg.type != "ArrayExpression") {
          const newExpr = new CallExpression(new Identifier("_numOrCol2Col"), callArgs);
          return this.generateCall(normalizedCommandName, [newExpr]);
        } else {
          return this.generateCall(normalizedCommandName, callArgs);
        }

      default:
        return this.generateCall(normalizedCommandName, callArgs);
    }
  }

  public visitProgDecl(ast: ProgDecl, args: CompilerInfo): BaseNode {
    const statements = this.visitChildren(ast, {...args, parenttype: "FunctionDefinition", depth: args.depth + 1})[0]; // TODO figure out why visitChildren gives back an array of array of object
    if (ast.name === "main") { // insert entrypoint into script. in code this would look like: (() => {...})()
      return new ExpressionStatement(new AwaitExpression(new CallExpression(new AsyncArrowFunctionExpression([], new BlockStatement(statements), false), [])));
    }
    const funcname = funcNameMangle(ast.name);
    const params = ast.args.map((arg) => {return new Identifier(arg.name.slice(1));})
    return new AsyncFunctionDeclaration(new Identifier(funcname), params, new BlockStatement(statements));
  }

  public visitMakeStmt(ast: MakeStmt, args: CompilerInfo): BaseNode {
    // TODO how do we handle assignments before declaration? the implementation of xlogoonline doesn't care. 
    assert(ast.declName instanceof VarDecl);

    const varname = ast.declName.name.slice(1)
    assert(varname.length > 0);
    const varnameMangled = varNameMangle(varname);
    const id = new Identifier(varnameMangled);
    const assigner = this.visitChildren(ast, {...args, depth: args.depth + 1})[0];
    if (ast.declName.name.startsWith("\"")) {
      return new VariableDeclaration([new VariableDeclarator(id, assigner)], "let")
    } else if (ast.declName.name.startsWith(":")) {
      return new AssignmentExpression("=", id, assigner)
    } else {
      throw new Error("should not be reached");
    }
  }

  public visitFuncExpr(ast: FuncExpr, args: CompilerInfo): BaseNode {
    const actionsetfuncs = ["random", "mod", "power", "sqrt", "log", "abs", "sin", "cos", "tan", "arcsin", "arccos", "arctan"]
    const consts = ["pi", "e"];
    if (actionsetfuncs.includes(ast.name)) {
      const callArgs = this.visitChildren(ast, {...args, depth: args.depth + 1});
      return new CallExpression(new Identifier("_" + ast.name), callArgs);
    } else if (consts.includes(ast.name)) {
      return new Identifier("_" + ast.name);
    } else {
      throw new Error("should not be reached!")
    }
  }

  public visitProgCallStmt(ast: ProgCallStmt, args: CompilerInfo) {
    const callArgs = this.visitChildren(ast, {...args, depth: args.depth + 1});
    return new CallExpression(new Identifier(ast.progName), callArgs);
  }

  public visitUnaryOpExpr(ast: UnaryOpExpr, args: CompilerInfo): BaseNode {
    const arg = this.visitChildren(ast, {...args, depth: args.depth + 1});
    assert(arg.length = 1);
    if (["-", "+"].includes(ast.operator)) {
      return new UnaryExpression(ast.operator, arg[0]);
    } else {
      throw new Error("not implemented yet!");
    }
  }

  public visitBinaryOpExpr(ast: BinaryOpExpr, args: CompilerInfo): BaseNode {
    const opArgs = this.visitChildren(ast, {...args, depth: args.depth + 1});
    assert(opArgs.length == 2);
    let op: string = ast.operator;
    if (["+", "-", "*", "/", "%", "<", ">", "<=", ">=", "=", "!=", "&&", "||"].includes(op)) {
      if (op === "=") {
        op = "==";
      }
      return new BinaryExpression(op, opArgs[0], opArgs[1]);
    } else {
      throw new Error("not implemented yet!");
    }
  }

  public visitNumberConst(ast: NumberConst, args: CompilerInfo): BaseNode {
    return new Literal(ast.valueAsNumber, ast.valueAsNumber.toString())
  }

  public visitPrintStmt(ast: PrintStmt, args: CompilerInfo): BaseNode {
    let argsOfCall = this.visitChildren(ast, {...args, depth: args.depth + 1});
    if (Array.isArray(argsOfCall) && argsOfCall.length == 0) {
      const input = ast.argString();
      assert(input)
      argsOfCall = [new Literal(input, "\"" + input + "\"")]
    }
    return this.generateCall("print", argsOfCall);
  }

  public visitVarExpr(ast: VarExpr, args: CompilerInfo): BaseNode {
    assert(ast.name.startsWith(":"), "varname doesn't start with :");
    const varname = ast.name.slice(1);
    return new Identifier(varNameMangle(varname));
  }

  public visitColorConst(ast: ColorConst, args: CompilerInfo) {
    return new ArrayExpression([new Literal(ast.color.red.valueOf(), ast.color.red.toString()),
      new Literal(ast.color.green.valueOf(), ast.color.green.toString()),
      new Literal(ast.color.blue.valueOf(), ast.color.blue.toString())
    ]);
  }

  public visitColorExpr(ast: ColorExpr, args: CompilerInfo) {
    // TODO this at the moment only handles constants. Should be extended to handle expressions as well
    // Ts is probably not what twin wanted fr ong ☠️. Mostly i dont know what expressions can show up here but if you do setpc [...] its literal nodes so ts works fine for now.
    const colorArray = this.visitChildren(ast, {...args, depth: args.depth + 1});
    return new ArrayExpression(colorArray);
  }

  public visitRepeatStmt(ast: RepeatStmt, args: CompilerInfo) {
    const [num, body] = this.visitChildren(ast, {...args, parenttype: "Loop", depth: args.depth + 1});
    const runningVar = new Identifier(this.nextIdentifier());
    return new ForStatement(
      new VariableDeclaration([new VariableDeclarator(runningVar, new Literal(0, "0"))], "let"), 
      new BinaryExpression("<", runningVar, num), 
      new UnaryExpression("++", runningVar), 
      new BlockStatement(body));
  }
  
  public visitWhileStmt(ast: WhileStmt, args: CompilerInfo) {
    const [test, body] = this.visitChildren(ast, {...args, parenttype: "Loop", depth: args.depth + 1});
    return new WhileStatement(test, new BlockStatement(body));
  }

  public visitIfElseStmt(ast: IfElseStmt, args: CompilerInfo) {
    let [test, body, orelse] = this.visitChildren(ast, {...args, depth: args.depth + 1});
    if (orelse) {
      orelse = new BlockStatement(orelse);
    }
    return new IfStatement(test, new BlockStatement(body), orelse);
  }

  public visitBoolConst(ast: BoolConst, args: CompilerInfo) {
    const bool = ast.valueAsBool;
    return new Literal(bool, bool ? "true" : "false");
  }

  private currLiteral: number = 0;
  private nextIdentifier(): string {
    this.currLiteral++;
    return "_" + this.currLiteral;
  }

  // ASTVisitor requires a defaultResult method to be implemented. However, CompilerVisitor doesn't need it.
  protected defaultResult(): BaseNode[] {
    return [];
  };
}

/**
 * 
 * @param num 
 */
function builtinToActionSetName(command: DefinedBuiltIns, commandname: string): string {
  // commands that aren't implemented currently: STOPALL, SHOWTURTLE, HIDETURTLE, CIRCLE, DOT, GENERATESOLUTIONS, STARTPATH, SETFILLCOLOR, FILLPATH.
  switch (command) {
    case DefinedBuiltIns.FORWARD: return "fd";
    case DefinedBuiltIns.BACKWARD: return "bk";
    case DefinedBuiltIns.LEFT: return "lt";
    case DefinedBuiltIns.RIGHT: return "rt";
    case DefinedBuiltIns.SETPENCOLOR: return "setpc";
    case DefinedBuiltIns.CLEARSCREEN: return "cs";
    case DefinedBuiltIns.PENERASE: return "pe";
    case DefinedBuiltIns.PENPAINT: return "ppt";
    case DefinedBuiltIns.PENDOWN: return "pd";
    case DefinedBuiltIns.PENUP: return "pu";
    case DefinedBuiltIns.HOME: return "home";
    case DefinedBuiltIns.CLEARHISTORY: return "ct";
    case DefinedBuiltIns.SETPENWIDTH: return "setpw";
    case DefinedBuiltIns.WASH: return "wash";
    case DefinedBuiltIns.SETSCREENCOLOR: return "setsc";
    case DefinedBuiltIns.SETXY: return "setxy";
    case DefinedBuiltIns.SETX: return "setx";
    case DefinedBuiltIns.SETY: return "sety";
    case DefinedBuiltIns.SETHEADING: return "setheading";
    case DefinedBuiltIns.WAIT: return "wait";
    case DefinedBuiltIns.STOP: return "stop";
  }
  throw new Error("builtin command not implemented yet: " + commandname);
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

// At the moment these name mangling functions are just identity 
//   but they could become useful when dealing with name collisions. 
function varNameMangle(name: string): string {
  return "" + name;
}

function funcNameMangle(name: string): string {
  return "" + name;
}

// Convert number (integer from 0 to 255) to 0 padded hex string. 
// TODO insert check to ensure the number is in this range.
function toHex(c: number): string {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

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
