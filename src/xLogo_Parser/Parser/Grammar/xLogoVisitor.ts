// Generated from Grammar/xLogo.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExprLiteralContext } from "./xLogoParser";
import { ExprColorContext } from "./xLogoParser";
import { ExprInBracketsContext } from "./xLogoParser";
import { ExprUnaryOpContext } from "./xLogoParser";
import { ExprBOpMultContext } from "./xLogoParser";
import { ExprFuncTwoArgContext } from "./xLogoParser";
import { ExprFuncOneArgContext } from "./xLogoParser";
import { ExprFuncNoArgContext } from "./xLogoParser";
import { ExprBOpAddContext } from "./xLogoParser";
import { ExprBOpCompContext } from "./xLogoParser";
import { ExprBOpEqContext } from "./xLogoParser";
import { ExprBOpAndContext } from "./xLogoParser";
import { ExprBOpOrContext } from "./xLogoParser";
import { ProgContext } from "./xLogoParser";
import { InputLinesContext } from "./xLogoParser";
import { ProgramDeclarationContext } from "./xLogoParser";
import { ParamListContext } from "./xLogoParser";
import { StmtContext } from "./xLogoParser";
import { StmtBlockContext } from "./xLogoParser";
import { RepeatStmtContext } from "./xLogoParser";
import { IfStmtContext } from "./xLogoParser";
import { WhileStmtContext } from "./xLogoParser";
import { MakeStmtContext } from "./xLogoParser";
import { PrintStmtContext } from "./xLogoParser";
import { ProgCallStmtContext } from "./xLogoParser";
import { ExprContext } from "./xLogoParser";
import { LiteralContext } from "./xLogoParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `xLogoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface xLogoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ExprLiteral`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprLiteral?: (ctx: ExprLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprColor`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprColor?: (ctx: ExprColorContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprInBrackets`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprInBrackets?: (ctx: ExprInBracketsContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprUnaryOp`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprUnaryOp?: (ctx: ExprUnaryOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpMult`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpMult?: (ctx: ExprBOpMultContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprFuncTwoArg`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprFuncTwoArg?: (ctx: ExprFuncTwoArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprFuncOneArg`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprFuncOneArg?: (ctx: ExprFuncOneArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprFuncNoArg`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprFuncNoArg?: (ctx: ExprFuncNoArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpAdd`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpAdd?: (ctx: ExprBOpAddContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpComp`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpComp?: (ctx: ExprBOpCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpEq`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpEq?: (ctx: ExprBOpEqContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpAnd`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpAnd?: (ctx: ExprBOpAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExprBOpOr`
	 * labeled alternative in `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprBOpOr?: (ctx: ExprBOpOrContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.inputLines`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputLines?: (ctx: InputLinesContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.programDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramDeclaration?: (ctx: ProgramDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.stmtBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmtBlock?: (ctx: StmtBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.repeatStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatStmt?: (ctx: RepeatStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.whileStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.makeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMakeStmt?: (ctx: MakeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.printStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStmt?: (ctx: PrintStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.progCallStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgCallStmt?: (ctx: ProgCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `xLogoParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
}

