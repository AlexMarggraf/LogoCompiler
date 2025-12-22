// @ts-ignore
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
// @ts-ignore
import { xLogoParserVisitor } from "../Parser/xLogoParserVisitor";
// @ts-ignore
import { xLogoParser } from "../Parser/xLogoParser";

// @ts-ignore
import { ProgramNode } from "../AST/ProgramNode";
// @ts-ignore
import { ForwardNode } from "../AST/ForwardNode";
// @ts-ignore
import { RepeatNode } from "../AST/RepeatNode";
// @ts-ignore
import { ASTNode } from "../AST/ASTNode";

export class ASTBuilder
    extends AbstractParseTreeVisitor<ASTNode>
    implements xLogoParserVisitor<ASTNode>
{
  protected defaultResult(): ASTNode {
    return null!;
  }

  visitProg(ctx: xLogoParser.ProgContext): ASTNode {
    const statements: ASTNode[] = [];

    for (const stmt of ctx.stmt()) {
      statements.push(this.visit(stmt));
    }

    return new ProgramNode(statements);
  }

  visitForwardStmt(ctx: xLogoParser.ForwardStmtContext): ASTNode {
    return new ForwardNode(Number(ctx.NUMBER().text));
  }

  visitRepeatStmt(ctx: xLogoParser.RepeatStmtContext): ASTNode {
    const count = Number(ctx.NUMBER().text);
    const body: ASTNode[] = [];

    for (const stmt of ctx.stmt()) {
      body.push(this.visit(stmt));
    }

    return new RepeatNode(count, body);
  }
}
