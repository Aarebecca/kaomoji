import {
  AssignContext,
  DeclContext,
  ExprContext,
  IfStmtContext,
  LoopContext,
  PrintContext,
} from 'kaomoji/lexer/kaomojiParser';
import Visitor from '../lexer/kaomojiVisitor';
import type { Environment } from './environment';

export class Executor extends Visitor<any> {
  constructor(private environment: Environment) {
    super();
  }

  visitProg = (ctx: any) => {
    const children = ctx.children;
    for (const child of children) {
      this.visit(child);
    }
  };

  visitDecl = (ctx: DeclContext) => {
    const name = ctx.ID().getText();
    this.environment.variables.set(name, undefined);
  };

  visitAssign = (ctx: AssignContext) => {
    const name = ctx.ID().getText();
    const value = this.visit(ctx.expr());
    this.environment.variables.set(name, value);
  };

  visitExpr = (ctx: ExprContext) => {
    if (ctx.ID()) {
      const name = ctx.ID().getText();
      return this.environment.variables.get(name);
    }
    if (ctx.INT()) {
      return parseInt(ctx.INT().getText());
    }
    if (ctx.STRING()) {
      const string = ctx.STRING().getText();
      return string.slice(1, string.length - 1);
    }
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    if (ctx.addOperator()) return left + right;
    if (ctx.subOperator()) return left - right;
    if (ctx.mulOperator()) return left * right;
    if (ctx.divOperator()) return left / right;
  };

  visitPrint = (ctx: PrintContext) => {
    const value = this.visit(ctx.expr());
    console.log(value);
  };

  visitIfStmt = (ctx: IfStmtContext) => {
    const condition = this.visit(ctx.expr());
    if (condition) {
      this.visit(ctx.stmt(0));
    } else if (ctx.stmt(1)) {
      this.visit(ctx.stmt(1));
    }
  };

  visitLoop = (ctx: LoopContext) => {
    const condition = this.visit(ctx.expr());
    while (condition) {
      this.visit(ctx.stmt());
    }
  };
}
