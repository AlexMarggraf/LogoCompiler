
import { Expression, Node, MemberExpression, Statement } from "estree";
import {BlockStatement, Identifier, VariableDeclaration, VariableDeclarator } from "./esnodes.js"
import * as esprima from "esprima";

// returns a thisMap mapping.
export function mapThisToStr(str: string): (n: MemberExpression) => Expression {
  return (n: MemberExpression) => {
    if (n.object.type != "ThisExpression") {
      throw new Error("not a this expression!");
    }
    let t = n.property;
    if (t.type == "Identifier") {
      return new Identifier(str + t.name) as Expression;
    }
    throw Error("currently only identifiers are supported for members of a this-expression");
  }
}

export function mapThisToDoubleUnderscore(n: MemberExpression) {
  if (n.object.type != "ThisExpression") {
    throw new Error("not a this expression!");
  }
  let t = n.property;
  if (t.type == "Identifier") {
    return new Identifier("__" + t.name) as Expression;
  }
  throw Error("currently only identifiers are supported for members of a this-expression");
}

export class CustomESTreeWalker {
  idMap: (s: string) => string;
  thisMap: (a: MemberExpression) => Expression;

  constructor(idMap: (s: string) => string = undefined, thisMap: (a: MemberExpression) => Expression = undefined) {
    if (idMap != undefined) {
      this.idMap = idMap;
    } else {
      this.idMap = (s) => s; // default: identity
    }
    if (thisMap != undefined) {
      this.thisMap = thisMap;
    } else {
      this.thisMap = (a) => a; // default: identity
    }
  }
  
  // TODO maybe remove this
  compileMethodBody(methodCode: string, args: any[]): Statement {
    const slicedCode = methodCode.slice(methodCode.indexOf("{") + 1, methodCode.lastIndexOf("}"));
    let bodyAst;
    try {
      bodyAst = esprima.parseScript(slicedCode);
    } catch {
      console.log(methodCode);
      console.log("============")
      console.log(slicedCode);
      throw Error("esprima failed");
    }
    const argregex = /\(([^\)]*)\)/; // first capture group contains list of arguments
    const argStr: string = methodCode.match(argregex)[1]; 
    const argIds = argStr.split(/,\s+/);
    const newBodyAst = this.walk(bodyAst);
    let body = newBodyAst.body;
    let variableDeclarators = argIds.map((id, index) => new VariableDeclarator(new Identifier(id), args[index]))

    body.unshift(new VariableDeclaration(variableDeclarators, "let") as Statement);

    return new BlockStatement(body) as Statement;
  }

  walk<T extends Node>(ast: T): T {
    //console.log(ast);
    switch (ast.type) {
      case "ArrayExpression":
        for (let i = 0; i < ast.elements.length; i++) {
          ast.elements[i] = this.walk(ast.elements[i]);
        }
        break;
      case "ArrayPattern":
        for (let i = 0; i < ast.elements.length; i++) {
          ast.elements[i] = this.walk(ast.elements[i]);
        }
        break;
      case "ArrowFunctionExpression":
        ast.body = this.walk(ast.body);
        for (let i = 0; i < ast.params.length; i++) {
          ast.params[i] = this.walk(ast.params[i]);
        }
        break;
      case "AssignmentExpression":
        ast.left = this.walk(ast.left);
        ast.right = this.walk(ast.right);
        break;
      case "AssignmentPattern":
        ast.left = this.walk(ast.left);
        ast.right = this.walk(ast.right);
        break;
      case "AwaitExpression":
        ast.argument = this.walk(ast.argument);
        break;
      case "BinaryExpression":
        ast.left = this.walk(ast.left);
        ast.right = this.walk(ast.right);
        break;
      case "BlockStatement":
        for (let i = 0; i < ast.body.length; i++) {
          ast.body[i] = this.walk(ast.body[i]);
        }
        break;
      case "BreakStatement":
        if (ast.label) {
          ast.label = this.walk(ast.label);
        }
        break;
      case "CallExpression":
        ast.callee = this.walk(ast.callee);
        for (let i = 0; i < ast.arguments.length; i++) {
          ast.arguments[i] = this.walk(ast.arguments[i]);
        }
        break;
      case "CatchClause":
        ast.param = this.walk(ast.param);
        ast.body = this.walk(ast.body);
        break;
      case "ConditionalExpression":
        ast.test = this.walk(ast.test);
        ast.consequent = this.walk(ast.consequent);
        ast.alternate = this.walk(ast.alternate);
        break;
      case "ContinueStatement":
        if (ast.label) {
          ast.label = this.walk(ast.label);
        }
        break;
      case "DebuggerStatement":
        break;
      case "DoWhileStatement":
        ast.body = this.walk(ast.body);
        ast.test = this.walk(ast.test);
        break;
      case "EmptyStatement":
        break;
      case "ExpressionStatement":
        ast.expression = this.walk(ast.expression);
        break;
      case "ForInStatement":
      case "ForOfStatement":
        ast.left = this.walk(ast.left);
        ast.right = this.walk(ast.right);
        ast.body = this.walk(ast.body);
        break;
      case "ForStatement":
        if (ast.init) {
          ast.init = this.walk(ast.init);
        }
        if (ast.test) {
          ast.test = this.walk(ast.test);
        }
        if (ast.update) {
          ast.update = this.walk(ast.update);
        }
        ast.body = this.walk(ast.body);
        break;
      case "FunctionDeclaration":
        if (ast.id) {
          ast.id = this.walk(ast.id);
        }
        for (let i = 0; i < ast.params.length; i++) {
          ast.params[i] = this.walk(ast.params[i]);
        }
        ast.body = this.walk(ast.body);
        break;
      case "FunctionExpression":
        if (ast.id) {
          ast.id = this.walk(ast.id);
        }
        for (let i = 0; i < ast.params.length; i++) {
          ast.params[i] = this.walk(ast.params[i]);
        }
        ast.body = this.walk(ast.body);
        break;
      case "Identifier":
        ast.name = this.idMap(ast.name);
        break;
      case "IfStatement":
        ast.test = this.walk(ast.test);
        ast.consequent = this.walk(ast.consequent);
        if (ast.alternate) {
          ast.alternate = this.walk(ast.alternate);
        }
        break;
      case "LabeledStatement":
        ast.label = this.walk(ast.label);
        ast.body = this.walk(ast.body);
        break;
      case "Literal":
        break;
      case "LogicalExpression":
        ast.left = this.walk(ast.left);
        ast.right = this.walk(ast.right);
        break;
      case "MemberExpression":
        // TODO add the "this." detection here
        if (ast.computed) {
          ast.property = this.walk(ast.property);
        }
        if (ast.object.type == "ThisExpression") {
          ast = this.thisMap(ast) as T; // this type annotation is not technically correct, but shhh.. don't tell the compiler ;)
        } else {
          ast.object = this.walk(ast.object);
        }
        //ast.property = this.walk(ast.property);
        break;
      case "NewExpression":
        ast.callee = this.walk(ast.callee);
        for (let i = 0; i < ast.arguments.length; i++) {
          ast.arguments[i] = this.walk(ast.arguments[i]);
        }
        break;
      case "ObjectExpression":
        for (let i = 0; i < ast.properties.length; i++) {
          ast.properties[i] = this.walk(ast.properties[i]);
        }
        break;
      case "ObjectPattern":
        for (let i = 0; i < ast.properties.length; i++) {
          ast.properties[i] = this.walk(ast.properties[i]);
        }
        break;
      case "Program":
        for (let i = 0; i < ast.body.length; i++) {
          ast.body[i] = this.walk(ast.body[i]);
        }
        break;
      case "Property":
        ast.key = this.walk(ast.key);
        if (ast.shorthand) {
          // TODO maybe handle shorthand (idk how tho)
          throw new Error("shorthand notation for object properties not supported yet");
        }
        if (ast.value) {
          ast.value = this.walk(ast.value);
        }
        break;
      case "RestElement":
        ast.argument = this.walk(ast.argument);
        break;
      case "ReturnStatement":
        if (ast.argument) {
          ast.argument = this.walk(ast.argument);
        }
        break;
      case "SequenceExpression":
        for (let i = 0; i < ast.expressions.length; i++) {
          ast.expressions[i] = this.walk(ast.expressions[i]);
        }
        break;
      case "SpreadElement":
        ast.argument = this.walk(ast.argument);
        break;
      case "SwitchCase":
        if (ast.test) {
          ast.test = this.walk(ast.test);
        }
        for (let i = 0; i < ast.consequent.length; i++) {
          ast.consequent[i] = this.walk(ast.consequent[i]);
        }
        break;
      case "SwitchStatement":
        ast.discriminant = this.walk(ast.discriminant);
        for (let i = 0; i < ast.cases.length; i++) {
          ast.cases[i] = this.walk(ast.cases[i]);
        }
        break;
      case "TaggedTemplateExpression": // TODO maybe remove these?
        ast.tag = this.walk(ast.tag);
        ast.quasi = this.walk(ast.quasi);
        break;
      case "TemplateElement":
        break;
      case "TemplateLiteral":
        for (let i = 0; i < ast.expressions.length; i++) {
          ast.expressions[i] = this.walk(ast.expressions[i]);
        }
        break;
      case "ThisExpression":
        // TODO look at this
        break;
      case "ThrowStatement":
        ast.argument = this.walk(ast.argument);
        break;
      case "TryStatement":
        ast.block = this.walk(ast.block);
        if (ast.handler) {
          ast.handler = this.walk(ast.handler);
        }
        if (ast.finalizer) {
          ast.finalizer = this.walk(ast.finalizer);
        }
        break;
      case "UnaryExpression":
        ast.argument = this.walk(ast.argument);
        break;
      case "UpdateExpression":
        ast.argument = this.walk(ast.argument);
        break;
      case "VariableDeclaration":
        for (let i = 0; i < ast.declarations.length; i++) {
          ast.declarations[i] = this.walk(ast.declarations[i]);
        }
        break;
      case "VariableDeclarator":
        ast.id = this.walk(ast.id);
        if (ast.init) {
          ast.init = this.walk(ast.init);
        }
        break;
      case "WhileStatement":
        ast.test = this.walk(ast.test);
        ast.body = this.walk(ast.body);
        break;
      case "YieldExpression":
        if (ast.argument) {
          throw new Error("we should not have yields in our code");
        }
        break;
      case "ClassBody":
      case "ClassDeclaration":
      case "ClassExpression":
      case "ExportAllDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
      case "ExportSpecifier":
      case "ImportDeclaration":
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
      case "MetaProperty":
      case "MethodDefinition":
      case "Super":
      case "WithStatement": // we aint doin with statements in our codebase!
        throw new Error("this node is not supported because our usecase doesn't need it. type: " + ast.type);
    }
    return ast;
  }
}