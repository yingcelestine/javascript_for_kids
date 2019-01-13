class Ball1 {
    constructor(context, x, y, radius, xSpeed, ySpeed, fillCircle) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.fillCircle = fillCircle;
        this.ctx = context;
    };
    draw() {
        this.ctx.fillStyle = "Pink";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, this.fillCircle);
        if (this.fillCircle) {
            this.ctx.fill()
        } else {
            this.ctx.stroke();
        }
    };
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x - this.radius < 0) {
            this.x = width - this.radius;
        }
        if (this.x + this.radius > width) {
            this.x = this.radius;
        }
        if (this.y - this.radius < 0) {
            this.y = height - this.radius
        }
        if (this.y + this.radius > height) {
            this.y = this.radius;
        }
    };
    setOrder(order) {
        if (order === "up") {
            // this.ySpeed -= 1;
            // this.y -= 1;
            this.xSpeed = 0;
            if (this.ySpeed === 0) {
                this.ySpeed = -3;
                return;
            }
            if (this.ySpeed > 0) {
                this.ySpeed = -this.ySpeed;
            }
        }
        if (order === "down") {
            this.xSpeed = 0;
            if (this.ySpeed === 0) {
                this.ySpeed = 3;
                return;
            }
            if (this.ySpeed < 0) {
                this.ySpeed = -this.ySpeed;
            }
            // this.ySpeed += 1;
            // this.y += 1;
        }
        if (order === "left") {
            this.ySpeed = 0;
            if (this.xSpeed === 0) {
                this.xSpeed = -3;
                return;
            }
            if (this.xSpeed > 0) {
                this.xSpeed = -this.xSpeed;
            }
            // this.xSpeed = -this.xSpeed;
            // this.ySpeed = 0;
            // this.x -= 1;
        }
        if (order === "right") {
            this.ySpeed = 0;
            if (this.xSpeed === 0) {
                this.xSpeed = 3;
                return;
            }
            if (this.xSpeed < 0) {
                this.xSpeed = -this.xSpeed;
            }
            //this.x += 1;
            // this.xSpeed = this.xSpeed;
            // this.ySpeed = 0;
        }
        if (order === "stop") {
            this.xSpeed = 0;
            this.ySpeed = 0;
        }
        if (order === "0") {
            this.xSpeed = 0;
            this.ySpeed = 0;
        }
        if (order === "1") {
            this.xSpeed = 1;
            this.ySpeed = 1;
        }
        if (order === "2") {
            this.xSpeed = 2;
            this.ySpeed = 2;
        }
        if (order === "3") {
            this.xSpeed = 3;
            this.ySpeed = 3;
        }
        if (order === "4") {
            this.xSpeed = 4;
            this.ySpeed = 4;
        }
        if (order === "5") {
            this.xSpeed = 5;
            this.ySpeed = 5;
        }
        if (order === "6") {
            this.xSpeed = 6;
            this.ySpeed = 6;
        }
        if (order === "7") {
            this.xSpeed = 7;
            this.ySpeed = 7;
        }
        if (order === "8") {
            this.xSpeed = 8;
            this.ySpeed = 8;
        }
        if (order === "9") {
            this.xSpeed = 9;
            this.ySpeed = 9;
        }
        if (order === "slower") {
            this.xSpeed--;
            this.ySpeed--;
            if (this.xSpeed < 0) {
                this.xSpeed = 0;
            }
            if (this.ySpeed < 0) {
                this.ySpeed = 0;
            }
        }
        if (order === "faster") {
            this.xSpeed++;
            this.ySpeed++;
        }
        if (order === "smaller") {
            this.radius--;
            if (this.radius < 0) {
                return this.radius = 0.5;
            };
        }
        if (order === "bigger") {
            this.radius++;
            if (this.radius > this.width / 2) {
                return this.radius = this.width / 2;
            };
            if (this.radius > this.height / 2) {
                return this.radius = this.height / 2;
            };
        }
    };
}


