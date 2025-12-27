
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./XLogoParser.js";
import { InputLinesContext } from "./XLogoParser.js";
import { ProgramDeclarationContext } from "./XLogoParser.js";
import { ParamListContext } from "./XLogoParser.js";
import { StmtContext } from "./XLogoParser.js";
import { StmtBlockContext } from "./XLogoParser.js";
import { RepeatStmtContext } from "./XLogoParser.js";
import { IfStmtContext } from "./XLogoParser.js";
import { WhileStmtContext } from "./XLogoParser.js";
import { MakeStmtContext } from "./XLogoParser.js";
import { PrintStmtContext } from "./XLogoParser.js";
import { ProgCallStmtContext } from "./XLogoParser.js";
import { ExprLiteralContext } from "./XLogoParser.js";
import { ExprColorContext } from "./XLogoParser.js";
import { ExprInBracketsContext } from "./XLogoParser.js";
import { ExprUnaryOpContext } from "./XLogoParser.js";
import { ExprFuncTwoArgContext } from "./XLogoParser.js";
import { ExprFuncOneArgContext } from "./XLogoParser.js";
import { ExprFuncNoArgContext } from "./XLogoParser.js";
import { ExprBOpMultContext } from "./XLogoParser.js";
import { ExprBOpAddContext } from "./XLogoParser.js";
import { ExprBOpCompContext } from "./XLogoParser.js";
import { ExprBOpEqContext } from "./XLogoParser.js";
import { ExprBOpAndContext } from "./XLogoParser.js";
import { ExprBOpOrContext } from "./XLogoParser.js";
import { LiteralContext } from "./XLogoParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `XLogoParser`.
 */
export class XLogoListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `XLogoParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.inputLines`.
     * @param ctx the parse tree
     */
    enterInputLines?: (ctx: InputLinesContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.inputLines`.
     * @param ctx the parse tree
     */
    exitInputLines?: (ctx: InputLinesContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.programDeclaration`.
     * @param ctx the parse tree
     */
    enterProgramDeclaration?: (ctx: ProgramDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.programDeclaration`.
     * @param ctx the parse tree
     */
    exitProgramDeclaration?: (ctx: ProgramDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.paramList`.
     * @param ctx the parse tree
     */
    enterParamList?: (ctx: ParamListContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.paramList`.
     * @param ctx the parse tree
     */
    exitParamList?: (ctx: ParamListContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.stmt`.
     * @param ctx the parse tree
     */
    enterStmt?: (ctx: StmtContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.stmt`.
     * @param ctx the parse tree
     */
    exitStmt?: (ctx: StmtContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.stmtBlock`.
     * @param ctx the parse tree
     */
    enterStmtBlock?: (ctx: StmtBlockContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.stmtBlock`.
     * @param ctx the parse tree
     */
    exitStmtBlock?: (ctx: StmtBlockContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.repeatStmt`.
     * @param ctx the parse tree
     */
    enterRepeatStmt?: (ctx: RepeatStmtContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.repeatStmt`.
     * @param ctx the parse tree
     */
    exitRepeatStmt?: (ctx: RepeatStmtContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.ifStmt`.
     * @param ctx the parse tree
     */
    enterIfStmt?: (ctx: IfStmtContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.ifStmt`.
     * @param ctx the parse tree
     */
    exitIfStmt?: (ctx: IfStmtContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.whileStmt`.
     * @param ctx the parse tree
     */
    enterWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.whileStmt`.
     * @param ctx the parse tree
     */
    exitWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.makeStmt`.
     * @param ctx the parse tree
     */
    enterMakeStmt?: (ctx: MakeStmtContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.makeStmt`.
     * @param ctx the parse tree
     */
    exitMakeStmt?: (ctx: MakeStmtContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.printStmt`.
     * @param ctx the parse tree
     */
    enterPrintStmt?: (ctx: PrintStmtContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.printStmt`.
     * @param ctx the parse tree
     */
    exitPrintStmt?: (ctx: PrintStmtContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.progCallStmt`.
     * @param ctx the parse tree
     */
    enterProgCallStmt?: (ctx: ProgCallStmtContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.progCallStmt`.
     * @param ctx the parse tree
     */
    exitProgCallStmt?: (ctx: ProgCallStmtContext) => void;
    /**
     * Enter a parse tree produced by the `ExprLiteral`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprLiteral?: (ctx: ExprLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `ExprLiteral`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprLiteral?: (ctx: ExprLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `ExprColor`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprColor?: (ctx: ExprColorContext) => void;
    /**
     * Exit a parse tree produced by the `ExprColor`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprColor?: (ctx: ExprColorContext) => void;
    /**
     * Enter a parse tree produced by the `ExprInBrackets`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprInBrackets?: (ctx: ExprInBracketsContext) => void;
    /**
     * Exit a parse tree produced by the `ExprInBrackets`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprInBrackets?: (ctx: ExprInBracketsContext) => void;
    /**
     * Enter a parse tree produced by the `ExprUnaryOp`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprUnaryOp?: (ctx: ExprUnaryOpContext) => void;
    /**
     * Exit a parse tree produced by the `ExprUnaryOp`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprUnaryOp?: (ctx: ExprUnaryOpContext) => void;
    /**
     * Enter a parse tree produced by the `ExprFuncTwoArg`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprFuncTwoArg?: (ctx: ExprFuncTwoArgContext) => void;
    /**
     * Exit a parse tree produced by the `ExprFuncTwoArg`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprFuncTwoArg?: (ctx: ExprFuncTwoArgContext) => void;
    /**
     * Enter a parse tree produced by the `ExprFuncOneArg`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprFuncOneArg?: (ctx: ExprFuncOneArgContext) => void;
    /**
     * Exit a parse tree produced by the `ExprFuncOneArg`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprFuncOneArg?: (ctx: ExprFuncOneArgContext) => void;
    /**
     * Enter a parse tree produced by the `ExprFuncNoArg`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprFuncNoArg?: (ctx: ExprFuncNoArgContext) => void;
    /**
     * Exit a parse tree produced by the `ExprFuncNoArg`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprFuncNoArg?: (ctx: ExprFuncNoArgContext) => void;
    /**
     * Enter a parse tree produced by the `ExprBOpMult`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprBOpMult?: (ctx: ExprBOpMultContext) => void;
    /**
     * Exit a parse tree produced by the `ExprBOpMult`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprBOpMult?: (ctx: ExprBOpMultContext) => void;
    /**
     * Enter a parse tree produced by the `ExprBOpAdd`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprBOpAdd?: (ctx: ExprBOpAddContext) => void;
    /**
     * Exit a parse tree produced by the `ExprBOpAdd`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprBOpAdd?: (ctx: ExprBOpAddContext) => void;
    /**
     * Enter a parse tree produced by the `ExprBOpComp`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprBOpComp?: (ctx: ExprBOpCompContext) => void;
    /**
     * Exit a parse tree produced by the `ExprBOpComp`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprBOpComp?: (ctx: ExprBOpCompContext) => void;
    /**
     * Enter a parse tree produced by the `ExprBOpEq`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprBOpEq?: (ctx: ExprBOpEqContext) => void;
    /**
     * Exit a parse tree produced by the `ExprBOpEq`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprBOpEq?: (ctx: ExprBOpEqContext) => void;
    /**
     * Enter a parse tree produced by the `ExprBOpAnd`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprBOpAnd?: (ctx: ExprBOpAndContext) => void;
    /**
     * Exit a parse tree produced by the `ExprBOpAnd`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprBOpAnd?: (ctx: ExprBOpAndContext) => void;
    /**
     * Enter a parse tree produced by the `ExprBOpOr`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    enterExprBOpOr?: (ctx: ExprBOpOrContext) => void;
    /**
     * Exit a parse tree produced by the `ExprBOpOr`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     */
    exitExprBOpOr?: (ctx: ExprBOpOrContext) => void;
    /**
     * Enter a parse tree produced by `XLogoParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `XLogoParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

