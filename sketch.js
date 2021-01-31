var r = 255
var b = 0
var g = 0
var c = 1
var d = 0
var s = 3

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  console.log(c)
  
  
    
    if(c === 1){
     b += s
      if(b === 255){
        c = 2
      }
}
    if(c === 2){
     r -= s
      if(r === 0){
        c = 3
      }
}
    if(c === 3){
     g += s
      if(g === 255){
        c = 4
      }
}
    if(c === 4){
     b -= s
      if(b === 0){
        c = 5
      }
}
    if(c === 5){
     r += s
      if(r === 255){
        c = 6
      }
}
    if(c === 6){
     g -= s
      if(g === 0){
        c = 1
      }
}
    
    
    
   
  
   
}
  
