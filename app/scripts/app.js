function drawBoard() {
  var b_canvas = document.getElementById("pongBoard");
  var b_context = b_canvas.getContext("2d");
  b_context.strokeStyle="#795577";
  b_context.strokeRect(100, 100, 600, 400);
};

drawBoard();

var player = new Object();

player.render = function() {
  var paddleOne = document.getElementById("pongBoard");
  var paddleOne_context = paddleOne.getContext("2d");
  paddleOne_context.fillStyle = 'yellow';
  paddleOne_context.fillRect(125, 250, 20, 100);
};
player.render();

var computer = new Object();

computer.render = function() {
  var paddleTwo = document.getElementById("pongBoard");
  var paddleTwo_context = paddleTwo.getContext("2d");
  paddleTwo_context.fillStyle = 'yellow';
  paddleTwo_context.fillRect(650, 250, 20, 100);
};
computer.render();

var ball = new Object();

ball.render = function() {
  var target = document.getElementById("pongBoard");
  var target_context = target.getContext("2d");
  target_context.fillStyle = 'cyan';
  target_context.fillRect(390, 290, 20, 20);
};
ball.render();





  context.beginPath();
  context.moveTo(500, 0);
  context.lineTo(500, 700);
  context.strokeStyle = "#000000";
  context.stroke();
    

