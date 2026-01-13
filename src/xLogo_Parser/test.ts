import { generate } from "escodegen";
import { parseScript } from "esprima";
import { diff } from 'json-diff-ts';
import { DebugVisitor } from "./debug/debugVisitor.js";
import { Program, BaseNode, Expression, Statement, BaseStatement, Node, MemberExpression, SpreadElement} from "estree";
import { Identifier } from "./esnodes.js";
import { CustomESTreeWalker, mapThisToDoubleUnderscore } from "./CustomESTreeWalker.js";

/*compileCode(`
to main
  fd 10
  lt 90 bk 20
  rt 270 fd 30
  setpc red rt 90 fd 40
  setsc black
  wash
  setpc [43 167 200] rt 90 fd 50
  setsc [23 20 67]
  # ignore this twin ✌️
  setpw 5 rt 90 fd 60 setpw 1
  pu rt 90 fd 70 pd
  rt 90 fd 80 bk 40 pe fd 40 ppt
  cs
  setx -70
  sety 70
  home
  setxy 70 70
  setheading 180
  fd random 90
  rt 90 fd mod 1000 300
  rt 90 fd power 2 7
  rt 90 fd sqrt 14400
  rt 90 fd log 1000
  rt 90 fd abs -140
  rt 90 fd 100 * sin 0.4
  rt 90 fd 100 * cos 0.4
  rt 90 fd 100 * tan 0.4
  rt 90 fd 100 * arcsin 0.4
  rt 90 fd 100 * arccos 0.4
  rt 90 fd 100 * arctan 0.4
  rt 90 fd 100 * PI
  rt 90 fd 100 * E
  print 67
  print [yoplait]
  ct
  repeat 4 [fd 100 rt 90]
  make "a 6
  while[:a > 0][fd 30 rt 60 make :a :a - 1]
  IF(:a >= 0)[rt 90 bk 100]
  make :a 67
  if(:a = 67)[rt 90 fd 50]
  if(:a <= 67)[lt 90 fd 67][lt 90 bk 67]
  repeat 5 [rt 72 fd 100 stop]
  wait 100
  rt 90 fd 100
end
  `)*/

const reference = parseScript(`
`)
// let c = new CustomESTreeWalker(
//   (s) => "_" + s,
//   mapThisToDoubleUnderscore);

// console.log(generate(c.walk(reference)));
let j = 0;
{
  j = 1
}
console.log(j);

console.log(reference);

