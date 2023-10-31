// Generated from ./src/lexer/kaomoji.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import kaomojiListener from "./kaomojiListener.js";
import kaomojiVisitor from "./kaomojiVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class kaomojiParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly STRING = 16;
	public static readonly ID = 17;
	public static readonly INT = 18;
	public static readonly WS = 19;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_decl = 2;
	public static readonly RULE_assign = 3;
	public static readonly RULE_print = 4;
	public static readonly RULE_ifStmt = 5;
	public static readonly RULE_loop = 6;
	public static readonly RULE_functionDecl = 7;
	public static readonly RULE_functionCall = 8;
	public static readonly RULE_addOperator = 9;
	public static readonly RULE_subOperator = 10;
	public static readonly RULE_mulOperator = 11;
	public static readonly RULE_divOperator = 12;
	public static readonly RULE_expr = 13;
	public static readonly literalNames: (string | null)[] = [ null, "'^_^'", 
                                                            "'T_T'", "'o_o'", 
                                                            "'=_='", "'<_<'", 
                                                            "'?_?'", "'!_!'", 
                                                            "'@_@'", "'#_#'", 
                                                            "'(\\u2192_\\u2190)'", 
                                                            "'^o^'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "STRING", "ID", 
                                                             "INT", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stmt", "decl", "assign", "print", "ifStmt", "loop", "functionDecl", 
		"functionCall", "addOperator", "subOperator", "mulOperator", "divOperator", 
		"expr",
	];
	public get grammarFileName(): string { return "kaomoji.g4"; }
	public get literalNames(): (string | null)[] { return kaomojiParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return kaomojiParser.symbolicNames; }
	public get ruleNames(): string[] { return kaomojiParser.ruleNames; }
	public get serializedATN(): number[] { return kaomojiParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, kaomojiParser._ATN, kaomojiParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, kaomojiParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 28;
			this.match(kaomojiParser.T__0);
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 134504) !== 0)) {
				{
				{
				this.state = 29;
				this.stmt();
				}
				}
				this.state = 34;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 35;
			this.match(kaomojiParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let localctx: StmtContext = new StmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, kaomojiParser.RULE_stmt);
		try {
			this.state = 44;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 37;
				this.decl();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 38;
				this.assign();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 39;
				this.print();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 40;
				this.ifStmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 41;
				this.loop();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 42;
				this.functionDecl();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 43;
				this.functionCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decl(): DeclContext {
		let localctx: DeclContext = new DeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, kaomojiParser.RULE_decl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 46;
			this.match(kaomojiParser.T__2);
			this.state = 47;
			this.match(kaomojiParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let localctx: AssignContext = new AssignContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, kaomojiParser.RULE_assign);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this.match(kaomojiParser.ID);
			this.state = 50;
			this.match(kaomojiParser.T__3);
			this.state = 51;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public print(): PrintContext {
		let localctx: PrintContext = new PrintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, kaomojiParser.RULE_print);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 53;
			this.match(kaomojiParser.T__4);
			this.state = 54;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let localctx: IfStmtContext = new IfStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, kaomojiParser.RULE_ifStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.match(kaomojiParser.T__5);
			this.state = 57;
			this.expr(0);
			this.state = 58;
			this.stmt();
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 59;
				this.match(kaomojiParser.T__6);
				this.state = 60;
				this.stmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public loop(): LoopContext {
		let localctx: LoopContext = new LoopContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, kaomojiParser.RULE_loop);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.match(kaomojiParser.T__7);
			this.state = 64;
			this.expr(0);
			this.state = 65;
			this.stmt();
			this.state = 66;
			this.match(kaomojiParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let localctx: FunctionDeclContext = new FunctionDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, kaomojiParser.RULE_functionDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.match(kaomojiParser.T__9);
			this.state = 69;
			this.match(kaomojiParser.ID);
			this.state = 70;
			this.stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, kaomojiParser.RULE_functionCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 72;
			this.match(kaomojiParser.T__10);
			this.state = 73;
			this.match(kaomojiParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addOperator(): AddOperatorContext {
		let localctx: AddOperatorContext = new AddOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, kaomojiParser.RULE_addOperator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(kaomojiParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subOperator(): SubOperatorContext {
		let localctx: SubOperatorContext = new SubOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, kaomojiParser.RULE_subOperator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.match(kaomojiParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mulOperator(): MulOperatorContext {
		let localctx: MulOperatorContext = new MulOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, kaomojiParser.RULE_mulOperator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(kaomojiParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public divOperator(): DivOperatorContext {
		let localctx: DivOperatorContext = new DivOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, kaomojiParser.RULE_divOperator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 81;
			this.match(kaomojiParser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 26;
		this.enterRecursionRule(localctx, 26, kaomojiParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
				{
				this.state = 84;
				this.match(kaomojiParser.INT);
				}
				break;
			case 16:
				{
				this.state = 85;
				this.match(kaomojiParser.STRING);
				}
				break;
			case 17:
				{
				this.state = 86;
				this.match(kaomojiParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 107;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 105;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, kaomojiParser.RULE_expr);
						this.state = 89;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 90;
						this.addOperator();
						this.state = 91;
						this.expr(5);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, kaomojiParser.RULE_expr);
						this.state = 93;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 94;
						this.subOperator();
						this.state = 95;
						this.expr(4);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, kaomojiParser.RULE_expr);
						this.state = 97;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 98;
						this.mulOperator();
						this.state = 99;
						this.expr(3);
						}
						break;
					case 4:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, kaomojiParser.RULE_expr);
						this.state = 101;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 102;
						this.divOperator();
						this.state = 103;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 2);
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,19,111,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,1,0,1,0,5,0,31,8,0,10,0,12,0,34,9,
	0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,45,8,1,1,2,1,2,1,2,1,3,1,3,1,
	3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,3,5,62,8,5,1,6,1,6,1,6,1,6,1,6,1,
	7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,
	13,1,13,1,13,3,13,88,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,106,8,13,10,13,12,13,109,9,13,1,
	13,0,1,26,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,0,110,0,28,1,0,0,0,
	2,44,1,0,0,0,4,46,1,0,0,0,6,49,1,0,0,0,8,53,1,0,0,0,10,56,1,0,0,0,12,63,
	1,0,0,0,14,68,1,0,0,0,16,72,1,0,0,0,18,75,1,0,0,0,20,77,1,0,0,0,22,79,1,
	0,0,0,24,81,1,0,0,0,26,87,1,0,0,0,28,32,5,1,0,0,29,31,3,2,1,0,30,29,1,0,
	0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,32,1,0,0,
	0,35,36,5,2,0,0,36,1,1,0,0,0,37,45,3,4,2,0,38,45,3,6,3,0,39,45,3,8,4,0,
	40,45,3,10,5,0,41,45,3,12,6,0,42,45,3,14,7,0,43,45,3,16,8,0,44,37,1,0,0,
	0,44,38,1,0,0,0,44,39,1,0,0,0,44,40,1,0,0,0,44,41,1,0,0,0,44,42,1,0,0,0,
	44,43,1,0,0,0,45,3,1,0,0,0,46,47,5,3,0,0,47,48,5,17,0,0,48,5,1,0,0,0,49,
	50,5,17,0,0,50,51,5,4,0,0,51,52,3,26,13,0,52,7,1,0,0,0,53,54,5,5,0,0,54,
	55,3,26,13,0,55,9,1,0,0,0,56,57,5,6,0,0,57,58,3,26,13,0,58,61,3,2,1,0,59,
	60,5,7,0,0,60,62,3,2,1,0,61,59,1,0,0,0,61,62,1,0,0,0,62,11,1,0,0,0,63,64,
	5,8,0,0,64,65,3,26,13,0,65,66,3,2,1,0,66,67,5,9,0,0,67,13,1,0,0,0,68,69,
	5,10,0,0,69,70,5,17,0,0,70,71,3,2,1,0,71,15,1,0,0,0,72,73,5,11,0,0,73,74,
	5,17,0,0,74,17,1,0,0,0,75,76,5,12,0,0,76,19,1,0,0,0,77,78,5,13,0,0,78,21,
	1,0,0,0,79,80,5,14,0,0,80,23,1,0,0,0,81,82,5,15,0,0,82,25,1,0,0,0,83,84,
	6,13,-1,0,84,88,5,18,0,0,85,88,5,16,0,0,86,88,5,17,0,0,87,83,1,0,0,0,87,
	85,1,0,0,0,87,86,1,0,0,0,88,107,1,0,0,0,89,90,10,4,0,0,90,91,3,18,9,0,91,
	92,3,26,13,5,92,106,1,0,0,0,93,94,10,3,0,0,94,95,3,20,10,0,95,96,3,26,13,
	4,96,106,1,0,0,0,97,98,10,2,0,0,98,99,3,22,11,0,99,100,3,26,13,3,100,106,
	1,0,0,0,101,102,10,1,0,0,102,103,3,24,12,0,103,104,3,26,13,2,104,106,1,
	0,0,0,105,89,1,0,0,0,105,93,1,0,0,0,105,97,1,0,0,0,105,101,1,0,0,0,106,
	109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,27,1,0,0,0,109,107,1,0,
	0,0,6,32,44,61,87,105,107];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!kaomojiParser.__ATN) {
			kaomojiParser.__ATN = new ATNDeserializer().deserialize(kaomojiParser._serializedATN);
		}

		return kaomojiParser.__ATN;
	}


	static DecisionsToDFA = kaomojiParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_prog;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public decl(): DeclContext {
		return this.getTypedRuleContext(DeclContext, 0) as DeclContext;
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public print(): PrintContext {
		return this.getTypedRuleContext(PrintContext, 0) as PrintContext;
	}
	public ifStmt(): IfStmtContext {
		return this.getTypedRuleContext(IfStmtContext, 0) as IfStmtContext;
	}
	public loop(): LoopContext {
		return this.getTypedRuleContext(LoopContext, 0) as LoopContext;
	}
	public functionDecl(): FunctionDeclContext {
		return this.getTypedRuleContext(FunctionDeclContext, 0) as FunctionDeclContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_stmt;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterStmt) {
	 		listener.enterStmt(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitStmt) {
	 		listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(kaomojiParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_decl;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterDecl) {
	 		listener.enterDecl(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitDecl) {
	 		listener.exitDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitDecl) {
			return visitor.visitDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(kaomojiParser.ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_assign;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterAssign) {
	 		listener.enterAssign(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitAssign) {
	 		listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_print;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterPrint) {
	 		listener.enterPrint(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitPrint) {
	 		listener.exitPrint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitPrint) {
			return visitor.visitPrint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_ifStmt;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterIfStmt) {
	 		listener.enterIfStmt(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitIfStmt) {
	 		listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public stmt(): StmtContext {
		return this.getTypedRuleContext(StmtContext, 0) as StmtContext;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_loop;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterLoop) {
	 		listener.enterLoop(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitLoop) {
	 		listener.exitLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitLoop) {
			return visitor.visitLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(kaomojiParser.ID, 0);
	}
	public stmt(): StmtContext {
		return this.getTypedRuleContext(StmtContext, 0) as StmtContext;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_functionDecl;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterFunctionDecl) {
	 		listener.enterFunctionDecl(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitFunctionDecl) {
	 		listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(kaomojiParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_functionCall;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddOperatorContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_addOperator;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterAddOperator) {
	 		listener.enterAddOperator(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitAddOperator) {
	 		listener.exitAddOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitAddOperator) {
			return visitor.visitAddOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubOperatorContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_subOperator;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterSubOperator) {
	 		listener.enterSubOperator(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitSubOperator) {
	 		listener.exitSubOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitSubOperator) {
			return visitor.visitSubOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MulOperatorContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_mulOperator;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterMulOperator) {
	 		listener.enterMulOperator(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitMulOperator) {
	 		listener.exitMulOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitMulOperator) {
			return visitor.visitMulOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DivOperatorContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_divOperator;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterDivOperator) {
	 		listener.enterDivOperator(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitDivOperator) {
	 		listener.exitDivOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitDivOperator) {
			return visitor.visitDivOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT(): TerminalNode {
		return this.getToken(kaomojiParser.INT, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(kaomojiParser.STRING, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(kaomojiParser.ID, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public addOperator(): AddOperatorContext {
		return this.getTypedRuleContext(AddOperatorContext, 0) as AddOperatorContext;
	}
	public subOperator(): SubOperatorContext {
		return this.getTypedRuleContext(SubOperatorContext, 0) as SubOperatorContext;
	}
	public mulOperator(): MulOperatorContext {
		return this.getTypedRuleContext(MulOperatorContext, 0) as MulOperatorContext;
	}
	public divOperator(): DivOperatorContext {
		return this.getTypedRuleContext(DivOperatorContext, 0) as DivOperatorContext;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_expr;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
