// Generated from ./src/lexer/kaomoji.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgContext } from "./kaomojiParser";
import { StmtContext } from "./kaomojiParser";
import { DeclContext } from "./kaomojiParser";
import { AssignContext } from "./kaomojiParser";
import { PrintContext } from "./kaomojiParser";
import { IfStmtContext } from "./kaomojiParser";
import { LoopContext } from "./kaomojiParser";
import { FunctionDeclContext } from "./kaomojiParser";
import { FunctionCallContext } from "./kaomojiParser";
import { AddOperatorContext } from "./kaomojiParser";
import { SubOperatorContext } from "./kaomojiParser";
import { MulOperatorContext } from "./kaomojiParser";
import { DivOperatorContext } from "./kaomojiParser";
import { ExprContext } from "./kaomojiParser";


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
	 * Visit a parse tree produced by `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;
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
	 * Visit a parse tree produced by `kaomojiParser.addOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOperator?: (ctx: AddOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.subOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubOperator?: (ctx: SubOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.mulOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulOperator?: (ctx: MulOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.divOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivOperator?: (ctx: DivOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
}

