import Ball from './ball';           // peut être commenté après la Ex1 Q2 faite
import Animation from './animation';
import Obstacle from './obstacle';
import AnimationWithObstacle from './animationwithobstacle';
import './assets/style/style-balles.css';


/* setup */
const init = () => {
    const canvas = document.getElementById("terrain");
   
    // commenter les 2 lignes suivantes après la Ex1 Q2  
    //const ball = new Ball(50,50);
    // document.getElementById("stopStartBall").addEventListener("click", () => ball.draw(canvas.getContext('2d'))  );
    // document.getElementById("stopStartBall").addEventListener("click", () => ball.move(canvas));

    // décommenter les deux lignes suivantes à partir la question Ex1 Q4
    // const animation = new Animation(canvas);
    // document.getElementById("stopStartBall").addEventListener("click",  animation.startAndStop  );
    // document.getElementById("addBall").addEventListener("click",  animation.addBall  );
    const MoveState = { LEFT : 0, RIGHT : 1, NONE : 2};
   
    const obstacle=new Obstacle(50,50,50,50,MoveState.LEFT);
    //obstacle.draw(canvas.getContext('2d'));
    const animation = new AnimationWithObstacle(canvas,obstacle);
    document.getElementById("stopStartBall").addEventListener("click", () => animation.startAndStop() );
    document.getElementById("addBall").addEventListener("click", () => animation.addBall() );
    window.addEventListener('keyup', animation.keyUpActionHandler.bind(animation)); 
    window.addEventListener('keydown', animation.keyDownActionHandler.bind(animation));

}

window.addEventListener("DOMContentLoaded",init);


//
console.log('le bundle a été généré');
