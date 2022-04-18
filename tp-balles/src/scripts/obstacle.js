/* TYPE Obstacle */
const MoveState = { LEFT : 0, RIGHT : 1, NONE : 2};
export default class Obstacle {
    constructor(x,y,width,height,moving){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.moving=MoveState.NONE;
      }
    draw  (context) {
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.closePath();
    }
    moveLeft () {
        this.shiftX = - 10;
        this.moving = MoveState.LEFT;
    }
    moveRight  () {
        this.shiftX = + 10;
        this.moving = MoveState.RIGHT;
    }
    move (box) {              // déplace sans sortir des limites de *box*
        if (this.moving === MoveState.LEFT) {
        this.x = Math.max(0, this.x + this.shiftX);
        }
        if (this.moving === MoveState.RIGHT) {
        this.x = Math.min(box.width - this.width, this.x + this.shiftX);
        }
    }
    stopMoving(){
        this.moving = MoveState.NONE;
    }
    

}