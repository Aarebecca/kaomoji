grammar EmoticonLang;

// Parser Rules

prog: '^_^' stmt* 'T_T';

stmt:
      decl                 # declStmt
    | assign               # assignStmt
    | print                # printStmt
    | ifStmt               # ifStatement
    | loop                 # loopStmt
    | functionDecl         # funcDeclaration
    | functionCall         # funcCall
    | specialEffect        # specialEffectStmt
    ;

decl: 'o_o' ID;
assign: ID '=_=' expr;
print: '<_<' expr;
ifStmt: '?_?' expr stmt ('!_!' stmt)?;
loop: '@_@' expr stmt '#_#';
functionDecl: '(→_←)' ID stmt;
functionCall: '^o^' ID;
specialEffect: ('$_$' | '%_%');

expr: INT                 # intExpr
    | ID                  # idExpr
    | expr '+' expr       # addExpr
    | expr '-' expr       # subExpr
    | expr '*' expr       # mulExpr
    | expr '/' expr       # divExpr
    ;

// Lexer Rules

ID: [a-zA-Z_][a-zA-Z_0-9]*;
INT: [0-9]+;
WS: [ \t\n\r]+ -> skip;  // skip whitespace, newlines, etc.
