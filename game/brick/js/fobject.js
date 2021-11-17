
__main();


function __main () {
  let myGame = MyGame();
  let board = Board();
  let bullet = Bullet();

  myGame.registerAction(["a", "ArrowLeft"], () =>  board.moveLeft());
  myGame.registerAction(["d", "ArrowRight"], () =>  board.moveRight());
  myGame.registerAction("f", () => bullet.fire());

  myGame.updata = function () {
    bullet.move();
    if (crash(bullet, board)) bullet.changeDirectionY();
  };
  myGame.drag = function () {
    myGame.draw(board);
    myGame.draw(bullet);
  };
};

function MyGame () {
  let canvas = document.querySelector("#myCanvas");
  let context = canvas.getContext("2d");
  let g = {
    canvas,
    context,
    actions: {},
    keydowns: {},
  };
  g.draw = function (gameImage) {
    g.context.drawImage(gameImage.image, gameImage.x, gameImage.y);
  };
  window.addEventListener("keydown", (e) => g.keydowns[e.key] = true );
  window.addEventListener("keyup", (e) => g.keydowns[e.key] = false );
  g.registerAction = function (key, callBack) {
    if (Array.isArray(key)) {
      for (let i = 0; i < key.length; i++) {
        g.actions[key[i]] = callBack;
      }
    } else {
      g.actions[key] = callBack;
    }
  };

  //定时器
  setInterval(() => {
    for (const key in g.actions) {
      if (g.keydowns[key]) g.actions[key]();
    }
    g.updata();
    g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
    g.drag();
  }, 1000 / 60);
  return g;
};

function Board () {
  let img = imgFromPath("./img/board.png");
  let board = {
    image: img,
    x: 100,
    y: 280,
    speed: 10,
  };
  board.moveLeft = function () {
    this.x -= this.speed;
  };
  board.moveRight = function () {
    this.x += this.speed;
  };
  return board;
};

function Bullet() {
  let img = imgFromPath("./img/bullet.png");
  let bullet = {
    image: img,
    x: 100,
    y: 240,
    speedX: -4,
    speedY: -4,
    fired: false,
    fire() {
      bullet.fired = true;
    },
    changeDirectionX() {
      this.speedX = -this.speedX;
    },
    changeDirectionY() {
      this.speedY = -this.speedY;
    },
  };

  bullet.move = function () {
    if (!bullet.fired) return;
    if (bullet.x <= 0 || bullet.x + bullet.image.width >= 400)
      this.changeDirectionX();
    if (bullet.y <= 0 || bullet.y + bullet.image.height >= 300)
      this.changeDirectionY();
    if (bullet.x >= 0 && bullet.x <= 400) {
      bullet.x += bullet.speedX;
    }
    if (bullet.y >= 0 && bullet.y <= 300) {
      bullet.y += bullet.speedY;
    }
  };
  return bullet;
};


function imgFromPath(path) {
  let img = new Image();
  img.src = path;
  return img;
}

export default function crash(rectA, rectB) {
	rectA.left = rectA.x;
	rectA.right = rectA.x + rectA.image.width;
	rectA.top = rectA.y;
	rectA.bottom = rectA.y + rectA.image.height;
	rectB.left = rectB.x;
	rectB.right = rectB.x + rectB.image.width;
	rectB.top = rectB.y;
	rectB.bottom = rectB.y + rectB.image.height;
	if ( rectA.left >= rectB.left && rectA.left <= rectB.right && rectA.top >= rectB.top && rectA.top <= rectB.bottom ) return true;
	if ( rectA.right >= rectB.left &&rectA.right <= rectB.right &&rectA.top >= rectB.top &&rectA.top <= rectB.bottom ) return true;
	if ( rectA.left >= rectB.left &&rectA.left <= rectB.right &&rectA.bottom >= rectB.top &&rectA.bottom <= rectB.bottom ) return true;
	if ( rectA.right >= rectB.left &&rectA.right <= rectB.right &&rectA.bottom >= rectB.top &&rectA.bottom <= rectB.bottom ) return true;
	if ( rectB.left >= rectA.left && rectB.left <= rectA.right && rectB.top >= rectA.top && rectB.top <= rectA.bottom ) return true;
	if ( rectB.right >= rectA.left &&rectB.right <= rectA.right &&rectB.top >= rectA.top &&rectB.top <= rectA.bottom ) return true;
	if ( rectB.left >= rectA.left &&rectB.left <= rectA.right &&rectB.bottom >= rectA.top &&rectB.bottom <= rectA.bottom ) return true;
	if ( rectB.right >= rectA.left &&rectB.right <= rectA.right &&rectB.bottom >= rectA.top &&rectB.bottom <= rectA.bottom ) return true;
	return false;
}