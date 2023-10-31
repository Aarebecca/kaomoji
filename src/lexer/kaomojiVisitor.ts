// Generated from ./src/lexer/kaomoji.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgContext } from "./kaomojiParser";
import { DeclStmtContext } from "./kaomojiParser";
import { AssignStmtContext } from "./kaomojiParser";
import { PrintStmtContext } from "./kaomojiParser";
import { IfStatementContext } from "./kaomojiParser";
import { LoopStmtContext } from "./kaomojiParser";
import { FuncDeclarationContext } from "./kaomojiParser";
import { FuncCallContext } from "./kaomojiParser";
import { SpecialEffectStmtContext } from "./kaomojiParser";
import { DeclContext } from "./kaomojiParser";
import { AssignContext } from "./kaomojiParser";
import { PrintContext } from "./kaomojiParser";
import { IfStmtContext } from "./kaomojiParser";
import { LoopContext } from "./kaomojiParser";
import { FunctionDeclContext } from "./kaomojiParser";
import { FunctionCallContext } from "./kaomojiParser";
import { SpecialEffectContext } from "./kaomojiParser";
import { IntExprContext } from "./kaomojiParser";
import { AddExprContext } from "./kaomojiParser";
import { MulExprContext } from "./kaomojiParser";
import { DivExprContext } from "./kaomojiParser";
import { SubExprContext } from "./kaomojiParser";
import { IdExprContext } from "./kaomojiParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `kaomojiParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class kaomojiVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `kaomojiParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
	/**
	 * Visit a parse tree produced by the `declStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclStmt?: (ctx: DeclStmtContext) => Result;
	/**
	 * Visit a parse tree produced by the `assignStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStmt?: (ctx: AssignStmtContext) => Result;
	/**
	 * Visit a parse tree produced by the `printStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStmt?: (ctx: PrintStmtContext) => Result;
	/**
	 * Visit a parse tree produced by the `ifStatement`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `loopStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStmt?: (ctx: LoopStmtContext) => Result;
	/**
	 * Visit a parse tree produced by the `funcDeclaration`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDeclaration?: (ctx: FuncDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by the `funcCall`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncCall?: (ctx: FuncCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `specialEffectStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialEffectStmt?: (ctx: SpecialEffectStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl?: (ctx: DeclContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.print`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint?: (ctx: PrintContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop?: (ctx: LoopContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.specialEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialEffect?: (ctx: SpecialEffectContext) => Result;
	/**
	 * Visit a parse tree produced by the `intExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntExpr?: (ctx: IntExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `addExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpr?: (ctx: AddExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `mulExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulExpr?: (ctx: MulExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `divExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivExpr?: (ctx: DivExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `subExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubExpr?: (ctx: SubExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `idExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdExpr?: (ctx: IdExprContext) => Result;
}

