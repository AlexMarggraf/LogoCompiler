// AST/ProgramNode.ts
// @ts-ignore
import { ASTNode } from "./ASTNode";

export class ProgramNode extends ASTNode {
  constructor(public statements: ASTNode[]) {
    super();
  }
}
