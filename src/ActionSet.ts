export interface ActionSet {
  fd(steps: number): void;
  bk(steps: number): void;

  rt(angle: number): void;
  lt(angle: number): void;

  cs(): void;

  // TODO convert color strings to arrays ([number, number, number]) or an object
  setpc(color: [number, number, number]): void;
  setsc(color: [number, number, number]): void;
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

  print(content: number | string): void;
  ct(): void;
  wait(centiseconds: number): Promise<void> | void;

  toRadians(angle: number): number;
}

export class CanvasActionSet implements ActionSet{
  public ctx: CanvasRenderingContext2D;
  public turtleX: number;
  public turtleY: number;
  public turtleAngle: number;
  public penColor: [number, number, number];
  public screenColor: [number, number, number];
  public penDown: boolean;

  public constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
    this.turtleX = ctx.canvas.width/2;
    this.turtleY = ctx.canvas.height/2;
    this.turtleAngle = 270;
    this.penColor = [224, 224, 224];
    this.screenColor = [30, 30, 30];
    this.penDown = true;

    this.setpc([224, 224, 224]);
    this.setsc([30, 30, 30]);
  }

  public fd(steps: number) {
    const newX: number = this.turtleX + steps*Math.cos(this.toRadians(this.turtleAngle));
    const newY: number = this.turtleY + steps*Math.sin(this.toRadians(this.turtleAngle));

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
    const newX: number = this.turtleX - steps*Math.cos(this.toRadians(this.turtleAngle));
    const newY: number = this.turtleY - steps*Math.sin(this.toRadians(this.turtleAngle));

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
    this.turtleAngle = (this.turtleAngle + angle) % 360
  }

  public lt(angle: number) {
    this.turtleAngle = (this.turtleAngle - angle) % 360
  }

  public cs() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.turtleX = this.ctx.canvas.width/2;
    this.turtleY = this.ctx.canvas.height/2;
    this.turtleAngle = 270;
    this.setpc([224, 224, 224]);
    this.setsc([30, 30, 30]);
  }

  public setpc(color: [number, number, number]) {
    this.penColor = color;
    this.ctx.strokeStyle = `rgb(${color.join(", ")})`;
  }

  public setsc(color: [number, number, number]) {
    this.screenColor = color;
    this.ctx.canvas.style.backgroundColor = `rgb(${color.join(", ")})`;
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
    this.setpc(this.penColor);
    this.ctx.lineWidth -= 1;
  }

  public wash() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  public setx(x: number) {
    this.turtleX = this.ctx.canvas.width/2 + x;
  }

  public sety(y: number) {
    this.turtleY = this.ctx.canvas.height/2 - y;
  }

  public setxy(x: number, y: number) {
    this.turtleX = this.ctx.canvas.width/2 + x;
    this.turtleY = this.ctx.canvas.height/2 - y;
  }

  public home() {
    this.turtleAngle = 270;
    this.turtleX = this.ctx.canvas.width/2;
    this.turtleY = this.ctx.canvas.height/2;
  }

  public setheading(angle: number) {
    this.turtleAngle = (270 + angle) % 360;
  }

  public print(content: number | string){
    console.log(content);
  }

  public ct() {
    console.clear();
  }

  public wait(centiseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, centiseconds * 10));
  }

  // TODO maybe remove this, and add it to the prefix of the code
  public toRadians(degrees: number) {
      return degrees * Math.PI / 180
  }
};

export class LogActionSet implements ActionSet{
  public runid: number;
  private ctx: CanvasRenderingContext2D;
  private turtleX: number;
  private turtleY: number;
  private turtleAngle: number;
  private penColor: [number, number, number];
  private screenColor: [number, number, number];
  private penDown: boolean;

  static readonly PI: number = Math.PI;
  static readonly E: number = Math.E;

  public constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.turtleX = ctx.canvas.width/2;
    this.turtleY = ctx.canvas.height/2;
    this.turtleAngle = 270;
    this.penColor = [224, 224, 224];
    this.screenColor = [30, 30, 30]
    this.penDown = true;

    this.setpc([224, 224, 224]);
    this.setsc([30, 30, 30]);
  }

  public fd(steps: number) {
    const newX: number = this.turtleX + steps*Math.cos(this.toRadians(this.turtleAngle));
    const newY: number = this.turtleY + steps*Math.sin(this.toRadians(this.turtleAngle));

    this.turtleX = newX;
    this.turtleY = newY;

    console.log(`fd(${steps}), x = ${this.turtleX}, y = ${this.turtleY}`);
  }

  public bk(steps: number) {
    const newX: number = this.turtleX - steps*Math.cos(this.toRadians(this.turtleAngle));
    const newY: number = this.turtleY - steps*Math.sin(this.toRadians(this.turtleAngle));

    this.turtleX = newX;
    this.turtleY = newY;

    console.log(`bk(${steps}), x = ${this.turtleX}, y = ${this.turtleY}`);
  }

  public rt(angle: number) {
    this.turtleAngle = (this.turtleAngle + angle) % 360
    console.log(`rt(${angle}), angle = ${this.turtleAngle}`);
  }

  public lt(angle: number) {
    this.turtleAngle = (this.turtleAngle - angle) % 360
    console.log(`rt(${angle}), angle = ${this.turtleAngle}`);
  }

  public cs() {
    this.turtleX = this.ctx.canvas.width/2;
    this.turtleY = this.ctx.canvas.height/2;
    this.turtleAngle = 270;
    this.setpc([224, 224, 224]);
    this.setsc([30, 30, 30]);

    console.log(`cs(), x = ${this.turtleX}, y = ${this.turtleY}, angle = ${this.turtleAngle}, pen color = ${this.penColor}, screen color = ${this.screenColor}`);
  }

  public setpc(color: [number, number, number]) {
    this.penColor = color;
    console.log(`setpc(${color}), pen color = ${this.penColor}`);
  }

  public setsc(color: [number, number, number]) {
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
    this.turtleX = this.ctx.canvas.width/2 + x;
    console.log(`setX(${x}), x = ${this.turtleX}`);
  }

  public sety(y: number) {
    this.turtleY = this.ctx.canvas.height/2 - y;
    console.log(`setY(${y}), y = ${this.turtleY}`);
  }

  public setxy(x: number, y: number) {
    this.turtleX = this.ctx.canvas.height/2 + x;
    this.turtleY = this.ctx.canvas.height/2 - y;
    console.log(`setXY(${x}, ${y}), x = ${this.turtleX}, y = ${this.turtleY}`);
  }

  public home() {
    this.turtleAngle = 270;
    this.turtleX = this.ctx.canvas.width/2;
    this.turtleY = this.ctx.canvas.height/2;
    console.log(`home(), x = ${this.turtleX}, y = ${this.turtleY}`);
  }

  public setheading(angle: number) {
    this.turtleAngle = (270 + angle) % 360;
    console.log(`setheading(${angle}), angle = ${this.turtleAngle}`);
  }

  public print(content: number | string){
    console.log(`print(${content})`);
  }

  public ct() {
    console.log('ct()');
  }

  public wait(centiseconds: number) {
    console.log(`wait(${centiseconds})`);
  }

  public toRadians(degrees: number) {
      return degrees * Math.PI / 180
  }
};