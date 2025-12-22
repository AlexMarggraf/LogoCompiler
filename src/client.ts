const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (!ctx) throw new Error("No 2D context");

const script: string = "ctx.fillStyle = \"green\"; ctx.fillRect(10, 10, 150, 100);"
eval(script) 
