let dog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true
};
console.log(dog.name);
dog.age = 6;
console.log(dog);
dog.bark = function () {
    console.log("Woof woof! My name is " + this.name + "!");
};
dog.bark();
console.log(dog);
dog.bark1 = (name) => {
    console.log("Woof woof! My name is " + name + "!");
};
dog.bark1(dog.name);
console.log(dog);

let speak = function () {
    console.log(this.sound + "! My name is " + this.name + "!");
};
let cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
};
cat.speak();
let pig = {
    sound: "Oink",
    name: "Charlie",
    speak: speak
}
pig.speak();

class Car {
    constructor(x, y, stepSize, imgUrl) {
        this.x = x;
        this.y = y;
        this._stepSize = stepSize;
        this.imgUrl = imgUrl;
        this.imgElement = $(`<img src="${imgUrl}" alt=""/>`);
        this.imgElement.css({
            position: "absolute",
            left: this.x,
            top: this.y,
            "max-width": "150px",
        })
        // this.carImg = '<img src="http://nostarch.com/images/car.png" alt=""/>';
    }

    get stepSize() {
        return this._stepSize;
    }

    set stepSize(n) {
        this._stepSize = n;
    }

    draw() {
        $("body").append(this.imgElement);

    }

    moveRight() {
        this.x += this._stepSize;
        this.imgElement.css({
            left: this.x,
        })
    }

    moveLeft() {
        this.x -= this._stepSize;
        this.imgElement.css({
            left: this.x,
        })
    }

    moveDown() {
        this.y += this._stepSize;
        this.imgElement.css({
            top: this.y,
        })
    }


    moveUp() {
        this.y -= this._stepSize;
        this.imgElement.css({
            top: this.y,
        })
    }
}
// Car.carImg = '<img src="http://nostarch.com/images/car.png" alt=""/>';
// Car.carElement

let tesla = new Car(0, 0, 2, "https://i.imgur.com/ghKd4tl.jpg");
let volvo = new Car(500, 500, 2, "https://i.imgur.com/HcMMaRM.jpg");
tesla.draw();
volvo.draw();
// setInterval(() => {
//     tesla.moveDown();
// }, 200);
console.log(tesla.imgElement);
tesla.stepSize = 10;
let setIntervalId = setInterval(() => {
    tesla.moveDown();
}, 200);
setTimeout(() => clearInterval(setIntervalId), 5000);

// const drawCar = (car) => {
//     // car.draw();
//     $("body").append(car.imgElement);
// }
// drawCar(tesla);
// drawCar(volvo);


