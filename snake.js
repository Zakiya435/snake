class Snake {
    constructor(){
     this.snakeXPosition = [];    
     this.snakeYPosition = [];    
     this.xdir = 0;               
     this.ydir = 0;          
     this.Count_tail = 1; 
     this.x =20;      
     this.y = 20;    
    }
  
    update(){    
      if(!this.gameOver()){
        this.x += this.xdir;
        this.y += this.ydir;
        if(this.snakeXPosition.length >= this.Count_tail)
        {  
          this.snakeXPosition.shift();    
          this.snakeYPosition.shift(); 
        }
        this.snakeXPosition.push(this.x); 
        this.snakeYPosition.push(this.y);
      }
    }

    eat(x,y)
    {
     if(this.x === x && this.y === y){  
    this.Count_tail++;
     return true; 
     }
     else
     {
     return false;
     }
    }

    gameOver(){ 
      if(this.x > 800 || this.x < 0 || this.y > 400 || this.y < 0){
        text("GAME OVER !!! ",400,200);
      }
    }

    display(){
      for(var i= 0;i<this.Count_tail;i++){
        var y = this.snakeYPosition[i];
        var x = this.snakeXPosition[i];
        fill("247, 231, 108");
        rect(x,y,20,20);
      } 
}
}