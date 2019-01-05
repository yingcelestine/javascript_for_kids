console.log("hello");
const hello = "nihao";
console.log(`${hello}, world`);
console.log(hello + ", world");


array = [0, 0, 0];
//       0    1    2
//       0   -2   -1

let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array1.fill(99, -7, -3));

const drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + "=^.^= is my favorite animal." + true);
    }
};
drawCats(10);

var secondsInAMinute = 60, minutesInAnHour = 60, secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);
let hoursInADay = 24;
let secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);
let daysInAYear = 365;
let secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);
let longString = "this is a long long Story."
console.log(longString.slice(2, 16));
console.log(longString.slice(5));
console.log(longString.toUpperCase());
console.log(longString.toLowerCase());
console.log(longString[0].toUpperCase() + longString.slice(1).toLowerCase());

let stringNumber = "5";
let actualNumber = 5;
stringNumber === actualNumber;
stringNumber == actualNumber;
let age = 12, accompanied = true
const lily = (age >= 13 || accompanied === true) ? true : false;
console.log(lily);