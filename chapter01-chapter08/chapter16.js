class Snake {
    constructor(ctx, x1, y1, xSpeed, ySpeed, radius, fillCircle) {
        this.ctx = ctx;
        this.x1 = x1;
        this.y1 = y1;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.radius = radius;
        this.x2 = this.radius + Math.floor(Math.random() * (width - 2 * radius + 1));
        this.y2 = this.radius + Math.floor(Math.random() * (width - 2 * radius + 1));
        this.fillCircle = fillCircle
    }
    draw() {
        this.ctx.fillStyle = "Blue";
        this.ctx.fillRect(this.x1, this.y1, 10, 10);
        this.ctx.fillStyle = "Green";
        this.ctx.beginPath();
        this.ctx.arc(this.x2, this.y2, this.radius, 0, Math.PI * 2, this.fillCircle);
        if (this.fillCircle) {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }
    };
    move() {
        this.x1 += this.xSpeed;

    };

    setDirection(direction) {
        if (this.x1 < 0 || this.x1 + 10 > width || this.y1 < 0 || this.y1 + 10 > height) {
            console.log("Game is over!")
            return;
        }
        if (direction === "left") {
            this.xSpeed = -1;
        }
        if (direction === "right") {
            this.x1++;
        }
        if (direction === "up") {
            this.y1--;
            this.ySpeed = -this.ySpeed;
        }
        if (direction === "down") {
            this.y1++;
        }
    };
    update() {
        if (score < 50) {
            if (this.x1 - this.radius === this.x2 && this.y1 + this.radius === this.y2) {
                score += 1;
                this.xSpeed = -this.xSpeed;
                this.x2;
                this.y2;
                new Snake(ctx, this.x1 - 1, this.y1, this.xSpeed, this.ySpeed, this.radius, true);
            }
            if (this.x1 + 10 + this.radius === this.x2 && this.y1 + this.radius === this.y2) {
                score += 1;
                this.x2;
                this.y2;
                new Snake(ctx, this.x1 + 1, this.y1, this.xSpeed, this.ySpeed, this.radius, true);
            }
            if (this.x1 + this.radius === this.x2 && this.y1 + 10 + this.radius === this.y2) {
                score += 1;
                this.x2;
                this.y2;
                new Snake(ctx, this.x1, this.y1 + 1, this.xSpeed, this.ySpeed, this.radius, true);
            }
            if (this.x1 + this.radius === this.x2 && this.y1 - this.radius === this.y2) {
                score += 1;
                this.x2;
                this.y2;
                this.ySpeed = -this.ySpeed;
                new Snake(ctx, this.x1, this.y1 - 1, this.xSpeed, this.ySpeed, this.radius, true);
            }
        } else {
            console.log("Congratulations!")
            return;
        }
    };
}