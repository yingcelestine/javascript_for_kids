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
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, this.fillCircle);
        if (this.fillCircle) {
            ctx.fill()
        } else {
            ctx.stroke();
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
    setDirection(direction) {
        if (direction === "up") {
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
        if (direction === "down") {
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
        if (direction === "left") {
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
        if (direction === "right") {
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
        if (direction === "stop") {
            this.xSpeed = 0;
            this.ySpeed = 0;
        }
    };
}


