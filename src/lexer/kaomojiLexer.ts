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
	public static readonly STRING = 16;
	public static readonly ID = 17;
	public static readonly INT = 18;
	public static readonly WS = 19;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "STRING", "ID", "INT", 
		"WS",
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

	public static readonly _serializedATN: number[] = [4,0,19,121,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,
	1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,
	1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,
	1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,5,15,96,8,15,10,15,12,15,99,
	9,15,1,15,1,15,1,16,1,16,5,16,105,8,16,10,16,12,16,108,9,16,1,17,4,17,111,
	8,17,11,17,12,17,112,1,18,4,18,116,8,18,11,18,12,18,117,1,18,1,18,0,0,19,
	1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
	15,31,16,33,17,35,18,37,19,1,0,5,3,0,10,10,13,13,34,34,3,0,65,90,95,95,
	97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,10,13,13,32,32,124,
	0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,
	0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
	1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,
	0,0,35,1,0,0,0,0,37,1,0,0,0,1,39,1,0,0,0,3,43,1,0,0,0,5,47,1,0,0,0,7,51,
	1,0,0,0,9,55,1,0,0,0,11,59,1,0,0,0,13,63,1,0,0,0,15,67,1,0,0,0,17,71,1,
	0,0,0,19,75,1,0,0,0,21,81,1,0,0,0,23,85,1,0,0,0,25,87,1,0,0,0,27,89,1,0,
	0,0,29,91,1,0,0,0,31,93,1,0,0,0,33,102,1,0,0,0,35,110,1,0,0,0,37,115,1,
	0,0,0,39,40,5,94,0,0,40,41,5,95,0,0,41,42,5,94,0,0,42,2,1,0,0,0,43,44,5,
	84,0,0,44,45,5,95,0,0,45,46,5,84,0,0,46,4,1,0,0,0,47,48,5,111,0,0,48,49,
	5,95,0,0,49,50,5,111,0,0,50,6,1,0,0,0,51,52,5,61,0,0,52,53,5,95,0,0,53,
	54,5,61,0,0,54,8,1,0,0,0,55,56,5,60,0,0,56,57,5,95,0,0,57,58,5,60,0,0,58,
	10,1,0,0,0,59,60,5,63,0,0,60,61,5,95,0,0,61,62,5,63,0,0,62,12,1,0,0,0,63,
	64,5,33,0,0,64,65,5,95,0,0,65,66,5,33,0,0,66,14,1,0,0,0,67,68,5,64,0,0,
	68,69,5,95,0,0,69,70,5,64,0,0,70,16,1,0,0,0,71,72,5,35,0,0,72,73,5,95,0,
	0,73,74,5,35,0,0,74,18,1,0,0,0,75,76,5,40,0,0,76,77,5,8594,0,0,77,78,5,
	95,0,0,78,79,5,8592,0,0,79,80,5,41,0,0,80,20,1,0,0,0,81,82,5,94,0,0,82,
	83,5,111,0,0,83,84,5,94,0,0,84,22,1,0,0,0,85,86,5,43,0,0,86,24,1,0,0,0,
	87,88,5,45,0,0,88,26,1,0,0,0,89,90,5,42,0,0,90,28,1,0,0,0,91,92,5,47,0,
	0,92,30,1,0,0,0,93,97,5,34,0,0,94,96,8,0,0,0,95,94,1,0,0,0,96,99,1,0,0,
	0,97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,5,34,
	0,0,101,32,1,0,0,0,102,106,7,1,0,0,103,105,7,2,0,0,104,103,1,0,0,0,105,
	108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,34,1,0,0,0,108,106,1,0,
	0,0,109,111,7,3,0,0,110,109,1,0,0,0,111,112,1,0,0,0,112,110,1,0,0,0,112,
	113,1,0,0,0,113,36,1,0,0,0,114,116,7,4,0,0,115,114,1,0,0,0,116,117,1,0,
	0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,120,6,18,0,0,120,
	38,1,0,0,0,5,0,97,106,112,117,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!kaomojiLexer.__ATN) {
			kaomojiLexer.__ATN = new ATNDeserializer().deserialize(kaomojiLexer._serializedATN);
		}

		return kaomojiLexer.__ATN;
	}


	static DecisionsToDFA = kaomojiLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}