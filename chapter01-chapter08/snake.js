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
    }
}

class Snake {
    constructor(canvas) {
        this.direction = "right";
        this.canvas = canvas;
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
            if (event.key === "ArrowLeft") {
                this.direction = "left";
                return;
            }
            if (event.key === "ArrowUp") {
                this.direction = "up";
                return;
            }
            if (event.key === "ArrowRight") {
                this.direction = "right";
                return;
            }
            if (event.key === "ArrowDown") {
                this.direction = "down";
                return;
            }
        })

    }
    draw() {
        for (let square of this.body) {
            square.draw();
        }
    }
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
    }
    deleteTail() {
        this.body.shift();
    }
}