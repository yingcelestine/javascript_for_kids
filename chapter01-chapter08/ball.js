class Ball {
    constructor(canvas, x, y, radius, xSpeed, ySpeed) {
        this.ctx = canvas.getContext("2d");
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.colors = ["Red", "Pink", "Skyblue", "Green", "Blue", "Orange", "Purple", "Yellow"];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
    draw(fillCircle) {

        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        if (fillCircle) {
            this.ctx.fill()
        } else {
            this.ctx.stroke();
        }
    };
    move() {
        this.checkCollision();
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    changeSpeed(speed) {
        return (-speed) * Math.random() * 2;
    }
    checkCollision() {
        if (this.x < this.radius) {
            this.x = this.radius;
            this.xSpeed = this.changeSpeed(this.xSpeed);
        } else if (this.x > 1000 - this.radius) {
            this.x = 1000 - this.radius;
            this.xSpeed = this.changeSpeed(this.xSpeed);
        };
        if (this.y < this.radius) {
            this.y = this.radius;
            this.ySpeed = this.changeSpeed(this.ySpeed);
        } else if (this.y > 1000 - this.radius) {
            this.y = 1000 - this.radius;
            this.ySpeed = this.changeSpeed(this.ySpeed);
        }
    }
};

