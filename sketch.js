function setup() {
  createCanvas(window.innerWidth - window.innerWidth * 0.025, window.innerHeight - window.innerHeight * 0.025);  
  background(200);
  
  RGBCOL = [R = 0,G = 0,B = 0]
  RGBMODE = false
  
  colNum = 0
  shapeNum = 0
  penSize = 10
  increaseBy = 10
  
  shapes = ["rect","circle"]
  penCols = ["red","green","blue","yellow","orange","violet","pink","PAPAYAWHIP"," DARKOLIVEGREEN","purple"]
  
  myPen = new pen(penSize,shapes[0],penCols[0]) //size,shape,col
  
  
}

function draw() {
    myPen.size = penSize
    myPen.shape = shapes[shapeNum]
    if(RGBMODE){
      
      myPen.col = RGBCOL
      
    }
    else{myPen.col = penCols[colNum]}
    
}

function mouseClicked() {
  myPen.ink()
}


function mouseDragged() {
  myPen.ink()

}


function keyPressed() {

  switch(keyCode){
      
      case 32:
    
        colNum++
        if(colNum > penCols.length -1 ){colNum = 0}
        
      
        RGBMODE = false
    
        break
        
      case 82:
        RGBCOL[0]+= increaseBy  //R COL CONTROL
        RGBMODE = true
        break
        
      case 69:
        RGBCOL[0]-= increaseBy
        RGBMODE = true
        break
        
      case 71:
        RGBCOL[1]+= increaseBy //G COL CONTROL
        RGBMODE = true
        break
        
       case 70:
        RGBCOL[1]-= increaseBy
        RGBMODE = true
        break
      
      case 66:
         RGBCOL[2]+= increaseBy //B COL CONTROL
        RGBMODE = true
        break
        
      case 86:
         RGBCOL[2]-= increaseBy
        RGBMODE = true
        break
        
      
      
      case 39:
        penSize += 10
        if(penSize >= 1000){penSize = 10}  //increase pen size
        
        break;
    
      case 37:
        penSize -= 10                     //decrease pen size
        if(penSize <= 0){penSize = 50}
      
        break;
      
        case 67:                           //clear button
        fill(200)
        rect(0,0,window.innerWidth,window.innerHeight)
        break
        

       case 78:                          //remove outer border
        noStroke()
        break
        
       case 77:                          //add outer border
        stroke(0)
        break
        
        case 83:                        //change pen shape
    
        shapeNum++
        if(shapeNum > shapes.length -1 ){shapeNum = 0}
        
      
        RGBMODE = false
    
        break
        
        case 38:
    
        increaseBy+= 10                  //How much a col changes by
        if(increaseBy >= 255/2){
          
          increaseBy = 10
          
        }
        break
        
        case 40:
    
        increaseBy-= 10                //How much a col changes by
        if(increaseBy <=0 ){
          
          increaseBy = 10
          
        }
        
        break
      
        
       default:
        break
  }

  
  
}