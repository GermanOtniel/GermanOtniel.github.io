var canvas = document.getElementById("game-board");
var ctx = canvas.getContext("2d");
var widthRandom = Math.floor(Math.random() * 1000);
var intervalo;
var board = new Board();
var tardi = new Tardigrado();
var shoot = new Shoot(tardi.x,tardi.y);
var mercurio = new Mercurio();
var tierra = new Tierra();
var marte = new Marte();
var venus = new Venus();
var neptuno = new Neptuno();
var bullets = [];
var star = new Star1();
var star2 = new Star2();
var star3 = new Star3();
var star4 = new Star4();

function Board() {
  this.x = 0;
  this.y = 0;
  this.width= canvas.width;
  this.height= canvas.height;
  this.img = new Image();
  this.img.src = "images/cosmos-universo-estrellas.jpg";
  this.score = 0;
  this.music = new Audio();
  this.music.src = "http://66.90.93.122/ost/dueling-ages-the-sonic-time-twisted-original-soundtrack/esjerwoc/30%20-%20Enter%20Galacnik.mp3";

  this.img.onload = function(){
    this.draw();
    }.bind(this);

  this.move = function(){
      this.x -= 3;
      if (this.x < -canvas.width) this.x = 0;
    }


  this.draw = function(){
      this.move();
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
      ctx.drawImage(this.img,this.x + canvas.width ,this.y,this.width,this.height);
    }
  
}

function Tardigrado(){

  this.x = 40;
  this.y = 350;
  this.width = 100;
  this.height = 80;
  this.move = false;
  this.img = new Image();
  this.img.src = "images/tardigradopro.png";

    this.img.onload = function(){
      this.draw();
    }.bind(this);
  
this.draw = function(){
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }

  this.moveUp = function(){
    this.y -= 20; 
  }
  this.moveDown = function(){
    this.y += 20;
  }
  this.moveLeft = function(){
    
    this.x -= 10;
  }
  this.moveRight = function(){
    this.x += 10;
  }
}

function Shoot(x,y){
  this.x = x; 
  this.y = y;
  this.width = 20;
  this.height = 20;
  this.move = false;
  this.img = new Image();
  this.img.src = "images/bola de fuego.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  
    this.draw = function(){
      if(this.move) this.x += 10;
      ctx.drawImage(this.img,this.x + 55,this.y + 5,this.width,this.height);
    }
    this.moveUp = function(){
      if(!this.move) this.y -= 20; 
    }
    this.moveDown = function(){
      if(!this.move) this.y += 20;
    }
    this.moveLeft = function(){
      this.x -= 10;
    }
    this.moveRight = function(){
      this.x += 10;
    }
  
}
//function generateShoots(){
 // var shoot1 = shoot();
 // var shoot2 = shoot();
  //arrayShoots.push(shoot1);
  //arrayShoots.push(shoot2);
//}
function createShoots(){
  bullets.push(new Shoot(tardi.x,tardi.y));  
  }



function Mercurio(){
  this.x = canvas.width + widthRandom;
  this.y = 200;
  this.width = 100;
  this.height = 100;
  this.img = new Image();
    this.img.src = "images/mercurio.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 1.6;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 500 )
      this.x = canvas.width + randomX;
      this.y = randomY;
    }
  }
}
function Tierra(){
  this.x = canvas.width + widthRandom;
  this.y = 300;
  this.width = 100;
  this.height = 100;
  this.img = new Image();
    this.img.src = "images/tierra.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 1;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 190 )
      this.x = canvas.width + randomX;
      this.y = randomY;  
    }
  }
}
function Marte(){
  this.x = canvas.width + widthRandom;
  this.y = 100;
  this.width = 100;
  this.height = 100;
  this.img = new Image();
    this.img.src = "images/marte.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 1.4;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 450 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
  }
}
function Venus(){
  this.x = canvas.width + 20;
  this.y = 400;
  this.width = 100;
  this.height = 100;
  this.img = new Image();
    this.img.src = "images/venus.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 1.5;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 450 )
      this.x = canvas.width + randomX;
      this.y = randomY;

    }
  }
}
function Neptuno(){
  this.x = canvas.width + 1;
  this.y = 500;
  this.width = 100;
  this.height = 100;
  this.img = new Image();
    this.img.src = "images/neptuno.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 1.3;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
  }
}
function Star1(){
  this.x = canvas.width + 1;
  this.y = 400;
  this.width = 25;
  this.height = 25;
  this.img = new Image();
    this.img.src = "images/Star.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 6;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
  }
}
function Star2(){
  this.x = canvas.width + 1;
  this.y = 600;
  this.width = 25;
  this.height = 25;
  this.img = new Image();
    this.img.src = "images/Star.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 6;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
  }
}

function Star3(){
  this.x = canvas.width + 1;
  this.y = 600;
  this.width = 25;
  this.height = 25;
  this.img = new Image();
    this.img.src = "images/Star.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 6;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 500 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
  }
}
function Star4(){
  this.x = canvas.width + 1;
  this.y = 600;
  this.width = 25;
  this.height = 25;
  this.img = new Image();
    this.img.src = "images/Star.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 6;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 600 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
  }
}


function generatePlanets(){

  mercurio.draw();
  tierra.draw();
  marte.draw();
  venus.draw();
  neptuno.draw();
  star.draw();
  star2.draw();
  star3.draw();
  star4.draw();
  
}




function start(){

  if( intervalo > 0 ) return;
  
  intervalo = setInterval(function(){
    update();
  },1000 / 60 ); 
  


}

function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  board.draw();
  generatePlanets();
  bullets.forEach((bullet) => {
    bullet.draw();
    bullet.move = true;
  });
  tardi.draw();
  
  
}

addEventListener("keydown",function(e){
  if(e.keyCode === 13){
    console.log("el enter si sirve");  
    start();
  }
  
  if(e.keyCode === 82 ){
    start();
  }

  if(e.keyCode === 38 && tardi.y > 9.9999 ){
    tardi.moveUp();
    shoot.moveUp();
  }

  if(e.keyCode === 40 && tardi.y < 620 ){
    tardi.moveDown();
    shoot.moveDown();
  }

  if(e.keyCode === 37 && tardi.x > 0 ){
    tardi.moveLeft();
    shoot.moveLeft();
  }

  if(e.keyCode === 39 && tardi.x < 300){
    tardi.moveRight();
    shoot.moveRight();
  }
  if(e.keyCode === 32 ){
    createShoots();
    
   }
})