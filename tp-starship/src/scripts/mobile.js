// la source de l'image à utiliser pour le mobile


export default class Mobile {
    
    static MOBILE_WIDTH = 40;
    constructor(x, y, deltaX , deltaY,width,height) {
        this.x = x;
        this.y = y;
        this.deltaX = deltaX || 0; 
        this.deltaY= deltaY || 0;
        this.width=width;
        this.height=height;
        this.image = this.createImage();
    }    

    createImage(mobileImgSrc) {
        const mobileImg = new Image();
        mobileImg.src = mobileImgSrc;
        return mobileImg;
      }
      
    draw(context) {
        context.drawImage(this.image,this.x,this.y);
    }
    move(){  
        this.x += this.deltaX;
        this.y += this.deltaY;
    }
   
}


