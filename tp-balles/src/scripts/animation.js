import Ball from './ball';
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
const ballradius=30;
/* TYPE Animation */
export default class Animation {

  constructor(canvas){
    this.canvas=canvas;
    this.balls=new Array();
    this.raf=null;
    this.context= this.canvas.getContext('2d');

  }
  alea(n){
    return Math.floor(Math.random() * n);
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  addBall(){
    const x=this.getRandomInt(ballradius,this.canvas.width-2*ballradius);
    const y=this.getRandomInt(ballradius,this.canvas.height-2*ballradius);
    const deltaX=this.getRandomInt(-5,5);
    const deltaY=this.getRandomInt(-5,5);
    const ball=new Ball(x,y,deltaX,deltaY);
    this.balls.push(ball);
    ball.draw(this.context);
    
  }

  moveAndDraw  () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //this.ball.move(this.canvas);
    //this.ball.draw(this.context);
    this.balls.forEach(ball => {
      ball.move(this.canvas);
      ball.draw(this.context);
    });
    this.raf = requestAnimationFrame(this.moveAndDraw.bind(this));
    
  }

  /* start the animation or stop it if previously running */
  startAndStop = () => {
    
    if (this.raf == 0) { // Animation stoppée : on la relance
        this.moveAndDraw();
        document.getElementById("stopStartBall").innerHTML="Stop";
        document.getElementById("addBall").innerHTML="AddBall";
    } else {  // Arrêt de l'animation
        cancelAnimationFrame(this.raf);
        this.raf=0;
        document.getElementById("stopStartBall").innerHTML="Start";
        document.getElementById("addBall").innerHTML="AddBall";
    }
}

  
}
