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
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly ID = 18;
	public static readonly INT = 19;
	public static readonly WS = 20;
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
	public static readonly RULE_specialEffect = 9;
	public static readonly RULE_expr = 10;
	public static readonly literalNames: (string | null)[] = [ null, "'^_^'", 
                                                            "'T_T'", "'o_o'", 
                                                            "'=_='", "'<_<'", 
                                                            "'?_?'", "'!_!'", 
                                                            "'@_@'", "'#_#'", 
                                                            "'(\\u2192_\\u2190)'", 
                                                            "'^o^'", "'$_$'", 
                                                            "'%_%'", "'+'", 
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
                                                             null, null, 
                                                             "ID", "INT", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stmt", "decl", "assign", "print", "ifStmt", "loop", "functionDecl", 
		"functionCall", "specialEffect", "expr",
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
			this.state = 22;
			this.match(kaomojiParser.T__0);
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 277864) !== 0)) {
				{
				{
				this.state = 23;
				this.stmt();
				}
				}
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 29;
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
			this.state = 39;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				localctx = new DeclStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 31;
				this.decl();
				}
				break;
			case 18:
				localctx = new AssignStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 32;
				this.assign();
				}
				break;
			case 5:
				localctx = new PrintStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 33;
				this.print();
				}
				break;
			case 6:
				localctx = new IfStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 34;
				this.ifStmt();
				}
				break;
			case 8:
				localctx = new LoopStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 35;
				this.loop();
				}
				break;
			case 10:
				localctx = new FuncDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 36;
				this.functionDecl();
				}
				break;
			case 11:
				localctx = new FuncCallContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 37;
				this.functionCall();
				}
				break;
			case 12:
			case 13:
				localctx = new SpecialEffectStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 38;
				this.specialEffect();
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
			this.state = 41;
			this.match(kaomojiParser.T__2);
			this.state = 42;
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
			this.state = 44;
			this.match(kaomojiParser.ID);
			this.state = 45;
			this.match(kaomojiParser.T__3);
			this.state = 46;
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
			this.state = 48;
			this.match(kaomojiParser.T__4);
			this.state = 49;
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
			this.state = 51;
			this.match(kaomojiParser.T__5);
			this.state = 52;
			this.expr(0);
			this.state = 53;
			this.stmt();
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 54;
				this.match(kaomojiParser.T__6);
				this.state = 55;
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
			this.state = 58;
			this.match(kaomojiParser.T__7);
			this.state = 59;
			this.expr(0);
			this.state = 60;
			this.stmt();
			this.state = 61;
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
			this.state = 63;
			this.match(kaomojiParser.T__9);
			this.state = 64;
			this.match(kaomojiParser.ID);
			this.state = 65;
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
			this.state = 67;
			this.match(kaomojiParser.T__10);
			this.state = 68;
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
	public specialEffect(): SpecialEffectContext {
		let localctx: SpecialEffectContext = new SpecialEffectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, kaomojiParser.RULE_specialEffect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			_la = this._input.LA(1);
			if(!(_la===12 || _la===13)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
		let _startState: number = 20;
		this.enterRecursionRule(localctx, 20, kaomojiParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				{
				localctx = new IntExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 73;
				this.match(kaomojiParser.INT);
				}
				break;
			case 18:
				{
				localctx = new IdExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 74;
				this.match(kaomojiParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 91;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 89;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						localctx = new AddExprContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, kaomojiParser.RULE_expr);
						this.state = 77;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 78;
						this.match(kaomojiParser.T__13);
						this.state = 79;
						this.expr(5);
						}
						break;
					case 2:
						{
						localctx = new SubExprContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, kaomojiParser.RULE_expr);
						this.state = 80;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 81;
						this.match(kaomojiParser.T__14);
						this.state = 82;
						this.expr(4);
						}
						break;
					case 3:
						{
						localctx = new MulExprContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, kaomojiParser.RULE_expr);
						this.state = 83;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 84;
						this.match(kaomojiParser.T__15);
						this.state = 85;
						this.expr(3);
						}
						break;
					case 4:
						{
						localctx = new DivExprContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, kaomojiParser.RULE_expr);
						this.state = 86;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 87;
						this.match(kaomojiParser.T__16);
						this.state = 88;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 93;
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
		case 10:
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

	public static readonly _serializedATN: number[] = [4,1,20,95,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,1,0,1,0,5,0,25,8,0,10,0,12,0,28,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,3,1,40,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,
	1,5,1,5,1,5,3,5,57,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
	1,9,1,9,1,10,1,10,1,10,3,10,76,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,5,10,90,8,10,10,10,12,10,93,9,10,1,10,0,1,20,11,
	0,2,4,6,8,10,12,14,16,18,20,0,1,1,0,12,13,97,0,22,1,0,0,0,2,39,1,0,0,0,
	4,41,1,0,0,0,6,44,1,0,0,0,8,48,1,0,0,0,10,51,1,0,0,0,12,58,1,0,0,0,14,63,
	1,0,0,0,16,67,1,0,0,0,18,70,1,0,0,0,20,75,1,0,0,0,22,26,5,1,0,0,23,25,3,
	2,1,0,24,23,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,29,1,0,
	0,0,28,26,1,0,0,0,29,30,5,2,0,0,30,1,1,0,0,0,31,40,3,4,2,0,32,40,3,6,3,
	0,33,40,3,8,4,0,34,40,3,10,5,0,35,40,3,12,6,0,36,40,3,14,7,0,37,40,3,16,
	8,0,38,40,3,18,9,0,39,31,1,0,0,0,39,32,1,0,0,0,39,33,1,0,0,0,39,34,1,0,
	0,0,39,35,1,0,0,0,39,36,1,0,0,0,39,37,1,0,0,0,39,38,1,0,0,0,40,3,1,0,0,
	0,41,42,5,3,0,0,42,43,5,18,0,0,43,5,1,0,0,0,44,45,5,18,0,0,45,46,5,4,0,
	0,46,47,3,20,10,0,47,7,1,0,0,0,48,49,5,5,0,0,49,50,3,20,10,0,50,9,1,0,0,
	0,51,52,5,6,0,0,52,53,3,20,10,0,53,56,3,2,1,0,54,55,5,7,0,0,55,57,3,2,1,
	0,56,54,1,0,0,0,56,57,1,0,0,0,57,11,1,0,0,0,58,59,5,8,0,0,59,60,3,20,10,
	0,60,61,3,2,1,0,61,62,5,9,0,0,62,13,1,0,0,0,63,64,5,10,0,0,64,65,5,18,0,
	0,65,66,3,2,1,0,66,15,1,0,0,0,67,68,5,11,0,0,68,69,5,18,0,0,69,17,1,0,0,
	0,70,71,7,0,0,0,71,19,1,0,0,0,72,73,6,10,-1,0,73,76,5,19,0,0,74,76,5,18,
	0,0,75,72,1,0,0,0,75,74,1,0,0,0,76,91,1,0,0,0,77,78,10,4,0,0,78,79,5,14,
	0,0,79,90,3,20,10,5,80,81,10,3,0,0,81,82,5,15,0,0,82,90,3,20,10,4,83,84,
	10,2,0,0,84,85,5,16,0,0,85,90,3,20,10,3,86,87,10,1,0,0,87,88,5,17,0,0,88,
	90,3,20,10,2,89,77,1,0,0,0,89,80,1,0,0,0,89,83,1,0,0,0,89,86,1,0,0,0,90,
	93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,21,1,0,0,0,93,91,1,0,0,0,6,26,
	39,56,75,89,91];

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
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_stmt;
	}
	public copyFrom(ctx: StmtContext): void {
		super.copyFrom(ctx);
	}
}
export class PrintStmtContext extends StmtContext {
	constructor(parser: kaomojiParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public print(): PrintContext {
		return this.getTypedRuleContext(PrintContext, 0) as PrintContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterPrintStmt) {
	 		listener.enterPrintStmt(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitPrintStmt) {
	 		listener.exitPrintStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitPrintStmt) {
			return visitor.visitPrintStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LoopStmtContext extends StmtContext {
	constructor(parser: kaomojiParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public loop(): LoopContext {
		return this.getTypedRuleContext(LoopContext, 0) as LoopContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterLoopStmt) {
	 		listener.enterLoopStmt(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitLoopStmt) {
	 		listener.exitLoopStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitLoopStmt) {
			return visitor.visitLoopStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeclStmtContext extends StmtContext {
	constructor(parser: kaomojiParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public decl(): DeclContext {
		return this.getTypedRuleContext(DeclContext, 0) as DeclContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterDeclStmt) {
	 		listener.enterDeclStmt(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitDeclStmt) {
	 		listener.exitDeclStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitDeclStmt) {
			return visitor.visitDeclStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecialEffectStmtContext extends StmtContext {
	constructor(parser: kaomojiParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public specialEffect(): SpecialEffectContext {
		return this.getTypedRuleContext(SpecialEffectContext, 0) as SpecialEffectContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterSpecialEffectStmt) {
	 		listener.enterSpecialEffectStmt(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitSpecialEffectStmt) {
	 		listener.exitSpecialEffectStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitSpecialEffectStmt) {
			return visitor.visitSpecialEffectStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignStmtContext extends StmtContext {
	constructor(parser: kaomojiParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterAssignStmt) {
	 		listener.enterAssignStmt(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitAssignStmt) {
	 		listener.exitAssignStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitAssignStmt) {
			return visitor.visitAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStatementContext extends StmtContext {
	constructor(parser: kaomojiParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ifStmt(): IfStmtContext {
		return this.getTypedRuleContext(IfStmtContext, 0) as IfStmtContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncCallContext extends StmtContext {
	constructor(parser: kaomojiParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterFuncCall) {
	 		listener.enterFuncCall(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitFuncCall) {
	 		listener.exitFuncCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitFuncCall) {
			return visitor.visitFuncCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncDeclarationContext extends StmtContext {
	constructor(parser: kaomojiParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionDecl(): FunctionDeclContext {
		return this.getTypedRuleContext(FunctionDeclContext, 0) as FunctionDeclContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterFuncDeclaration) {
	 		listener.enterFuncDeclaration(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitFuncDeclaration) {
	 		listener.exitFuncDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitFuncDeclaration) {
			return visitor.visitFuncDeclaration(this);
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


export class SpecialEffectContext extends ParserRuleContext {
	constructor(parser?: kaomojiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_specialEffect;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterSpecialEffect) {
	 		listener.enterSpecialEffect(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitSpecialEffect) {
	 		listener.exitSpecialEffect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitSpecialEffect) {
			return visitor.visitSpecialEffect(this);
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
    public get ruleIndex(): number {
    	return kaomojiParser.RULE_expr;
	}
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class IntExprContext extends ExprContext {
	constructor(parser: kaomojiParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INT(): TerminalNode {
		return this.getToken(kaomojiParser.INT, 0);
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterIntExpr) {
	 		listener.enterIntExpr(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitIntExpr) {
	 		listener.exitIntExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitIntExpr) {
			return visitor.visitIntExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExprContext extends ExprContext {
	constructor(parser: kaomojiParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterAddExpr) {
	 		listener.enterAddExpr(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitAddExpr) {
	 		listener.exitAddExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitAddExpr) {
			return visitor.visitAddExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulExprContext extends ExprContext {
	constructor(parser: kaomojiParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterMulExpr) {
	 		listener.enterMulExpr(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitMulExpr) {
	 		listener.exitMulExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitMulExpr) {
			return visitor.visitMulExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivExprContext extends ExprContext {
	constructor(parser: kaomojiParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterDivExpr) {
	 		listener.enterDivExpr(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitDivExpr) {
	 		listener.exitDivExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitDivExpr) {
			return visitor.visitDivExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubExprContext extends ExprContext {
	constructor(parser: kaomojiParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterSubExpr) {
	 		listener.enterSubExpr(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitSubExpr) {
	 		listener.exitSubExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitSubExpr) {
			return visitor.visitSubExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdExprContext extends ExprContext {
	constructor(parser: kaomojiParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(kaomojiParser.ID, 0);
	}
	public enterRule(listener: kaomojiListener): void {
	    if(listener.enterIdExpr) {
	 		listener.enterIdExpr(this);
		}
	}
	public exitRule(listener: kaomojiListener): void {
	    if(listener.exitIdExpr) {
	 		listener.exitIdExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kaomojiVisitor<Result>): Result {
		if (visitor.visitIdExpr) {
			return visitor.visitIdExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
