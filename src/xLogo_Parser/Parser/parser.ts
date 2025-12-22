import { CharStreams, CommonTokenStream } from "antlr4ts";
// @ts-ignore
import { xLogoLexer } from "./Grammar/xLogoLexer";
// @ts-ignore
import { xLogoParser } from "./Grammar/xLogoParser.";

export function parse(source: string) {
  const input = CharStreams.fromString(source);
  const lexer = new xLogoLexer(input);
  const tokens = new CommonTokenStream(lexer);
  const parser = new xLogoParser(tokens);

  // Choose the start rule from your grammar
  return parser.prog();
}
