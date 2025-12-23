export class CanvasActionSet{
  private ctx: CanvasRenderingContext2D;
  private turtleX: number;
  private turtleY: number;
  private turtleAngle: number;
  private penColor: string;
  private screenColor: string;
  private penDown: boolean;

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
    this.ctx.strokeStyle = this.penColor;
  }

  public setsc(color: string) {
    // TODO
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
    this.ctx.strokeStyle = this.screenColor;
    this.ctx.lineWidth += 1;
  }

  public ppt() {
    this.setpc(this.penColor);
    this.ctx.lineWidth -= 1;
  }

  public wash() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  public setX(x: number) {
    this.turtleX = x;
  }

  public setY(y: number) {
    this.turtleY = y;
  }

  public setXY(x: number, y: number) {
    this.turtleX = x;
    this.turtleY = y;
  }

  public home() {
    this.turtleX = 0;
    this.turtleY = 0;
  }
};

function toRadians(degrees: number) {
    return degrees * Math.PI / 180
}

function toDegrees(radians: number) {
    return radians * 180 / Math.PI
}