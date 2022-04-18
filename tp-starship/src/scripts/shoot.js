import shootImg from '../assets/images/tir.png';
import MoveState from './movestate';
import Mobile from './mobile';
import Game from './game';

export default class Shoot extends Mobile{
    constructor(x,y){
        super(x,y,8,0,48,43);
        this.moving=MoveState.NONE;
        this.image.src=shootImg;
    }
    isInCollision(mobile){
        if(mobile.x >= this.x - 48 && mobile.x <= this.x + this.width && mobile.y >= this.y - 48 && mobile.y <= this.y + this.height){
            return true;
        }
        return false;
    }
    collisionWith(saucers){
        saucers.filter(saucer=>this.isInCollision(saucer)==true).forEach(saucer => {
            this.todelete = true;
            this.hasShoot=true;
            saucer.deltaX=0;
            saucer.deltaY=3;
            saucer.moveDown();
        }); 
    }
    moveRight(){
        this.deltaX=+Math.abs(this.deltaX);
        this.moving=MoveState.RIGHT;
    }
    move(){
        this.moveRight();
        super.move();
      }

}