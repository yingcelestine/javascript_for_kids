const circle1 = (x, y, radius, fillCircle) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill()
    } else {
        ctx.stroke();
    }
};

ctx.lineWidth = 4;
ctx.fillStyle = "Red";
circle1(450, 215, 5, true);
ctx.strokeStyle = "gray";
circle1(450, 200, 45, false);
circle1(450, 315, 70, false);
ctx.fillStyle = "Black";
circle1(430, 195, 5, true);
circle1(470, 195, 5, true);
circle1(450, 280, 5, true);
circle1(450, 315, 5, true);
circle1(450, 350, 5, true);

const drawSnowman = (x, y) => {
    let a1 = x - 20;
    let a2 = x + 20;
    let b1 = y - 100;
    let b2 = y - 115;
    let b3 = y - 120;
    let b4 = y - 35;
    let b5 = y + 35;
    const cir = (a, b, radius, fillCircle) => {
        ctx.beginPath();
        ctx.arc(a, b, radius, 0, Math.PI * 2, false);
        if (fillCircle) {
            ctx.fill()
        } else {
            ctx.stroke();
        }
    };

    ctx.lineWidth = 4;
    ctx.fillStyle = "Red";
    cir(x, b1, 5, true);
    ctx.strokeStyle = "gray";
    cir(x, b2, 45, false);
    cir(x, y, 70, false);
    ctx.fillStyle = "Black";
    cir(a1, b3, 5, true);
    cir(a2, b3, 5, true);
    cir(x, b4, 5, true);
    cir(x, y, 5, true);
    cir(x, b5, 5, true);
};
drawSnowman(500, 500);
