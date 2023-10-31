// Generated from ./src/lexer/kaomoji.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class kaomojiLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"ID", "INT", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, kaomojiLexer._ATN, kaomojiLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "kaomoji.g4"; }

	public get literalNames(): (string | null)[] { return kaomojiLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return kaomojiLexer.symbolicNames; }
	public get ruleNames(): string[] { return kaomojiLexer.ruleNames; }

	public get serializedATN(): number[] { return kaomojiLexer._serializedATN; }

	public get channelNames(): string[] { return kaomojiLexer.channelNames; }

	public get modeNames(): string[] { return kaomojiLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,20,122,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,
	2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,
	6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,
	1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,
	15,1,16,1,16,1,17,1,17,5,17,106,8,17,10,17,12,17,109,9,17,1,18,4,18,112,
	8,18,11,18,12,18,113,1,19,4,19,117,8,19,11,19,12,19,118,1,19,1,19,0,0,20,
	1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
	15,31,16,33,17,35,18,37,19,39,20,1,0,4,3,0,65,90,95,95,97,122,4,0,48,57,
	65,90,95,95,97,122,1,0,48,57,3,0,9,10,13,13,32,32,124,0,1,1,0,0,0,0,3,1,
	0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
	1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,
	0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,
	1,0,0,0,0,39,1,0,0,0,1,41,1,0,0,0,3,45,1,0,0,0,5,49,1,0,0,0,7,53,1,0,0,
	0,9,57,1,0,0,0,11,61,1,0,0,0,13,65,1,0,0,0,15,69,1,0,0,0,17,73,1,0,0,0,
	19,77,1,0,0,0,21,83,1,0,0,0,23,87,1,0,0,0,25,91,1,0,0,0,27,95,1,0,0,0,29,
	97,1,0,0,0,31,99,1,0,0,0,33,101,1,0,0,0,35,103,1,0,0,0,37,111,1,0,0,0,39,
	116,1,0,0,0,41,42,5,94,0,0,42,43,5,95,0,0,43,44,5,94,0,0,44,2,1,0,0,0,45,
	46,5,84,0,0,46,47,5,95,0,0,47,48,5,84,0,0,48,4,1,0,0,0,49,50,5,111,0,0,
	50,51,5,95,0,0,51,52,5,111,0,0,52,6,1,0,0,0,53,54,5,61,0,0,54,55,5,95,0,
	0,55,56,5,61,0,0,56,8,1,0,0,0,57,58,5,60,0,0,58,59,5,95,0,0,59,60,5,60,
	0,0,60,10,1,0,0,0,61,62,5,63,0,0,62,63,5,95,0,0,63,64,5,63,0,0,64,12,1,
	0,0,0,65,66,5,33,0,0,66,67,5,95,0,0,67,68,5,33,0,0,68,14,1,0,0,0,69,70,
	5,64,0,0,70,71,5,95,0,0,71,72,5,64,0,0,72,16,1,0,0,0,73,74,5,35,0,0,74,
	75,5,95,0,0,75,76,5,35,0,0,76,18,1,0,0,0,77,78,5,40,0,0,78,79,5,8594,0,
	0,79,80,5,95,0,0,80,81,5,8592,0,0,81,82,5,41,0,0,82,20,1,0,0,0,83,84,5,
	94,0,0,84,85,5,111,0,0,85,86,5,94,0,0,86,22,1,0,0,0,87,88,5,36,0,0,88,89,
	5,95,0,0,89,90,5,36,0,0,90,24,1,0,0,0,91,92,5,37,0,0,92,93,5,95,0,0,93,
	94,5,37,0,0,94,26,1,0,0,0,95,96,5,43,0,0,96,28,1,0,0,0,97,98,5,45,0,0,98,
	30,1,0,0,0,99,100,5,42,0,0,100,32,1,0,0,0,101,102,5,47,0,0,102,34,1,0,0,
	0,103,107,7,0,0,0,104,106,7,1,0,0,105,104,1,0,0,0,106,109,1,0,0,0,107,105,
	1,0,0,0,107,108,1,0,0,0,108,36,1,0,0,0,109,107,1,0,0,0,110,112,7,2,0,0,
	111,110,1,0,0,0,112,113,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,38,
	1,0,0,0,115,117,7,3,0,0,116,115,1,0,0,0,117,118,1,0,0,0,118,116,1,0,0,0,
	118,119,1,0,0,0,119,120,1,0,0,0,120,121,6,19,0,0,121,40,1,0,0,0,4,0,107,
	113,118,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!kaomojiLexer.__ATN) {
			kaomojiLexer.__ATN = new ATNDeserializer().deserialize(kaomojiLexer._serializedATN);
		}

		return kaomojiLexer.__ATN;
	}


	static DecisionsToDFA = kaomojiLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}