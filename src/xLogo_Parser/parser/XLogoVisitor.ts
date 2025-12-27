
import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `XLogoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class XLogoVisitor<Result> extends AbstractParseTreeVisitor<Result> {
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
     * Visit a parse tree produced by the `ExprBOpMult`
     * labeled alternative in `XLogoParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprBOpMult?: (ctx: ExprBOpMultContext) => Result;
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
     * Visit a parse tree produced by `XLogoParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
}

