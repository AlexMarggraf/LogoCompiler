// AST/ForwardNode.ts
// @ts-ignore
import { ASTNode } from "./ASTNode";

export class ForwardNode extends ASTNode {
  constructor(public distance: number) {
    super();
  }
}
