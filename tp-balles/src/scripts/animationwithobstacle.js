/* TYPE AnimationWithObstacle */
import Obstacle from './obstacle';
import Animation from './animation';
import Ball from './ball';

const ballradius=30;
export default class AnimationWithObstacle extends Animation {
        constructor(canvas,obstacle){
            super(canvas);
            this.obstacle=obstacle;
            this.context=canvas.getContext('2d');
            
        }
        moveAndDraw(){
            this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
            this.obstacle.draw(this.context);
            this.balls=this.balls.filter(ball=>ball.collisionWith(this.obstacle) != true);
            this.balls.forEach((ball,i) =>{(ball,i)
                ball.move(this.canvas);
                if (ball.collisionWith(this.obstacle) == true){
                   this.obstacle.move(this.obstacle);
                    this.balls.splice(i,1);
                }
                else {
                    ball.draw(this.context);  
                }
            });
            this.raf = requestAnimationFrame(this.moveAndDraw.bind(this));
        }
        keyDownActionHandler(event) {
            
            switch (event.key) {
                case "ArrowLeft":
                case "Left":
                    this.obstacle.moveLeft();
                    break;
                case "ArrowRight":
                case "Right":
                    this.obstacle.moveRight();
                    break;
                default: return;
            }
            event.preventDefault();
         }
         keyUpActionHandler(event) {
            switch (event.key) {
                case "ArrowLeft":
                case "Left":
                case "ArrowRight":
                case "Right":
                    this.obstacle.stopMoving();
                    break;
                default: return;
            }
            event.preventDefault();
        }
}       