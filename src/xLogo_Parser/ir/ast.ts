import {Token, CharStream} from 'antlr4ts';
import {ASTVisitor} from '../ASTVisitor';
import {BuiltInCommandStructure, DefinedBuiltIns} from './builtInCommands';
import {Color} from './color';
import {UnknownType, XLogoType} from './types';

export class Range {
  constructor(
    public readonly StartStreamIndex: number,
    public readonly StartLine: number,
    public readonly StarColumn: number,
    public readonly EndStreamIndex: number,
    public readonly EndLine: number,
    public readonly EndColumn: number,
  ) {}
}

function getRangeFromToken(token: Token) {
  return new Range(
    token.startIndex,
    token.line,
    token.charPositionInLine,
    token.stopIndex,
    token.line,
    token.charPositionInLine + 1 + (token.stopIndex - token.startIndex),
  );
}

/**
 * AST
 *
 * Base class for all AST for Logo
 */
export abstract class AST {
  public rwChildren: (AST | undefined)[] = [];

  /**
   * Constructor for base class AST. If the Range argument is given, the other
   * arguments must be given as well and are guaranteed to be non-undefined.
   *
   * @param range Range where in the text the AST is located. Can be used for example for highlighting.
   * @param charStream The input stream from which the AST was constructed.
   * @param inputSource Name of the input source.
   */
  constructor(
    public readonly range?: Range,
    public readonly charStream?: CharStream | undefined,
    public readonly inputSource?: string,
  ) {
    if (range && (!charStream || !inputSource)) {
      throw Error(
        'ArgumentError: If the Range argument for the constructor of AST is given, ' +
          'the other two arguments must be given as well.',
      );
    }
  }

  /**
   * Returns all children. Makes sure that there is no undefined
   * or null reference in the list
   */
  public getChildren(): AST[] {
    const result: AST[] = [];
    this.rwChildren.forEach((ast) => {
      if (ast) {
        result.push(ast);
      }
    });
    return result;
  }

  public abstract accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result;
}

/**
 * Stmt
 *
 * Base for Statement
 */
export abstract class Stmt extends AST {}

/**
 * Expr
 *
 * Base for expressions
 */
export abstract class Expr extends AST {
  public override rwChildren: (Expr | undefined)[] = [];

  public Type: XLogoType = new UnknownType();

  public override getChildren(): Expr[] {
    const result: Expr[] = [];
    this.rwChildren.forEach((ast) => {
      if (ast) {
        result.push(ast);
      }
    });
    return result;
  }
}

/**
 * ProgDecl
 *
 * AST that defines a program declaration
 */
export class ProgDecl extends AST {
  public name: string;
  public readonly IdentifierRange: Range;
  /**
   *
   * @param nameToken The name of the program that is declared
   * @param argumentNames The names of all arguments
   * @param body The body of the program
   */
  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    token: Token,
    public args: VarDecl[],
    body: Seq,
  ) {
    super(range, charStream, inputSource);
    if (token.text) {
      this.name = token.text;
    } else {
      throw new Error('Token did not contain text to be used as name');
    }
    this.rwChildren.push(body);
    this.IdentifierRange = getRangeFromToken(token);
  }

  get body(): Seq {
    return this.rwChildren[0] as Seq;
  }
  set body(value: Seq) {
    this.rwChildren[0] = value;
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitProgDecl(this, args);
  }
}

/**
 * Seq
 *
 * AST that contains multiple ASTs. Is used as body such as for
 * programs or if-then-else blocks
 */
export class Seq extends AST {
  constructor(nodes: AST[]) {
    super();
    nodes.forEach((val) => this.rwChildren.push(val));
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitSeq(this, args);
  }
}

/**
 * VarDecl
 *
 * Definition of a variable
 */
export class VarDecl extends AST {
  public readonly name: string;
  //public Type: XLogoType = new UnknownType();

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    token: Token,
  ) {
    super(range, charStream, inputSource);
    if (token.text) {
      this.name = token.text;
    } else {
      throw new Error('Token did not contain text to be used as name');
    }
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitVarDecl(this, args);
  }
}

/*
 * ---------------
 * STATEMENTS
 * ---------------
 */

/**
 * IfElseStmt
 *
 * AST for if-else statements
 */
export class IfElseStmt extends Stmt {
  public readonly IdentifierRange: Range;

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    token: Token,
    condition: Expr,
    thenBlock: Seq,
    elseBlock?: Seq,
  ) {
    super(range, charStream, inputSource);

    this.rwChildren.push(condition);
    this.rwChildren.push(thenBlock);
    this.rwChildren.push(elseBlock);
    this.IdentifierRange = getRangeFromToken(token);
  }

  get condition(): Expr {
    return this.rwChildren[0] as Expr;
  }
  set condition(value: Expr) {
    this.rwChildren[0] = value;
  }

  get thenBlock(): Seq {
    return this.rwChildren[1] as Seq;
  }
  set thenBlock(value: Seq) {
    this.rwChildren[1] = value;
  }

  get elseBlock(): Seq | undefined {
    return this.rwChildren[2] as Seq | undefined;
  }
  set elseBlock(value: Seq | undefined) {
    this.rwChildren[2] = value;
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitIfElseStmt(this, args);
  }
}

/**
 * RepeatStmt
 *
 * AST for repeat loop statement
 */
export class RepeatStmt extends Stmt {
  public readonly IdentifierRange: Range;

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    token: Token,
    repeatCount: Expr,
    loopBody: Seq,
  ) {
    super(range, charStream, inputSource);
    this.rwChildren.push(repeatCount);
    this.rwChildren.push(loopBody);
    this.IdentifierRange = getRangeFromToken(token);
  }

  get repeatCount(): Expr {
    return this.rwChildren[0] as Expr;
  }
  set repeatCount(value: Expr) {
    this.rwChildren[0] = value;
  }

  get loopBody(): Seq {
    return this.rwChildren[1] as Seq;
  }
  set loopBody(value: Seq) {
    this.rwChildren[1] = value;
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitRepeatStmt(this, args);
  }
}

/**
 * WhileStmt
 *
 * AST for while loop statement
 */
export class WhileStmt extends Stmt {
  public readonly IdentifierRange: Range;
  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    token: Token,
    condition: Expr,
    loopBody: Seq,
  ) {
    super(range, charStream, inputSource);
    this.rwChildren.push(condition);
    this.rwChildren.push(loopBody);
    this.IdentifierRange = getRangeFromToken(token);
  }

  get condition(): Expr {
    return this.rwChildren[0] as Expr;
  }
  set condition(value: Expr) {
    this.rwChildren[0] = value;
  }

  get loopBody(): Seq {
    return this.rwChildren[1] as Seq;
  }
  set loopBody(value: Seq) {
    this.rwChildren[1] = value;
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitWhileStmt(this, args);
  }
}

/**
 * ProgCallStmt
 *
 * AST call to a user defined program (aka function)
 */
export class ProgCallStmt extends Stmt {
  public progName: string;
  public readonly IdentifierRange: Range;

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    token: Token,
    args: Expr[],
  ) {
    super(range, charStream, inputSource);
    args.forEach((val) => this.rwChildren.push(val));
    if (token.text) {
      this.progName = token.text;
    } else {
      throw new Error('Token did not contain text to be used as name');
    }
    this.IdentifierRange = getRangeFromToken(token);
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitProgCallStmt(this, args);
  }
}

/**
 * PrintStmt
 *
 * AST to print something
 */
export class PrintStmt extends Stmt {
  /**
   * This field is undefined if the argument of the print command is an expression
   * Else this field is set to a string and this.rwChildren[0] is set to undefined
   */
  private _arg: string | undefined;

  public readonly IdentifierRange: Range;

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    token: Token,
    arg: Expr | string,
  ) {
    super(range, charStream, inputSource);
    if (arg instanceof Expr) {
      this._arg = undefined;
      this.rwChildren.push(arg);
    } else {
      this._arg = arg;
      this.rwChildren.push(undefined);
    }
    this.IdentifierRange = getRangeFromToken(token);
  }

  /**
   * Returns a string if the print command should print a string or undefined if it should print and expression.
   */
  public argString(): string | undefined {
    return this._arg;
  }

  public argExpr(): Expr | undefined {
    return this.rwChildren[0] as Expr;
  }

  public setArg(arg: Expr | string): void {
    if (arg instanceof Expr) {
      this._arg = undefined;
      this.rwChildren[0] = arg;
    } else {
      this._arg = arg;
      this.rwChildren[0] = undefined;
    }
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitPrintStmt(this, args);
  }
}

/**
 * MakeStmt
 *
 * AST for make statement. Make defines new variables
 */
export class MakeStmt extends Stmt {
  public readonly IdentifierRange: Range;

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    token: Token,
    public declName: VarDecl,
    value: Expr,
  ) {
    super(range, charStream, inputSource);
    this.rwChildren.push(value);
    this.IdentifierRange = getRangeFromToken(token);
  }

  get value(): Expr {
    return this.rwChildren[0] as Expr;
  }
  set value(value: Expr) {
    this.rwChildren[0] = value;
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitMakeStmt(this, args);
  }
}

/**
 * BuiltInCommand
 *
 * Built-in command like 'forward' etc.
 */
export class BuiltInCommand extends Stmt {
  public command: DefinedBuiltIns;
  public commandName: string;
  public requiredArgs: XLogoType[];

  public readonly IdentifierRange: Range;

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    structure: BuiltInCommandStructure,
    token: Token,
    args: Expr[],
  ) {
    super(range, charStream, inputSource);
    args.forEach((val) => this.rwChildren.push(val));
    this.command = structure.command;
    if (token.text) {
      this.commandName = token.text;
    } else {
      // This should never happen, but safe is safe...
      this.commandName = structure.names[0];
    }
    this.requiredArgs = structure.args;
    this.IdentifierRange = getRangeFromToken(token);
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitBuiltInCommand(this, args);
  }
}

/*
 * ---------------------
 * EXPRESSIONS
 * ---------------------
 */

/**
 * BinaryOpExpr
 *
 * A binary operation combining a left and right operand,
 * such as "1+2" or "3*4"
 * */
export class BinaryOpExpr extends Expr {
  public operator: BinaryOp;

  // Typescript does not support reverse lookups for string enums.
  // But we need to know which characters are which enum to distinguish later
  private static getEnumFromString(op: string | undefined): BinaryOp {
    switch (op) {
      case '*':
        return BinaryOp.B_TIMES;
      case '/':
        return BinaryOp.B_DIV;
      case '%':
        return BinaryOp.B_MOD;
      case '+':
        return BinaryOp.B_PLUS;
      case '-':
        return BinaryOp.B_MINUS;
      case '&&':
        return BinaryOp.B_AND;
      case '||':
        return BinaryOp.B_OR;
      case '=':
        return BinaryOp.B_EQUAL;
      case '!=':
        return BinaryOp.B_NOT_EQUAL;
      case '<':
        return BinaryOp.B_LESS_THAN;
      case '<=':
        return BinaryOp.B_LESS_OR_EQUAL;
      case '>':
        return BinaryOp.B_GREATER_THAN;
      case '>=':
        return BinaryOp.B_GREATER_OR_EQUAL;
      default:
        throw new Error("No BinaryOp defined with '" + op + "'");
    }
  }

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    token: Token,
    left: Expr,
    right: Expr,
  ) {
    super(range, charStream, inputSource);
    this.operator = BinaryOpExpr.getEnumFromString(token.text);

    this.rwChildren.push(left);
    this.rwChildren.push(right);
  }

  get left(): Expr {
    return this.rwChildren[0] as Expr;
  }
  set left(value: Expr) {
    this.rwChildren[0] = value;
  }

  get right(): Expr {
    return this.rwChildren[1] as Expr;
  }
  set right(value: Expr) {
    this.rwChildren[1] = value;
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitBinaryOpExpr(this, args);
  }
}

/**
 * UnaryOpExpr
 *
 * A operation with only one argument such as "!:x" or "-:x"
 * */
export class UnaryOpExpr extends Expr {
  public operator: UnaryOp;

  private static getEnumFromString(op: string | undefined): UnaryOp {
    switch (op) {
      case '+':
        return UnaryOp.U_PLUS;
      case '-':
        return UnaryOp.U_MINUS;
      case '!':
        return UnaryOp.U_BOOL_NOT;
      default:
        throw new Error("No BinaryOp defined with '" + op + "'");
    }
  }

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    operator: string,
    arg: Expr,
  ) {
    super(range, charStream, inputSource);
    this.rwChildren.push(arg);
    this.operator = UnaryOpExpr.getEnumFromString(operator);
  }

  get arg(): Expr {
    return this.rwChildren[0] as Expr;
  }
  set arg(value: Expr) {
    this.rwChildren[0] = value;
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitUnaryOpExpr(this, args);
  }
}

export class FuncExpr extends Expr {
  public readonly IdentifierRange: Range;

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    token: Token,
    public readonly name: string,
    args: Expr[],
  ) {
    super(range, charStream, inputSource);
    args.forEach((val) => this.rwChildren.push(val));
    this.IdentifierRange = getRangeFromToken(token);
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitFuncExpr(this, args);
  }
}

export class ColorExpr extends Expr {
  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    red: Expr,
    green: Expr,
    blue: Expr,
  ) {
    super(range, charStream, inputSource);
    this.rwChildren.push(red);
    this.rwChildren.push(green);
    this.rwChildren.push(blue);
  }

  get red(): Expr {
    return this.rwChildren[0] as Expr;
  }
  set red(value: Expr) {
    this.rwChildren[0] = value;
  }

  get green(): Expr {
    return this.rwChildren[1] as Expr;
  }
  set green(value: Expr) {
    this.rwChildren[1] = value;
  }

  get blue(): Expr {
    return this.rwChildren[2] as Expr;
  }
  set blue(value: Expr) {
    this.rwChildren[2] = value;
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitColorExpr(this, args);
  }
}

export class VarExpr extends Expr {
  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    public readonly name: string,
  ) {
    super(range, charStream, inputSource);
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitVarExpr(this, args);
  }
}

export class NumberConst extends Expr {
  public readonly valueAsNumber: number;

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    value: number,
  ) {
    super(range, charStream, inputSource);
    this.valueAsNumber = value;
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitNumberConst(this, args);
  }
}

export class BoolConst extends Expr {
  public readonly valueAsBool: boolean;

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    value: boolean,
  ) {
    super(range, charStream, inputSource);
    this.valueAsBool = value;
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitBoolConst(this, args);
  }
}

export class ColorConst extends Expr {
  public readonly color: Color;

  constructor(
    range: Range,
    charStream: CharStream | undefined,
    inputSource: string,
    public readonly colorName: string,
  ) {
    super(range, charStream, inputSource);
    const lookedUp = Color.lookupColor(this.colorName);
    if (lookedUp) {
      this.color = lookedUp;
    } else {
      // This should never happen but save is save...
      // TODO: Would it be better to throw error?
      this.color = Color.BLACK;
    }
  }

  public accept<Args, Result>(
    visitor: ASTVisitor<Args, Result>,
    args: Args,
  ): Result {
    return visitor.visitColorConst(this, args);
  }
}

export enum BinaryOp {
  B_TIMES = '*',
  B_DIV = '/',
  B_MOD = '%',
  B_PLUS = '+',
  B_MINUS = '-',
  B_AND = '&&',
  B_OR = '||',
  B_EQUAL = '=',
  B_NOT_EQUAL = '!=',
  B_LESS_THAN = '<',
  B_LESS_OR_EQUAL = '<=',
  B_GREATER_THAN = '>',
  B_GREATER_OR_EQUAL = '>=',
}

export enum UnaryOp {
  U_PLUS = '+',
  U_MINUS = '-',
  U_BOOL_NOT = '!',
}
