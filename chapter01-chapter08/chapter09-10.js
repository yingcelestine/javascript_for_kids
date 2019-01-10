
/* 
headingElement = document.getElementById("main-heading");
 console.log(headingElement.innerHTML);
 let newHeadingText = prompt("Please provide a new heading:");
 headingElement.innerHTML = newHeadingText;
 
let newHeadingText = prompt("Please provide a new heading:");
$("#main-heading").text(newHeadingText);
$("body").append("<p>This is a new paragraph</p>");
for (let i = 0; i < 3; i++) {
    let hobby = prompt("Tell me one of your hobbies");
    $("body").append("<p>" + hobby + "</p>");
};
//$("h1").fadeOut(3000);
//$("h1").text("This will fade out").fadeOut(5000);
$("h1").fadeOut(10000).fadeIn(2000);
$("h1").slideUp(10000).slideDown(1000);
 */
/*
let array = ["John", "Lily", "Bill", "Tom"];
for (let i in array) {
   $("body").append("<p>" + array[i] + "</p>");
};
$("#main-heading").text("My friends");
$("h1").hide(2000).fadeIn(3000);
$("p").append(" smells!");
for (let i = 0, j = 1000; i < 6; i++ , j += 1000) {
   $("#main-heading").fadeOut(j).fadeIn(j);
};
$("body").append("<h2>" + "Please keep a secret." + "</h2>");
$("h2").delay(5000).fadeOut(2000).fadeIn(2000);
$("p").fadeTo(2000, 0.5);
 
let leftOffset = 1;
let moveHeading = function () {
    $("#main-heading").offset({ left: leftOffset });
    leftOffset *= 2;
    if (leftOffset > 200) {
        leftOffset = 0;
    }
};
setInterval(moveHeading, 100);
const clickHandler = function (event) {
    console.log("Click! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHandler);

$("html").click(function (event) {
    $("#main-heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});
*/
/*let leftOffset1 = 0;
let topOffset = 0;
let moveDirection = "right";
const moveHeading1 = () => {
    $("#main-heading").offset({
        left: leftOffset1,
        top: topOffset
    });
    if (topOffset === 0 && leftOffset1 === 0) {
        leftOffset1++;
        return;
    }

    if (topOffset === 0 && leftOffset1 > 0 && leftOffset1 < 200) {
        leftOffset1++;
        return;
    }

    if (topOffset === 0 && leftOffset1 === 200) {
        topOffset++;
        return;
    }

    if (topOffset > 0 && topOffset < 200 && leftOffset1 === 200) {
        topOffset++;
        return;
    }

    if (topOffset === 200 && leftOffset1 === 200) {
        leftOffset1--;
        return;
    }

    if (topOffset === 200 && leftOffset1 > 0 && leftOffset1 < 200) {
        leftOffset1--;
        return;
    }

    if (topOffset === 200 && leftOffset1 === 0) {
        topOffset--;
        return;
    }

    if (topOffset > 0 && topOffset < 200 && leftOffset1 === 0) {
        topOffset--;
        return;
    }
*/

/*
if (leftOffset1 == 200 && topOffset === 0) {
    moveDirection = "down";
} else if (leftOffset1 === 200 && topOffset === 200) {
    moveDirection = "left";
} else if (leftOffset1 === 0 && topOffset === 200) {
    moveDirection = "up";
} else if (leftOffset1 === 0 && topOffset === 0) {
    moveDirection = "right";
}
if (moveDirection === "right") {
    leftOffset1++;
} else if (moveDirection === "down") {
    topOffset++;
} else if (moveDirection === "left") {
    leftOffset1--;
} else {
    topOffset--;
}   
};
*/
class Moving {
    constructor(obj, width, height) {
        this.obj = obj;
        this.width = width;
        this.height = height;
        this.leftOffset = 0;
        this.topOffset = 0;
        this._stepSize = 1;
        this.moveDirection = "right";
    }

    get stepSize() {
        return this._stepSize;
    }

    set stepSize(n) {
        if (n > 0) {
            this._stepSize = n;
        }
    }

    move() {
        this.obj.offset({
            left: this.leftOffset,
            top: this.topOffset
        });
        if (this.leftOffset > this.width) {
            this.leftOffset = this.width;
        }
        if (this.topOffset > this.height) {
            this.topOffset = this.height;
        }
        if (this.leftOffset < 0) {
            this.leftOffset = 0;
        }
        if (this.topOffset < 0) {
            this.topOffset = 0;
        }
        if (this.leftOffset === this.width && this.topOffset === 0) {
            this.moveDirection = "down";
        } else if (this.leftOffset >= this.width && this.topOffset >= this.height) {
            this.moveDirection = "left";
        } else if (this.leftOffset === 0 && this.topOffset === this.height) {
            this.moveDirection = "up";
        } else if (this.leftOffset === 0 && this.topOffset === 0) {
            this.moveDirection = "right";
        }
        if (this.moveDirection === "right") {
            this.leftOffset += this._stepSize;
        } else if (this.moveDirection === "down") {
            this.topOffset += this._stepSize;
        } else if (this.moveDirection === "left") {
            this.leftOffset -= this._stepSize;
        } else {
            this.topOffset -= this._stepSize;
        }
    }
};
let m = new Moving($("#main-heading"), 200, 300);
//setInterval(() => m.move(), 30);
let intervalId = setInterval(() => m.move(), 30);
console.log(intervalId);
// setTimeout(() => {
//     m.stepSize = 5;
// }, 3000);
// clearInterval(intervalId);
// $("#main-heading").click(() => clearInterval(intervalId));
const speedUp = () => {
    m.stepSize += 2;
};
$("#main-heading").click(() => speedUp());
