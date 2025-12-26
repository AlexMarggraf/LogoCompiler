export interface ActionSet {
  fd(steps: number): void;
  bk(steps: number): void;

  rt(angle: number): void;
  lt(angle: number): void;

  cs(): void;

  setpc(color: string): void;
  setsc(color: string): void;
  setpw(width: number): void;

  pu(): void;
  pd(): void;

  pe(): void;
  ppt(): void;

  wash(): void;

  setx(x: number): void;
  sety(y: number): void;
  setxy(x: number, y: number): void;

  home(): void;
  setheading(angle: number): void;

  random(max: number): number | void;
  mod(a: number, b: number): number | void;
  power(a: number, b: number): number | void;
  sqrt(a: number): number | void;
  log(a: number): number | void;
  abs(a: number): number | void;

  sin(a: number): number | void;
  cos(a: number): number | void;
  tan(a: number): number | void;

  arcsin(a: number): number | void;
  arccos(a: number): number | void;
  arctan(a: number): number | void

  print(content: number | string): void;
  ct(): void;
  wait(ms: number): Promise<void> | void;
}

export class CanvasActionSet implements ActionSet{
  private ctx: CanvasRenderingContext2D;
  private turtleX: number;
  private turtleY: number;
  private turtleAngle: number;
  private penColor: string;
  private screenColor: string;
  private penDown: boolean;

  static readonly PI: number = Math.PI;
  static readonly E: number = Math.E;

  public constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
    this.turtleX = ctx.canvas.width/2;
    this.turtleY = ctx.canvas.height/2;
    this.turtleAngle = toRadians(270);
    this.penColor = "black";
    this.screenColor = "white"
    this.penDown = true;
  }

  public fd(steps: number) {
    const newX: number = this.turtleX + steps*Math.cos(this.turtleAngle)
    const newY: number = this.turtleY + steps*Math.sin(this.turtleAngle)

    if (this.penDown) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.turtleX, this.turtleY);
        this.ctx.lineTo(newX, newY);
        this.ctx.stroke();
    }

    this.turtleX = newX;
    this.turtleY = newY;
  }

  public bk(steps: number) {
    const newX: number = this.turtleX - steps*Math.cos(this.turtleAngle)
    const newY: number = this.turtleY - steps*Math.sin(this.turtleAngle)

    if (this.penDown) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.turtleX, this.turtleY);
        this.ctx.lineTo(newX, newY);
        this.ctx.stroke();
    }

    this.turtleX = newX;
    this.turtleY = newY;
  }

  public rt(angle: number) {
    this.turtleAngle += toRadians(angle)
  }

  public lt(angle: number) {
    this.turtleAngle -= toRadians(angle)
  }

  public cs() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.turtleX = this.ctx.canvas.width/2;
    this.turtleY = this.ctx.canvas.height/2;
    this.turtleAngle = toRadians(270);
    this.setpc("black");
    this.setsc("white");
  }

  public setpc(color: string) {
    this.penColor = color;
    this.ctx.strokeStyle = color;
  }

  public setsc(color: string) {
    this.screenColor = color;
    this.ctx.canvas.style.backgroundColor = color;
  }

  public setpw(width: number) {
    this.ctx.lineWidth = width;
  }

  public pu() {
    this.penDown = false;
  }

  public pd() {
    this.penDown = true;
  }

  public pe() {
    this.ctx.globalCompositeOperation = "destination-out";
    this.ctx.lineWidth += 1;
  }

  public ppt() {
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.lineWidth -= 1;
  }

  public wash() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  public setx(x: number) {
    this.turtleX = x;
  }

  public sety(y: number) {
    this.turtleY = y;
  }

  public setxy(x: number, y: number) {
    this.turtleX = x;
    this.turtleY = y;
  }

  public home() {
    this.turtleX = 0;
    this.turtleY = 0;
  }

  public setheading(angle: number) {
    this.turtleAngle = toRadians(270 + angle);
  }

  public random(max: number): number {
    return Math.random() * max;
  }

  public mod(a: number, b: number): number {
    return a % b
  }

  public power(a: number, b: number): number {
    return Math.pow(a, b);
  }

  public sqrt(a: number): number {
    return Math.sqrt(a);
  }

  public log(a: number): number {
    return Math.log10(a);
  }
  
  public abs(a: number): number {
    return Math.abs(a);
  }

  public sin(a: number): number {
    return Math.sin(toRadians(a));
  }

  public cos(a: number): number {
    return Math.cos(toRadians(a));
  }

  public tan(a: number): number {
    return Math.tan(toRadians(a));
  }

  public arcsin(a: number): number {
    return Math.asin(toRadians(a));
  }

  public arccos(a: number): number {
    return Math.acos(toRadians(a));
  }

  public arctan(a: number): number {
    return Math.atan(toRadians(a));
  }

  public print(content: number | string){
    console.log(content);
  }

  public ct() {
    console.clear();
  }

  public wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

export class LogActionSet implements ActionSet{
  private ctx: CanvasRenderingContext2D;
  private turtleX: number;
  private turtleY: number;
  private turtleAngle: number;
  private penColor: string;
  private screenColor: string;
  private penDown: boolean;

  static readonly PI: number = Math.PI;
  static readonly E: number = Math.E;

  public constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.turtleX = ctx.canvas.width/2;
    this.turtleY = ctx.canvas.height/2;
    this.turtleAngle = toRadians(270);
    this.penColor = "black";
    this.screenColor = "white"
    this.penDown = true;
  }

  public fd(steps: number) {
    const newX: number = this.turtleX + steps*Math.cos(this.turtleAngle)
    const newY: number = this.turtleY + steps*Math.sin(this.turtleAngle)

    this.turtleX = newX;
    this.turtleY = newY;

    console.log(`fd(${steps}), x = ${this.turtleX}, y = ${this.turtleY}`);
  }

  public bk(steps: number) {
    const newX: number = this.turtleX - steps*Math.cos(this.turtleAngle)
    const newY: number = this.turtleY - steps*Math.sin(this.turtleAngle)

    this.turtleX = newX;
    this.turtleY = newY;

    console.log(`bk(${steps}), x = ${this.turtleX}, y = ${this.turtleY}`);
  }

  public rt(angle: number) {
    this.turtleAngle += toRadians(angle)
    console.log(`rt(${angle}), angle = ${(toDegrees(this.turtleAngle) - 270) % 360}`);
  }

  public lt(angle: number) {
    this.turtleAngle -= toRadians(angle)
    console.log(`rt(${angle}), angle = ${(toDegrees(this.turtleAngle) - 270) % 360}`);
  }

  public cs() {
    this.turtleX = this.ctx.canvas.width/2;
    this.turtleY = this.ctx.canvas.height/2;
    this.turtleAngle = toRadians(270);
    this.setpc("black");
    this.setsc("white");

    console.log(`cs(), x = ${this.turtleX}, y = ${this.turtleY}, angle = ${(toDegrees(this.turtleAngle) - 270) % 360}, pen color = ${this.penColor}, screen color = ${this.screenColor}`);
  }

  public setpc(color: string) {
    this.penColor = color;
    console.log(`setpc(${color}), pen color = ${this.penColor}`);
  }

  public setsc(color: string) {
    this.screenColor = color;
    console.log(`setsc(${color}), screen color = ${this.screenColor}`);
  }

  public setpw(width: number) {
    this.ctx.lineWidth = width;
    console.log(`setpw(${width}), pen width = ${this.ctx.lineWidth}`);
  }

  public pu() {
    this.penDown = false;
    console.log(`pu(), pen state = ${this.penDown}`);
  }

  public pd() {
    this.penDown = true;
    console.log(`pd(), pen state = ${this.penDown}`);
  }

  public pe() {
    this.ctx.globalCompositeOperation = "destination-out";
    this.ctx.lineWidth += 1;
    console.log(`pe(), pen mode = ${this.ctx.globalCompositeOperation}, pen width = ${this.ctx.lineWidth}`);
  }

  public ppt() {
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.lineWidth -= 1;
    console.log(`ppt(), pen mode = ${this.ctx.globalCompositeOperation}, pen width = ${this.ctx.lineWidth}`);
  }

  public wash() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    console.log('wash()');
  }

  public setx(x: number) {
    this.turtleX = x;
    console.log(`setX(${x}), x = ${this.turtleX}`);
  }

  public sety(y: number) {
    this.turtleY = y;
    console.log(`setY(${y}), y = ${this.turtleY}`);
  }

  public setxy(x: number, y: number) {
    this.turtleX = x;
    this.turtleY = y;
    console.log(`setXY(${x}, ${y}), x = ${this.turtleX}, y = ${this.turtleY}`);
  }

  public home() {
    this.turtleX = 0;
    this.turtleY = 0;
    console.log(`home(), x = ${this.turtleX}, y = ${this.turtleY}`);
  }

  public setheading(angle: number) {
    this.turtleAngle = toRadians(270 + angle);
    console.log(`setheading(${angle}), angle = ${(toDegrees(this.turtleAngle) - 270) % 360}`);
  }

  public random(max: number) {
    console.log(`random(${max}), result = ${Math.random() * max}`);
  }

  public mod(a: number, b: number) {
    console.log(`mod(${a}, ${b}), result = ${a % b}`);
  }

  public power(a: number, b: number) {
    console.log(`power(${a}, ${b}), result = ${Math.pow(a, b)}`);
  }

  public sqrt(a: number) {
    console.log(`sqrt(${a}), result = ${Math.sqrt(a)}`);
  }

  public log(a: number) {
    console.log(`log(${a}), result = ${Math.log10(a)}`);
  }
  
  public abs(a: number) {
    console.log(`abs(${a}), result = ${Math.abs(a)}`);
  }

  public sin(a: number) {
    console.log(`sin(${a}), result = ${Math.sin(toRadians(a))}`);
  }

  public cos(a: number) {
    console.log(`cos(${a}), result = ${Math.cos(toRadians(a))}`);
  }

  public tan(a: number) {
    console.log(`tan(${a}), result = ${Math.tan(toRadians(a))}`);
  }

  public arcsin(a: number) {
    console.log(`arcsin(${a}), result = ${Math.asin(toRadians(a))}`);
  }

  public arccos(a: number) {
    console.log(`arccos(${a}), result = ${Math.acos(toRadians(a))}`);
  }

  public arctan(a: number) {
    console.log(`arctan(${a}), result = ${Math.atan(toRadians(a))}`);
  }

  public print(content: number | string){
    console.log(`print(${content})`);
  }

  public ct() {
    console.log('ct()');
  }

  public wait(ms: number) {
    console.log(`wait(${ms})`);
  }
};

function toRadians(degrees: number) {
    return degrees * Math.PI / 180
}

function toDegrees(radians: number) {
    return radians * 180 / Math.PI
}