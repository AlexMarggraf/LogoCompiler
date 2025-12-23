// Generated from src/xLogo_Parser/Grammar/XLogo.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExprLiteralContext } from "./XLogoParser";
import { ExprColorContext } from "./XLogoParser";
import { ExprInBracketsContext } from "./XLogoParser";
import { ExprUnaryOpContext } from "./XLogoParser";
import { ExprBOpMultContext } from "./XLogoParser";
import { ExprFuncTwoArgContext } from "./XLogoParser";
import { ExprFuncOneArgContext } from "./XLogoParser";
import { ExprFuncNoArgContext } from "./XLogoParser";
import { ExprBOpAddContext } from "./XLogoParser";
import { ExprBOpCompContext } from "./XLogoParser";
import { ExprBOpEqContext } from "./XLogoParser";
import { ExprBOpAndContext } from "./XLogoParser";
import { ExprBOpOrContext } from "./XLogoParser";
import { ProgContext } from "./XLogoParser";
import { InputLinesContext } from "./XLogoParser";
import { ProgramDeclarationContext } from "./XLogoParser";
import { ParamListContext } from "./XLogoParser";
import { StmtContext } from "./XLogoParser";
import { StmtBlockContext } from "./XLogoParser";
import { RepeatStmtContext } from "./XLogoParser";
import { IfStmtContext } from "./XLogoParser";
import { WhileStmtContext } from "./XLogoParser";
import { MakeStmtContext } from "./XLogoParser";
import { PrintStmtContext } from "./XLogoParser";
import { ProgCallStmtContext } from "./XLogoParser";
import { ExprContext } from "./XLogoParser";
import { LiteralContext } from "./XLogoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `XLogoParser`.
 */
export interface XLogoListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `XLogoParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `XLogoParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

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
}

