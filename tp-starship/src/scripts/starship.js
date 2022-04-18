
// la source de l'image à utiliser pour le vaisseau
import starshipImg from '../assets/images/vaisseau-ballon-petit.png';
import MoveState from './movestate';
import Mobile from './mobile';

export default class Starship extends Mobile{
    constructor(x,y){
        super(x,y,0,8,48,43);
        this.moving=MoveState.NONE;
        this.image.src=starshipImg;
    }
    UP(){
        return MoveState.UP==this.moving;
    }
    DOWN(){
        return MoveState.DOWN==this.moving;
    }
    
    moveUp(){
        this.deltaY=-Math.abs(this.deltaY);
        this.moving=MoveState.UP;
    }
    moveDown(){
        this.deltaY=+Math.abs(this.deltaY);
        this.moving=MoveState.DOWN;
    }
    move (canvas) {              // déplace sans sortir des limites de *box*
        if (this.moving === MoveState.UP && this.y-Math.abs(this.deltaY) >= 0) {
            super.move();
        }
        if (this.moving === MoveState.DOWN && this.y<canvas.height-this.height) {
            //this.y = Math.min(canvas.height, this.y + this.shiftY);
            super.move();
        }    
    }
    stopMoving(){
        this.moving = MoveState.NONE;
    }
}


