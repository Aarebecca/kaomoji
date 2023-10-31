import { CharStream, CommonTokenStream, InputStream } from 'antlr4';
import Lexer from '../lexer/kaomojiLexer';
import Parser from '../lexer/kaomojiParser';
import { Environment } from './environment';
import { Executor } from './executor';

export function execute(code: string) {
  const chars = new InputStream(code) as CharStream;
  const lexer = new Lexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new Parser(tokens);
  const tree = parser.prog();

  const environment = new Environment();
  
  const executor = new Executor(environment);

  executor.visit(tree);
}
