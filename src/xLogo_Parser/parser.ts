import { CharStreams, CommonTokenStream }  from 'antlr4ts';
import { XLogoLexer } from './parser/XLogoLexer';
import { ExprBOpAddContext, ExprBOpAndContext, ExprBOpCompContext, ExprBOpEqContext, ExprBOpMultContext, ExprBOpOrContext, ExprColorContext, ExprContext, ExprFuncNoArgContext, ExprFuncOneArgContext, ExprFuncTwoArgContext, ExprInBracketsContext, ExprLiteralContext, ExprUnaryOpContext, IfStmtContext, InputLinesContext, LiteralContext, MakeStmtContext, ParamListContext, PrintStmtContext, ProgCallStmtContext, ProgContext, ProgramDeclarationContext, RepeatStmtContext, StmtBlockContext, StmtContext, WhileStmtContext, XLogoParser } from './parser/XLogoParser';

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
end
`;
const chars = CharStreams.fromString(input); // replace this with a FileStream as required
const lexer = new XLogoLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new XLogoParser(tokens);

const tree = parser.prog();

import { AstTranslatorVisitor } from './ASTTranslator';
import { DebugVisitor } from './debug/debugVisitor';

console.log("== input ==\n", input)
var a = tree.accept(new AstTranslatorVisitor("some program", ["blacklisted_program1", "blacklisted_program2"]));
console.log("==  ast  ==\n")
a.accept(new DebugVisitor(), null);