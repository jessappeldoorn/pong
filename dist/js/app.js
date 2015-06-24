(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var canvas = document.getElementById("table"),
  context = canvas.getContext('2d'),
  speed = 3;


//Paddle
function Paddle(x, y, width, height, speed) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speed = speed;
};

Paddle.prototype.render = function() {
  context.fillStyle = 'yellow';
  context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.move = function(e) {
  console.log(e);
    if (e.keyCode === 38) {
      this.y = this.y - this.speed;
      context.fillRect(this.x, this.y, this.width, this.height);
   }
    if (e.keyCode === 40 ) {
      this.y = this.y + this.speed;
      context.fillRect(this.x, this.y, this.width, this.height);
   }
   e.preventDefault();
  };

//Player
function Player() {
  this.paddle = new Paddle(125, 250, 20, 100, 10);
}

Player.prototype.render = function() {
  this.paddle.render();
};

Player.prototype.move = function(e) {
  this.paddle.move(e);
};

//Computer
function Computer() {
  this.paddle = new Paddle(650, 250, 20, 100, 10);
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
    context.fillStyle = '#795577' 
    context.fillRect(100, 100, 600, 400);
    player.render();
    computer.render();
    ball.render();
  };

  var move = function(e) {
    console.log('move function triggered');
      player.move(e);
  
  };
      
  //prepare for animation
 var step = function() {
    render();
    animate(step, 1000/60);
  };

  var animate = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     ||
        step(); { window.setTimeout(step, 1000/60) };

  window.addEventListener("load", step);
  window.addEventListener("keydown", move, false);




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
    


},{}]},{},[1]);