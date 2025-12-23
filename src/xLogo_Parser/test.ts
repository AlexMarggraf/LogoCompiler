import { generate } from "escodegen";
import { parseModule, parseScript } from "esprima";
import { Program } from "esprima";
import { BaseNode, FunctionDeclaration } from "estree";
import { parseCode } from "./parser.js";

const ast = parseScript(`
function bruh(x){
    var a = 23;
    console.log(a)
}
`);
console.log(JSON.stringify(ast, null, 2))


const input = `
to bruh :x
    make "a 6
    print :a
end`;
parseCode(input, true);


