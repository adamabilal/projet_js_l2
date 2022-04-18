import saucerImg from '../assets/images/flyingSaucer-petit.png';
import MoveState from './movestate';
import Mobile from './mobile';

export default class Saucer extends Mobile{
    constructor(x,y){
        super(x,y,-3,0,48,43);
        this.image.src=saucerImg;
        this.moving=MoveState.NONE;
    }
   
    moveLeft(){
        this.deltaX=-Math.abs(this.deltaX);
        this.moving=MoveState.LEFT;
    }
    moveRight(){
        this.deltaX=+Math.abs(this.deltaX);
        this.moving=MoveState.RIGHT;
    }
    moveDown(){
        this.deltaY=+Math.abs(this.deltaY);
        this.moving=MoveState.DOWN; 
    }
    move(){
        this.moveLeft();
        super.move();
        if(this.x <= 0){
          this.todelete = true;

        }
    }
    isInCollision(mobile){
        if(mobile.x >= this.x - 48 && mobile.x <= this.x + this.width && mobile.y >= this.y - 48 && mobile.y <= this.y + this.height){
            return true;
        }
        return false;
    }
    collisionWith(saucers){
        saucers=saucers.filter(saucer=>this.isInCollision(saucer)!=true);
    }
}