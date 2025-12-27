import { CharStream, CommonTokenStream }  from 'antlr4ng';
import { XLogoLexer } from './parser/XLogoLexer.js';
import { ExprBOpAddContext, ExprBOpAndContext, ExprBOpCompContext, ExprBOpEqContext, ExprBOpMultContext, ExprBOpOrContext, ExprColorContext, ExprContext, ExprFuncNoArgContext, ExprFuncOneArgContext, ExprFuncTwoArgContext, ExprInBracketsContext, ExprLiteralContext, ExprUnaryOpContext, IfStmtContext, InputLinesContext, LiteralContext, MakeStmtContext, ParamListContext, PrintStmtContext, ProgCallStmtContext, ProgContext, ProgramDeclarationContext, RepeatStmtContext, StmtBlockContext, StmtContext, WhileStmtContext, XLogoParser } from './parser/XLogoParser.js';
import { AstTranslatorVisitor } from './ASTTranslator.js';
import { DebugVisitor } from './debug/debugVisitor.js';
import { AST } from './ir/ast.js';

export function parseCode(logocode: string, debug: boolean =false): AST {
  const chars = CharStream.fromString(logocode); // replace this with a FileStream as required
  const lexer = new XLogoLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new XLogoParser(tokens);

  const tree = parser.prog();
  const a = tree.accept(new AstTranslatorVisitor("some program", ["blacklisted_program1", "blacklisted_program2"]));
  if (debug) {
    console.log("== input ==\n", logocode);
    console.log("==  ast  ==\n");
    a.accept(new DebugVisitor(), null);
  }
  return a;
}

/*if (process.argv[1] === import.meta.filename) {
  const input = `
to prog1 :x :y
  print :x + 2
  repeat 2 [
    fd 100 rt 90
  ]
end
to prog2 :x :y
  prog1 1 2
  repeat 2 [
    fd 100 rt 90
  ]
end`;
  parseCode(input, true);
}*/