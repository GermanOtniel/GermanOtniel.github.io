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
var planets =[mercurio, tierra, marte, venus, neptuno]
var bullets = [];
var star = new Star1();
var star2 = new Star2();
var star3 = new Star3();
var star4 = new Star4();
var frames = 0;
var numRandom = Math.floor(Math.random() * 13);
var randomXx = Math.floor(Math.random() * 800 );
var stars =[star,star2,star3,star4];
var music2 = board.music;
var pantalla1 = new PantallaInicial();
var scorePlanets;
var scoreStars;
var started = false;
var allowR = false; 
var scorePlanetsDos;
var scoreStarsDos;
var playerTwo = false;
var final = false;
var resultado = false;


function Board() {
  scorePlanets = 0;
  scoreStars = 0;
  scorePlanetsDos = 0;
  scoreStarsDos = 0;
  
  this.x = 0;
  this.y = 0;
  this.width= canvas.width;
  this.height= canvas.height;
  this.img = new Image();
  this.img.src = "images/cosmos-universo-estrellas.jpg";
  this.time = 40;
  this.time2 = 60;
  this.music = new Audio();
  this.music.src = "tardigame.mp3";

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
  this.drawScorePlanets = function(){
    ctx.font = "15px 'Press Start 2P'"
    ctx.fillStyle = "yellow"
    ctx.fillText("Player 1:",1000,530);
    ctx.font = "25px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText("Planets: " + scorePlanets,1000,560);
  }
  this.drawScoreStars = function(){
    ctx.font = "25px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText("Stars: " + scoreStars ,1000,590);
  }
  this.drawTime = function(){
     if(frames % 60 === 0 && this.time >= 1 ) this.time--;
    ctx.font = "50px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText(this.time,560,585);
  }
  //SCORE PLAyer 2

  this.drawScorePlanets2 = function(){
    ctx.font = "15px 'Press Start 2P'"
    ctx.fillStyle = "yellow"
    ctx.fillText("Player 2:",20,530);
    ctx.font = "25px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText("Planets: " + scorePlanetsDos ,20,560);
  }
  this.drawScoreStars2 = function(){
    ctx.font = "25px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText("Stars: " + scoreStarsDos ,20,590);
  }
  this.drawTime2 = function(){
     if(frames % 60 === 0 && this.time2 >= 1 ) this.time2--;
    ctx.font = "50px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText(this.time2,250,585);
  }
}
function PantallaInicial(){
  this.x = 600;
  this.y = 300;
  this.cont = 3;
  this.draw = function(){
  if(frames % 60 === 0 && this.cont >= 1 ) this.cont--;
  ctx.font = "30px 'Press Start 2P'"
  ctx.fillStyle = "yellow"
  ctx.fillText("Player 1: Are you ready?",this.x - 350,this.y);
  ctx.font = "20px 'Press Start 2P'"
  ctx.fillText(this.cont,this.x,this.y + 50);
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
  this.isTouching = function(star){
    return(this.x < star.x + star.width) && (this.x + this.width > star.x) && (this.y < star.y + star.height) && (this.y + this.height > star.y);
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
      if(this.move) this.x += 5;
      ctx.drawImage(this.img,this.x + 55,this.y + 5,this.width,this.height);
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
  this.isTouching = function(planet){
    return(this.x < planet.x + planet.width) && (this.x + this.width > planet.x) && (this.y < planet.y + planet.height) && (this.y + this.height > planet.y);
  }
}
function createShoots(){
  bullets.push(new Shoot(tardi.x,tardi.y));  
  }
function Mercurio(){
  this.x = canvas.width + widthRandom;
  this.y = 200;
  this.width = 100;
  this.height = 100;
  this.num = Math.floor(Math.random() * 6 + 3 );
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
    ctx.font = "30px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(this.num,this.x + 40,this.y + 60);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 450 )
      this.x = canvas.width + randomX;
      this.y = randomY;
    }
    this.redraw = function(){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      this.num = Math.floor(Math.random() * 6 + 3 );
    }
  }
}
function Tierra(){
  this.x = canvas.width + widthRandom;
  this.y = 300;
  this.width = 100;
  this.height = 100;
  this.num = Math.floor(Math.random() * 6 + 3 );
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
    ctx.font = "30px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(this.num,this.x + 40,this.y + 60);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 500 )
      this.x = canvas.width + randomX;
      this.y = randomY;
    }
    this.redraw = function(){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      this.num = Math.floor(Math.random() * 6 + 3 );
    }
  }
}

function Marte(){
  this.x = canvas.width + widthRandom;
  this.y = 100;
  this.width = 100;
  this.height = 100;
  this.num = Math.floor(Math.random() * 6 + 3 );
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
    ctx.font = "30px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(this.num,this.x + 40,this.y + 60);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 380 )
      this.x = canvas.width + randomX;
      this.y = randomY;
    }
    this.redraw = function(){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      this.num = Math.floor(Math.random() * 6 + 3 );
    }
  }
}
function Venus(){
  this.x = canvas.width + 20;
  this.y = 400;
  this.width = 100;
  this.height = 100;
  this.num = Math.floor(Math.random() * 6 + 3 );
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
    ctx.font = "30px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(this.num,this.x + 40,this.y + 60);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 500 )
      this.x = canvas.width + randomX;
      this.y = randomY;
    }
    this.redraw = function(){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      this.num = Math.floor(Math.random() * 6 + 3 );
    }
  }
}
function Neptuno(){
  this.x = canvas.width + 1;
  this.y = 500;
  this.width = 100;
  this.height = 100;
  this.num = Math.floor(Math.random() * 6 + 3 );
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
    ctx.font = "30px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(this.num,this.x + 40,this.y + 60);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 600 )
      this.x = canvas.width + randomX;
      this.y = randomY;
    }
  this.redraw = function(){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      this.num = Math.floor(Math.random() * 6 + 3 );
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
      var randomY = Math.floor(Math.random() * 600 )
      this.x = canvas.width + randomX;
      this.y = randomY;
    }
  }
  this.redraw = function(){
    var randomX = Math.floor(Math.random() * 800 );
    var randomY = Math.floor(Math.random() * 600 )
    this.x = canvas.width + randomX;
    this.y = randomY;
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
      var randomY = Math.floor(Math.random() * 600 )
      this.x = canvas.width + randomX;
      this.y = randomY;
    }
  }
  this.redraw = function(){
    var randomX = Math.floor(Math.random() * 800 );
    var randomY = Math.floor(Math.random() * 600 )
    this.x = canvas.width + randomX;
    this.y = randomY;
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
    if(this.x < 0 ){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 600 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
  }
  this.redraw = function(){
    var randomX = Math.floor(Math.random() * 800 );
    var randomY = Math.floor(Math.random() * 600 )
    this.x = canvas.width + randomX;
    this.y = randomY;
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
  this.redraw = function(){
    var randomX = Math.floor(Math.random() * 800 );
    var randomY = Math.floor(Math.random() * 600 )
    this.x = canvas.width + randomX;
    this.y = randomY;
  }
}
function generatePlanets(){
  planets.forEach((planet)=>{
  planet.draw()
})

stars.forEach((star)=>{
  star.draw()
})
   
}
function start(){
if (!started ){
  board.music.play();
  started = true;
   
  intervalo = setInterval(function(){
    console.log("aun corro")
    update();
    
    
  },1000 / 60 ); 
}
}
function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  board.draw();
  frames ++;
  generatePlanets();
  bullets.forEach((bullet, indexB) => {
    bullet.draw();
    console.log(planets)
    planets.forEach((planet, indexP) => {
      if(bullet.isTouching(planet) && !playerTwo ){
        bullets.splice(indexB,1);
        console.log("collision")
        planets[indexP].num--;
        if (planets[indexP].num<=0 ){
          planets[indexP].redraw();
          scorePlanets+=1;
          
        } 
      }
      if(bullet.isTouching(planet) && playerTwo ){
        bullets.splice(indexB,1);
        console.log("collision")
        planets[indexP].num--;
        if (planets[indexP].num<=0 && playerTwo ){
          planets[indexP].redraw();
          scorePlanetsDos+=1;
          
        }
      }
    })
    bullet.move = true;
  });
  stars.forEach((star,index) =>{
    if(tardi.isTouching(star,1) && !playerTwo ){
      console.log("estoy tocando una estrella");
      stars[index].redraw();
      scoreStars+=1;

    }
    if(tardi.isTouching(star,1) && playerTwo ){
      console.log("estoy tocando una estrella");
      stars[index].redraw();
      scoreStarsDos+=1;

    }
    
  })
  board.drawScorePlanets();
  board.drawScoreStars();
  board.drawTime();
  tardi.draw();
  board.drawScorePlanets2();
  board.drawScoreStars2();
  TimeAgotado();
  
}
function pause(){
  clearInterval(intervalo);
  board.music.pause();
}

function reload(){
  window.location.reload(true);
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", reload);



addEventListener("keydown",function(e){
 
  if(e.keyCode === 13){
    console.log("el enter si sirve");
      start();
    }
  if(e.keyCode === 82 ){
    if (allowR){
      allowR = false;
      reStart();
    }
  }
if(e.keyCode === 38 && tardi.y > 9.9999 ){
  e.preventDefault();
    tardi.moveUp();
    shoot.moveUp();
  }
if(e.keyCode === 40 && tardi.y < 550 ){
  e.preventDefault();
    tardi.moveDown();
    shoot.moveDown();
  }
if(e.keyCode === 37 && tardi.x > 0 ){
  e.preventDefault();
    tardi.moveLeft();
    shoot.moveLeft();
  }
if(e.keyCode === 39 && tardi.x < 300){
  e.preventDefault();
    tardi.moveRight();
    shoot.moveRight();
  }
if(e.keyCode === 32 ){
    createShoots();
  }
})
function notificacion(){
  ctx.font = "70px 'Press Start 2P'";
  ctx.fillStyle = "yellow";
  ctx.fillText("Time Up", 380, 200 );
  ctx.font = "40px 'Press Start 2P'";
  ctx.fillText("Player 2 , ¡you're the Next!",40,300 );
  ctx.font = "30px 'Press Start 2P'";
  ctx.fillText("Press 'R' to Start",350,400 );
  resultado = true;
  neptuno.x = canvas.width + widthRandom;
  venus.x = canvas.width + widthRandom;
  marte.x = canvas.width + widthRandom;
  tierra.x = canvas.width + widthRandom;
  mercurio.x = canvas.width + widthRandom;
  star.x = canvas.width + widthRandom;
  star2.x = canvas.width + widthRandom;
  star3.x = canvas.width + widthRandom;
  star4.x = canvas.width + widthRandom;
}
function notificacionWinner(){
  
  if(scorePlanets + scoreStars > scorePlanetsDos + scoreStarsDos ){

  ctx.font = "50px 'Press Start 2P'";
  ctx.fillStyle = "yellow";
  ctx.fillText("¡Player 1...You Won!", 95, 300 );
  ctx.font = "40px 'Press Start 2P'";
  ctx.fillText("Push Reload for a New Game", 80, 350 );
}
  else if( scorePlanetsDos + scoreStarsDos > scorePlanets + scoreStars ){
  ctx.font = "50px 'Press Start 2P'";
  ctx.fillStyle = "yellow";
  ctx.fillText("¡Player 2...You Won!", 95, 300 );
  ctx.font = "40px 'Press Start 2P'";
  ctx.fillText("Push Reload for a New Game", 80, 350 );
  }
  else if( scorePlanetsDos + scoreStarsDos === scorePlanets + scoreStars ){
  ctx.font = "50px 'Press Start 2P'";
  ctx.fillStyle = "yellow";
  ctx.fillText("¡It's a Tie, Try Again!", 20, 300 );
  ctx.font = "40px 'Press Start 2P'";
  ctx.fillText("Push Reload for the Rematch", 60, 350 );
  }
}
function TimeAgotado(){
  if(board.time === 0 && !final ) {
    final = true;
    notificacion();
    pause();
    
    allowR = true;
    playerTwo = true;
    
  }
  else if(board.time === 0 && resultado ){
   
    pause();
    notificacionWinner();
  }
}
function start2(){
  started = false;
  start();
  tardi.y = 350;
  bullets = [];
  board.time = 40;
  }
function reStart(){
    start2();
}
