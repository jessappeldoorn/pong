var canvas = document.getElementById("table"),
  context = canvas.getContext('2d');

//Paddle
function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

Paddle.prototype.render = function() {
  context.fillStyle = 'yellow';
  context.fillRect(this.x, this.y, this.width, this.height);
};

//Player
function Player() {
  this.paddle = new Paddle(125, 250, 20, 100);
}

Player.prototype.render = function() {
  this.paddle.render();
};

//Computer
function Computer() {
  this.paddle = new Paddle(650, 250, 20, 100);
}

Computer.prototype.render = function() {
  this.paddle.render();
};

//Ball
function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 10;
}

Ball.prototype.render = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
  context.fillStyle = "cyan";
  context.fill();
};

//adding elements from constructors
var player = new Player(),
  computer = new Computer(),
  ball = new Ball(390, 290);

  var render = function() {
    context.strokeStyle = '#795577' 
    context.strokeRect(100, 100, 600, 400);
    player.render();
    computer.render();
    ball.render();
  }

  window.addEventListener("load", render);



// function drawBoard() {
//   var b_canvas = document.getElementById("pongBoard");
//   var b_context = b_canvas.getContext("2d");
//   b_context.strokeStyle="#795577";
//   b_context.strokeRect(100, 100, 600, 400);
// };

// drawBoard();

// var Player = new Object();

// player.render = function() {
//   var paddleOne = document.getElementById("pongBoard");
//   var paddleOne_context = paddleOne.getContext("2d");
//   paddleOne_context.fillStyle = 'yellow';
//   paddleOne_context.fillRect(125, 250, 20, 100);
// };
// player.render();

// var Computer = new Object();

// computer.render = function() {
//   var paddleTwo = document.getElementById("pongBoard");
//   var paddleTwo_context = paddleTwo.getContext("2d");
//   paddleTwo_context.fillStyle = 'yellow';
//   paddleTwo_context.fillRect(650, 250, 20, 100);
// };
// computer.render();

// var ball = new Object();

// ball.render = function() {
//   var target = document.getElementById("pongBoard");
//   var target_context = target.getContext("2d");
//   target_context.fillStyle = 'cyan';
//   target_context.fillRect(390, 290, 20, 20);
// };
// ball.render();





//   context.beginPath();
//   context.moveTo(500, 0);
//   context.lineTo(500, 700);
//   context.strokeStyle = "#000000";
//   context.stroke();
    

