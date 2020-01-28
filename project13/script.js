
function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.ceil(Math.random() * 10) / 10 +
    ")"
  );
}
var k=0;
var color=randomColor();
var canvas=document.getElementById("canvas");
var c=canvas.getContext("2d");
var tx= window.innerWidth;
var ty=window.innerHeight;
canvas.width=tx;
canvas.height=ty;
var speed=6;



function Ball2(){
  this.x=tx/2;
  this.y=ty/2;
  this.radius=50;
  this.color="white";
  this.update=function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,2*Math.PI);
    c.fillStyle=this.color;
    c.fill();
    //c.stroke();
  }
}


function Ball(){
  this.x=tx/2;
  this.y=ty/2;
  this.radius=20;
  this.update=function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,2*Math.PI);
    c.fillStyle=color;
    c.fill();
    //c.stroke();
  }
}

function animate(){
  if (tx != window.innerWidth || ty != window.innerHeight) {
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;
  }

  requestAnimationFrame(animate);
  c.clearRect(0, 0, tx, ty);
  ball.update();
  ball2.update();
  ball.x+=speed;
  if(ball.x>=tx/2+tx*0.2 || ball.x<=tx/2-tx*0.2){
    speed=-speed;
    color=randomColor();
  }
  if(ball.x<=ball2.x+ball2.radius && speed<0){
    ball2.color=color;
  }
  if(ball.x>=ball2.x-ball2.radius && speed>0){
    ball2.color=color;
  }
}
var ball=new Ball();
var ball2= new Ball2();

animate();

//c.stroke();


/*
function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.ceil(Math.random() * 10) / 10 +
    ")"
  );
}


var canvas=document.getElementById("canvas");
var c=canvas.getContext("2d");
var tx= window.innerWidth;
var ty=window.innerHeight;
canvas.width=tx;
canvas.height=ty;

c.beginPath();
c.arc(tx/2,ty/2,50,0,2*Math.PI);
c.fillStyle=randomColor();
c.fill();
//c.stroke();
/*
c.beginPath();
c.arc(tx/2+tx*0.2,ty/2,20,0,2*Math.PI);
c.fill();

c.strokeWidth=5;
function Ball(){
  this.color=randomColor();
  this.x=tx/2+tx*0.2;
  this.y=ty/2;
  this.dx=Math.round((Math.random() - 0.5) * 10);
  this.update=function(){
    c.beginPath();
    c.arc(this.x,this.y,20,0,2*Math.PI);
    c.fill();
  }
}


function animate(){
  if (tx != window.innerWidth || ty != window.innerHeight) {
    tx = window.innerWidth;
    ty = window.innerHeight;
    canvas.width = tx;
    canvas.height = ty;
  }

  requestAnimationFrame(animate);
  //c.clearRect(0, 0, tx, ty);
  var ball=new Ball();
  ball.update();

/*
  c.beginPath();
  c.arc(this.x,this.y,20,0,2*Math.PI);
  c.fillStyle=randomColor();
  c.fill();
  this.dx=Math.round((Math.random() - 0.5) * 10);



  ball.x += ball.dx;

  if (ball.x>=tx/2+tx*0.2 || ball.x<=tx/2-(tx*0.2)){
    ball.dx=-ball.dx;
    ball.color=randomColor();
  }
  if(ball.x==tx/2+50 and ball.x==tx/2-50){
    c.beginPath();
    c.arc(tx/2,ty/2,50,0,2*Math.PI);
    c.fillStyle=ball.color;
    c.fill();
  }


}

animate();
*/
