grammar kaomoji;

// Parser Rules

prog: '^_^' stmt* 'T_T';

stmt:
	decl
	| assign
	| print
	| ifStmt
	| loop
	| functionDecl
	| functionCall;

decl: 'o_o' ID;
assign: ID '=_=' expr;
print: '<_<' expr;
ifStmt: '?_?' expr stmt ('!_!' stmt)?;
loop: '@_@' expr stmt '#_#';
functionDecl: '(→_←)' ID stmt;
functionCall: '^o^' ID;
addOperator: '+';
subOperator: '-';
mulOperator: '*';
divOperator: '/';

expr:
	INT
	| STRING
	| ID
	| expr addOperator expr
	| expr subOperator expr
	| expr mulOperator expr
	| expr divOperator expr;

// Lexer Rules

STRING: '"' (~["\n\r])* '"';
ID: [a-zA-Z_][a-zA-Z_0-9]*;
INT: [0-9]+;
WS: [ \t\n\r]+ -> skip;