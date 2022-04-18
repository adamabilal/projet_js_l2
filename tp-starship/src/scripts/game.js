import Starship from './starship.js';
import Saucer from './saucer.js';
import Shoot from './shoot.js';

export default class Game {
    constructor(canvas){
        this.canvas=canvas;
        this.context=canvas.getContext('2d');
        this.vaisseau=new Starship(40,40);
        this.soucoupes=new Array();
        this.shoots=new Array();
        this.score=0;
        this.raf=null;
        this.timer=750;  
    }

    alea(n){
        return Math.floor(Math.random() * n);
    }
    addSoucoupe(){
        const x=this.canvas.width - 48;
        const y=this.alea(this.canvas.height -43);
        const soucoupe=new Saucer(x,y);
        this.soucoupes.push(soucoupe);
    }
    addShoot(){
        const shoot=new Shoot(this.vaisseau.x +48,this.vaisseau.y+12);
        this.shoots.push(shoot);
        document.activeElement.blur();
    
   }
    addScore(score){
        this.score+=score;
        document.getElementById("score").innerHTML = this.score;
    }
  
    moveAndDraw(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.vaisseau.draw(this.context);
        this.vaisseau.move(this.canvas);

        this.shoots.filter(shoot=>shoot.collisionWith(this.soucoupes)!=true).forEach(shoot => {
            shoot.move(this.canvas);
            shoot.draw(this.context);
        });

        this.soucoupes.filter(soucoupe=>soucoupe.collisionWith(this.shoots)!=true).forEach(soucoupe => {
            soucoupe.move(this.canvas);
            soucoupe.draw(this.context);    
        });
        
        this.shoots.filter(shoot=>shoot.todelete==true && shoot.hasShoot==true).forEach(shoot => {      
            this.addScore(200);   
        });
       
        this.soucoupes.filter( soucoupe => soucoupe.todelete == true ).forEach( soucoupe => {
            this.addScore(-1000);
        });
        
        this.soucoupes=this.soucoupes.filter(soucoupe=>soucoupe.todelete !=true); 
        this.shoots=this.shoots.filter(shoot=>shoot.todelete !=true);
   
        this.raf = requestAnimationFrame(this.moveAndDraw.bind(this)); 
       
    }

    keyDownActionHandler(event){
        switch (event.key) {
            case "ArrowUp":
                this.vaisseau.moveUp();
                this.addShoot();
                break;
            case " ":
                this.addShoot();
                break;
            case "ArrowDown":
                this.vaisseau.moveDown();
                this.addShoot();
                break;
            default:
                return;
        }
        event.preventDefault();
    }
    
    keyUpActionHandler(event){
        switch (event.key) {
            case "ArrowUp":
            case "ArrowDown":
                this.vaisseau.stopMoving();
                break;
            default:
                return;
        }
        event.preventDefault();
    }

    startAndStop(){
        if (this.timer== 750) { // Animation stoppée : on la relance
            this.interval=setInterval(this.addSoucoupe.bind(this),this.timer);
            this.timer=0
            document.getElementById("flotteSoucoupes").innerHTML="Stop";
        } else {  // Arrêt de l'animation
            clearInterval(this.interval);
            this.timer=750;
            document.getElementById("flotteSoucoupes").innerHTML='&#8734; <img src="images/flyingSaucer-petit.png" width="55" alt="nouvelle soucoupe volante"/>';
        }
    }
   
}



