import {CanvasActionSet, LogActionSet} from "./ActionSet.js";
import { compileCode } from "./xLogo_Parser/compiler.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (!ctx) throw new Error("No 2D context");
const script = compileCode("to main \n" +
  "  fd 100\n" +
  "  rt 90\n" +
  "  fd 100\n" +
  "  rt 90\n" +
  "  fd 100\n" +
  "  rt 90\n" +
  "  fd 100\n" +
  "  rt 90\n" +
  "end");

const act = new CanvasActionSet(ctx);
(new Function("act",script))(act);