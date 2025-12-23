// Generated from src/xLogo_Parser/Grammar/XLogo.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `XLogoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface XLogoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ExprLiteral`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprLiteral?: (ctx: ExprLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprColor`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprColor?: (ctx: ExprColorContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprInBrackets`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprInBrackets?: (ctx: ExprInBracketsContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprUnaryOp`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprUnaryOp?: (ctx: ExprUnaryOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpMult`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpMult?: (ctx: ExprBOpMultContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprFuncTwoArg`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprFuncTwoArg?: (ctx: ExprFuncTwoArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprFuncOneArg`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprFuncOneArg?: (ctx: ExprFuncOneArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprFuncNoArg`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprFuncNoArg?: (ctx: ExprFuncNoArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpAdd`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpAdd?: (ctx: ExprBOpAddContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpComp`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpComp?: (ctx: ExprBOpCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpEq`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpEq?: (ctx: ExprBOpEqContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpAnd`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpAnd?: (ctx: ExprBOpAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpOr`
	 * labeled alternative in `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpOr?: (ctx: ExprBOpOrContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.inputLines`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputLines?: (ctx: InputLinesContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.programDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramDeclaration?: (ctx: ProgramDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.stmtBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmtBlock?: (ctx: StmtBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.repeatStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatStmt?: (ctx: RepeatStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.whileStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.makeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMakeStmt?: (ctx: MakeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.printStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStmt?: (ctx: PrintStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.progCallStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgCallStmt?: (ctx: ProgCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `XLogoParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
}

