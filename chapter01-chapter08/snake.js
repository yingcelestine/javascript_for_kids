const squareSize = 30;
class Square {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.x = x;
        this.y = y;
    };
    draw() {
        this.ctx.fillStyle = "Blue";
        this.ctx.fillRect(this.x, this.y, squareSize, squareSize);
    };
};

class Apple {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.x = this.randomCoordinate();
        this.y = this.randomCoordinate();
        // this.y = 315;
        // this.x = 105;
    }
    changePosition() {
        this.x = this.randomCoordinate();
        this.y = this.randomCoordinate();
    }
    randomCoordinate() {
        return squareSize * Math.floor(Math.random() * (this.canvasWidth / squareSize - 1)) + (squareSize / 2);
    }
    draw() {
        this.ctx.fillStyle = "Green";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, squareSize / 2, 0, Math.PI * 2, true);
        this.ctx.fill();
    };
};

class Snake {
    constructor(canvas) {
        this.canvas = canvas;
        this.direction = "right";
        this.context = canvas.getContext("2d");
        this.body = [];
        let firstSquare = new Square(
            this.canvas,
            0,
            this.canvas.height / 2 - squareSize / 2
        );
        this.body.push(firstSquare);
        this.canvas.tabIndex = 1; // very important, without this, the event listener will not work!
        this.canvas.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft" && this.direction != "right") {
                this.direction = "left";
                return;
            }
            // todo: disallow 180 degree change
            if (event.key === "ArrowUp" && this.direction != "down") {
                this.direction = "up";
                return;
            }
            if (event.key === "ArrowRight" && this.direction != "left") {
                this.direction = "right";
                return;
            }
            if (event.key === "ArrowDown" && this.direction != "up") {
                this.direction = "down";
                return;
            }
        })
    };
    draw() {
        for (let square of this.body) {
            square.draw();
        }
    };
    expand() {
        if (this.direction === "right") {
            let square = new Square(
                this.canvas,
                this.body[this.body.length - 1].x + squareSize,
                this.body[this.body.length - 1].y
            );
            this.body.push(square);
            return;
        }
        if (this.direction === "left") {
            let square = new Square(
                this.canvas,
                this.body[this.body.length - 1].x - squareSize,
                this.body[this.body.length - 1].y
            );
            this.body.push(square);
            return;
        }
        if (this.direction === "up") {
            let square = new Square(
                this.canvas,
                this.body[this.body.length - 1].x,
                this.body[this.body.length - 1].y - squareSize,
            );
            this.body.push(square);
            return;
        }

        if (this.direction === "down") {
            let square = new Square(
                this.canvas,
                this.body[this.body.length - 1].x,
                this.body[this.body.length - 1].y + squareSize,
            );
            this.body.push(square);
            return;
        }
    };
    deleteTail() {
        this.body.shift();
    };
    move() {
        this.expand();
        this.deleteTail();
    }

    head() {
        return this.body[this.body.length - 1];
    }

    headX() {
        return this.body[this.body.length - 1].x;
    }

    headY() {
        return this.body[this.body.length - 1].y;
    }
}

class Poison {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.x = squareSize * Math.floor(Math.random() * (this.canvasWidth / squareSize - 1)) + (squareSize / 2);
        this.y = squareSize * Math.floor(Math.random() * (this.canvasWidth / squareSize));
    }
    changePosition() {
        this.x = squareSize * Math.floor(Math.random() * (this.canvasWidth / squareSize - 1)) + (squareSize / 2);
        this.y = squareSize * Math.floor(Math.random() * (this.canvasWidth / squareSize - 1));
    }

    draw() {
        this.ctx.fillStyle = "Pink";
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x + squareSize * 0.5, this.y + squareSize * 0.5);
        this.ctx.lineTo(this.x, this.y + squareSize);
        this.ctx.lineTo(this.x - squareSize * 0.5, this.y + squareSize * 0.5);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.fill();
    }
}



class Game {
    constructor() {
        this.canvas = document.getElementById("canvas_snake");
        this.snake = new Snake(this.canvas);
        this.apple = new Apple(this.canvas);
        this.poison = new Poison(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.score = 0;
    }

    start() {
        this.snake.expand();
        this.snake.expand();
        this.snake.context.strokeRect(0, 0, 630, 630);
        this.intervalId = setInterval(() => {
            if (this.snakeOnWall()) {
                this.gameOver("Game Over!");
                return;
            }
            if (this.snakeSuicide()) {
                this.gameOver("Game Over!");
                return;
            }

            this.snake.context.clearRect(1, 1, 628, 628);
            this.apple.draw();
            this.snake.draw();
            this.drawScore();
            this.poison.draw();
            if (this.snakeOnApple()) {
                this.snake.expand();
                this.addScore();
                this.poison.changePosition();
                this.apple.changePosition();
            } else if (this.snakeOnPoison()) {
                this.gameOver("Game Over!");
                return;
            } else {
                this.snake.move();
            }
        }, 200);



    }

    drawScore() {
        this.ctx.font = "20px Courier";
        this.ctx.fillStyle = "Black";
        this.ctx.textAlign = "left";
        this.textBaseline = "top";
        this.ctx.fillText("score:" + this.score, squareSize, squareSize);
    }

    // returns a boolean.
    snakeOnApple() {
        if (this.snake.direction === "right") {
            return (this.snake.headX() + squareSize * 1.5) === this.apple.x &&
                (this.snake.headY() + squareSize * 0.5) === this.apple.y;
        }
        if (this.snake.direction === "left") {
            return (this.snake.headX() - squareSize * 0.5) === this.apple.x &&
                (this.snake.headY() + squareSize * 0.5) === this.apple.y;
        }
        if (this.snake.direction === "up") {
            return (this.snake.headX() + squareSize * 0.5) === this.apple.x &&
                (this.snake.headY() - squareSize * 0.5) === this.apple.y;
        }
        if (this.snake.direction === "down") {
            return (this.snake.headX() + squareSize * 0.5) === this.apple.x &&
                (this.snake.headY() + squareSize * 1.5) === this.apple.y;
        }
    }

    snakeOnPoison() {
        if (this.snake.direction === "right") {
            return (this.snake.headX() + squareSize * 1.5) === this.poison.x &&
                this.snake.headY() === this.poison.y;
        }
        if (this.snake.direction === "left") {
            return (this.snake.headX() - squareSize * 0.5) === this.poison.x &&
                this.snake.headY() === this.poison.y;
        }
        if (this.snake.direction === "up") {
            return (this.snake.headX() + squareSize * 0.5) === this.poison.x &&
                (this.snake.headY() - squareSize) === this.poison.y;
        }
        if (this.snake.direction === "down") {
            return (this.snake.headX() + squareSize * 0.5) === this.poison.x &&
                (this.snake.headY() + squareSize) === this.poison.y;
        }
    }

    snakeOnWall() {
        return (this.snake.headX() < 0 || this.snake.headX() > this.canvasWidth - squareSize || this.snake.headY() < 0 || this.snake.headY() > this.canvasHeight - squareSize);
    }

    snakeSuicide() {
        for (let i = 0; i < this.snake.body.length - 1; i++) {
            let square = this.snake.body[i];
            if (square.x === this.snake.headX() && square.y === this.snake.headY()) {
                return true;
            }
        }
        return false;
    }

    addScore() {
        if (this.score < 50) {
            this.score++;
            this.drawScore();
        } else {
            this.gameOver("You Have Won!");
        };
    };

    stop() {
        clearInterval(this.intervalId);
    };

    gameOver(string) {
        this.stop();
        this.ctx.font = "60px Courier";
        this.ctx.fillStyle = "Red";
        this.ctx.textAlign = "center";
        this.textBaseline = "middle";
        this.ctx.fillText(string, this.canvasWidth / 2, this.canvasHeight / 2);
    }

}