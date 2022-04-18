
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

const ballradius=30;
const canvas = document.getElementById("terrain");
/* TYPE Ball */
export default class Ball {

    static BALL_WIDTH = 48;

    constructor(x, y, deltaX , deltaY) {
        this.x = x;
        this.y = y;
        this.deltaX = deltaX || 3; 
        this.deltaY= deltaY || -2;
        this.image = new Image();
        
      }
      
    
    draw(context){
        context.beginPath();
        context.arc(this.x,this.y, ballradius, 0, Math.PI*2);
        context.fillStyle = "white";
        context.fill();
        context.closePath();
    }
   
    move (canvas) {
        canvas.getContext('2d').clearRect(this.x - ballradius - 1, this.y - ballradius - 1, ballradius * 2+2 , ballradius * 2+2 );
        if(this.x + this.deltaX > canvas.width-ballradius || this.x + this.deltaX < ballradius) {
            this.deltaX = -this.deltaX;
        }
        if(this.y + this.deltaY > canvas.height-ballradius || this.y + this.deltaY < ballradius ) {
            this.deltaY = -this.deltaY;
        }
        if(this.deltaX==0 && this.deltaY==0 ){
            this.deltaX=3;
            this.deltaY=-2;
        }
        this.x += this.deltaX;
        this.y += this.deltaY;
       
    }

    /* crée l'objet Image à utiliser pour dessiner cette balle */
    createImage() {
  	const ballImg = new Image();
	ballImg.width = Ball.BALL_WIDTH;
	ballImg.src = ballImgSrc;
    this.image = ballImg;
	return ballImg;
    }

    collisionWith(obstacle){

        const rect1 = {x: obstacle.x, y: obstacle.y, width: obstacle.width, height: obstacle.height};
        const rect2 = {x: this.x, y: this.y, width: rect1.x + ballradius *2+2, height: rect1.y + ballradius *2+2};

        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            // collision détectée !
            return true;
        }

        // const P1=[Math.max(x1, xx1),Math.max(y1,yy1)];
        // const P2=[Math.min(x2, xx2),Math.min(y2,yy2)];
        // if(P1[0] <P2[0] && P1[1]<P2[1]){
        //     return true;
        }


}
