// AST/RepeatNode.ts
// @ts-ignore
import { ASTNode } from "./ASTNode";

export class RepeatNode extends ASTNode {
  constructor(public count: number, public body: ASTNode[]) {
    super();
  }
}
