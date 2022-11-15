
var myGamePiece;

function startGame() {
    myGameArea.start();
    redGamePiece = new component(75, 75, "red", 30, 10);
    yellowGamePiece = new component(75, 75, "yellow", 30, 100);
    blueGamePiece = new component(75, 75, "blue", 30, 180);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.xDirection = 1;
    this.yDirection = 1;
    this.update = function() {
     ctx = myGameArea.context;
       ctx.fillStyle = color;
       ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
  myGameArea.clear();

  if (redGamePiece.x >= (myGameArea.canvas.width - redGamePiece.width) || redGamePiece.x <= 0)
   redGamePiece.xDirection = -redGamePiece.xDirection;

   if (redGamePiece.y >= (myGameArea.canvas.height - redGamePiece.height) || redGamePiece.y <= 0)
    redGamePiece.yDirection = -redGamePiece.yDirection;

  if (yellowGamePiece.x >= (myGameArea.canvas.width - yellowGamePiece.width) || yellowGamePiece.x <= 0)
   yellowGamePiece.xDirection = -yellowGamePiece.xDirection;

  if (yellowGamePiece.y >= (myGameArea.canvas.height - yellowGamePiece.height) || yellowGamePiece.y <= 0)
   yellowGamePiece.yDirection = -yellowGamePiece.yDirection;

  if (blueGamePiece.x >= (myGameArea.canvas.width - blueGamePiece.width) || blueGamePiece.x <= 0)
   blueGamePiece.xDirection = -blueGamePiece.xDirection;

  if (blueGamePiece.y >= (myGameArea.canvas.height - blueGamePiece.height) || blueGamePiece.y <= 0)
   blueGamePiece.yDirection = -blueGamePiece.yDirection;

  redGamePiece.x += (1 * redGamePiece.xDirection);
  //redGamePiece.y += (1 * redGamePiece.yDirection);
  yellowGamePiece.x += (1 * yellowGamePiece.xDirection);
  yellowGamePiece.y += (1 * yellowGamePiece.yDirection);
  blueGamePiece.x += (1 * blueGamePiece.xDirection);
  blueGamePiece.y += (1 * blueGamePiece.yDirection);

  redGamePiece.update();
  yellowGamePiece.update();
  blueGamePiece.update();
}
