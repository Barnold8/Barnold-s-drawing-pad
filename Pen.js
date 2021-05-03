class pen{
  
  
  constructor(size,shape,col){
    
    this.size = size
    this.shape = shape
    this.col = col
    
  }
  
  ink(){
    
    switch(this.shape){
  
      case "rect":
        fill(this.col)
        rect(mouseX-this.size/2,mouseY-this.size/2,this.size)
        
        break
      
        
      case "circle":
        if(typeof(this.col) == "string"){fill(this.col)}
        else{fill(this.col[0],this.col[1],this.col[2])}
        ellipse(mouseX,mouseY,this.size)
        break
      default:
        
        break
    
  }
    
    
  }
  
  
}