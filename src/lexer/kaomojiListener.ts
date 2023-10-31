// Generated from ./src/lexer/kaomoji.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
	 * Enter a parse tree produced by the `declStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterDeclStmt?: (ctx: DeclStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `declStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitDeclStmt?: (ctx: DeclStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `assignStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt?: (ctx: AssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `assignStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt?: (ctx: AssignStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `printStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterPrintStmt?: (ctx: PrintStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `printStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitPrintStmt?: (ctx: PrintStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `ifStatement`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ifStatement`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `loopStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterLoopStmt?: (ctx: LoopStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `loopStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitLoopStmt?: (ctx: LoopStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `funcDeclaration`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterFuncDeclaration?: (ctx: FuncDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `funcDeclaration`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitFuncDeclaration?: (ctx: FuncDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `funcCall`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterFuncCall?: (ctx: FuncCallContext) => void;
	/**
	 * Exit a parse tree produced by the `funcCall`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitFuncCall?: (ctx: FuncCallContext) => void;
	/**
	 * Enter a parse tree produced by the `specialEffectStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterSpecialEffectStmt?: (ctx: SpecialEffectStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `specialEffectStmt`
	 * labeled alternative in `kaomojiParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitSpecialEffectStmt?: (ctx: SpecialEffectStmtContext) => void;
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
	 * Enter a parse tree produced by `kaomojiParser.specialEffect`.
	 * @param ctx the parse tree
	 */
	enterSpecialEffect?: (ctx: SpecialEffectContext) => void;
	/**
	 * Exit a parse tree produced by `kaomojiParser.specialEffect`.
	 * @param ctx the parse tree
	 */
	exitSpecialEffect?: (ctx: SpecialEffectContext) => void;
	/**
	 * Enter a parse tree produced by the `intExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIntExpr?: (ctx: IntExprContext) => void;
	/**
	 * Exit a parse tree produced by the `intExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIntExpr?: (ctx: IntExprContext) => void;
	/**
	 * Enter a parse tree produced by the `addExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddExpr?: (ctx: AddExprContext) => void;
	/**
	 * Exit a parse tree produced by the `addExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddExpr?: (ctx: AddExprContext) => void;
	/**
	 * Enter a parse tree produced by the `mulExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMulExpr?: (ctx: MulExprContext) => void;
	/**
	 * Exit a parse tree produced by the `mulExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMulExpr?: (ctx: MulExprContext) => void;
	/**
	 * Enter a parse tree produced by the `divExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDivExpr?: (ctx: DivExprContext) => void;
	/**
	 * Exit a parse tree produced by the `divExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDivExpr?: (ctx: DivExprContext) => void;
	/**
	 * Enter a parse tree produced by the `subExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSubExpr?: (ctx: SubExprContext) => void;
	/**
	 * Exit a parse tree produced by the `subExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSubExpr?: (ctx: SubExprContext) => void;
	/**
	 * Enter a parse tree produced by the `idExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIdExpr?: (ctx: IdExprContext) => void;
	/**
	 * Exit a parse tree produced by the `idExpr`
	 * labeled alternative in `kaomojiParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIdExpr?: (ctx: IdExprContext) => void;
}

