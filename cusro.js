let c = []

var r = 255
var b = 0
var g = 0
var ch = 1
var d = 0
var s = 3

function setup() {
  createCanvas(2000, 2000);
  
}

function draw() {
  background(0);

  
    
  if(ch === 1){
    b += s
     if(b === 255){
       ch = 2
     }
}
   if(ch === 2){
    r -= s
     if(r === 0){
       ch = 3
     }
}
   if(ch === 3){
    g += s
     if(g === 255){
       ch = 4
     }
}
   if(ch === 4){
    b -= s
     if(b === 0){
       ch = 5
     }
}
   if(ch === 5){
    r += s
     if(r === 255){
       ch = 6
     }
}
   if(ch === 6){
    g -= s
     if(g === 0){
       ch = 1
     }
}



  for(let i = 0; i < 1; i++){
    c.push(new Cir())
    
  }
  
  if(c.length > 30){
     c.shift()
     }
  
  for(let i = 0; i < c.length; i++){
  c[i].diss()
  c[i].display()
  }
  
  
  
}
  
  class Cir {
    
    constructor(){
      this.x = mouseX
      this.y = mouseY
      this.r = 30
      this.t = 255
    }

diss(){
  this.t -= 10
  
}

display(){
    
    noStroke()
  fill(r, b, g, this.t)
  ellipse(this.x, this.y , this.t * 0.4,)
}
  }

