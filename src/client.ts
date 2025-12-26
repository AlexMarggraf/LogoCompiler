import {CanvasActionSet, LogActionSet} from "./ActionSet.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (!ctx) throw new Error("No 2D context");
const script: string = `
(async () => {

  let y = 0;
  let iter = 0;
  
  function cube(){
    for(let i = 4; i > 0; i--) {
      act.fd(100);
      act.rt(90);
    }
  }

  while(true) {
    act.wash();

    if(iter % 100 < 50) {
    y += 2;
    act.setY(y);
    cube();
    } else {
      y -= 2;
      act.setY(y);
      cube();
    }
    
    iter += 1;
    await act.wait(50);
  }
})();
`;

const act = new CanvasActionSet(ctx);
eval(script);