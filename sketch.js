




var N1,N2;
var B1,B2,B3,B4;
var value1,value2





function setup() {
  createCanvas(800, 600);
  N1=createInput()
  N1.position(200,150)
  N2=createInput()
  N2.position(400,150)
  B1=createButton("add")
  B1.position(150,300)
  B1.mousePressed(add)
  B2=createButton("mul")
  B2.position(200,300)
  B2.mousePressed(mul)
  B3=createButton("sub")
  B3.position(250,300)
  B3.mousePressed(sub)
  B4=createButton("div")
  B4.position(300,300)
  B4.mousePressed(div)
}

function draw() {
  background('Purple');
  text("number 1",250,190)
  text("number 2",450,190)
  value1=parseInt(N1.value())
  value2=parseInt(N2.value())
}

function add(){
  console.log (value1+value2)

}
function mul(){
  console.log (value1*value2)
}

 function sub() {
   console.log(value1-value2)
 }
function div () {
  console.log(value1/value2)
}