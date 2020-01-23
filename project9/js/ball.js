import { detectCollision } from './collisionDetection.js';
export default class Ball{
  constructor(game){
    this.image=document.getElementById("img_ball");
    this.gameWidth=game.gameWidth;
    this.gameHeight=game.gameHeight;
    this.speed={
      x:5,
      y:-2
    };

    this.game=game;

    this.position={
      x:10,
      y:400
    };
    this.size=20;
  }

  draw(ctx){
    ctx.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
  }

  update(deltaTime){
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if (this.position.x+this.size>this.gameWidth || this.position.x<0){
      this.speed.x=-this.speed.x;
    }
    if (this.position.y<0){
      this.speed.y=-this.speed.y;
    }
    if (this.position.y+this.size>this.gameHeight){
      this.game.lives--;
    }

      if (detectCollision(this,this.game.paddle)){
      this.speed.y=-this.speed.y;
      this.position.y=this.game.paddle.position.y-this.size;
    }
  }
}
