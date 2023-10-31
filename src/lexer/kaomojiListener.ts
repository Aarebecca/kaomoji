// Generated from ./src/lexer/kaomoji.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `kaomojiParser`.
 */
export default class kaomojiListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `kaomojiParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDecl?: (ctx: DeclContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDecl?: (ctx: DeclContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.print`.
	 * @param ctx the parse tree
	 */
	enterPrint?: (ctx: PrintContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.print`.
	 * @param ctx the parse tree
	 */
	exitPrint?: (ctx: PrintContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.loop`.
	 * @param ctx the parse tree
	 */
	enterLoop?: (ctx: LoopContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.loop`.
	 * @param ctx the parse tree
	 */
	exitLoop?: (ctx: LoopContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.addOperator`.
	 * @param ctx the parse tree
	 */
	enterAddOperator?: (ctx: AddOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.addOperator`.
	 * @param ctx the parse tree
	 */
	exitAddOperator?: (ctx: AddOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.subOperator`.
	 * @param ctx the parse tree
	 */
	enterSubOperator?: (ctx: SubOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.subOperator`.
	 * @param ctx the parse tree
	 */
	exitSubOperator?: (ctx: SubOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.mulOperator`.
	 * @param ctx the parse tree
	 */
	enterMulOperator?: (ctx: MulOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.mulOperator`.
	 * @param ctx the parse tree
	 */
	exitMulOperator?: (ctx: MulOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.divOperator`.
	 * @param ctx the parse tree
	 */
	enterDivOperator?: (ctx: DivOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.divOperator`.
	 * @param ctx the parse tree
	 */
	exitDivOperator?: (ctx: DivOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

