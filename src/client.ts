import {CanvasActionSet} from "./ActionSet.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (!ctx) throw new Error("No 2D context");
const script: string = `
  act.fd(100);
  act.cs();

  act.setpw(3);
  act.setpc("blue");

  act.pu();
  act.fd(100);
  act.pd();

  act.rt(90);
  act.fd(100);
  act.pe();
  act.bk(50);
  act.ppt();

  // act.wash();
  
  for(let i = 0; i < 6; i++) {
    act.fd(30); 
    act.rt(60);
  }
`;

const act: CanvasActionSet = new CanvasActionSet(ctx);
eval(script);