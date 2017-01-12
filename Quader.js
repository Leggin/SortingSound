function Quader(qWidth,qHeight) {
    this.h = qHeight;
    this.w = qWidth;

    this.makeSound = function(){
        
    }
    
    this.show = function(xPos,yPos){
        fill(255,150);
        rect(xPos,yPos,this.w,this.h);
    }

}
