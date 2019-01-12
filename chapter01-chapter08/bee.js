let position = 0;

setInterval(() => {
    ctx.clearRect(0, 400, 200, 200);
    ctx.fillRect(position, 400, 20, 20);
    position++;
    if (position > 200) {
        position = 0;
    }
}, 30);

let size = 0;
setInterval(() => {
    ctx.clearRect(0, 430, 200, 200);
    ctx.fillRect(0, 430, size, size);
    size++;
    if (size > 200) {
        size = 0;
    }
}, 30);

const circle2 = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill()
    } else {
        ctx.stroke();
    }
};
const drawBee = (x, y) => {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Gold";
    circle2(x, y, 8, true);
    circle2(x, y, 8, false);
    circle2(x - 5, y - 11, 5, false);
    circle2(x + 5, y - 11, 5, false);
    circle2(x - 2, y - 1, 2, false);
    circle2(x + 2, y - 1, 2, false);
};
drawBee(600, 250);

const update = (coordinate) => {
    let offset = Math.random() * 6 - 2;
    coordinate += offset;
    if (coordinate > 800) {
        coordinate = 600;
    }
    if (coordinate < 600) {
        coordinate = 600;
    }
    return coordinate;
};
let x = 700;
let y = 700;
setInterval(() => {
    ctx.clearRect(600, 600, 200, 200);
    drawBee(x, y);
    x = update(x);
    y = update(y);
    ctx.strokeRect(600, 600, 200, 200);
}, 30);
