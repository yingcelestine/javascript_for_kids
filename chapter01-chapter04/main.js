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

// difference between double equals and triple equals.
let stringNumber = "5";
let actualNumber = 5;
stringNumber === actualNumber;
stringNumber == actualNumber;
let age = 12, accompanied = true
const lily = (age >= 13 || accompanied === true) ? true : false;
console.log(lily);

//[chapter 03 Array]
var animals = [["Polar Bear"], ["Monkey"], ["Cat"], ["Dog"], ["Llama"]];
var lastAnimal = animals.pop();
console.log(lastAnimal);
lastAnimal = animals.pop();
console.log(animals.concat(lastAnimal));
console.log(animals);

// Even though firstArray.concat(otherArray) returns an array containing all the elements from firstArray and secondArray , neither of the original arrays is changed. Reduce also didn't change the original ones.
const reducer = (animal1, animal2) => {
    return animal1.concat(animal2);
};
console.log(animals.reduce(reducer, lastAnimal));
console.log(animals);

console.log(animals[2]);
console.log(animals.indexOf(["Cat"]));
console.log(animals[Math.floor(Math.random() * 3)]);

let randomBodyParts = ["Face", "Nose", "Hair", "Hands", "Feet"];
let randomAdjectives = ["Smelly", "Boring", "Interesting", "Stupid", "Great"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
let randomAnimalBodyParts = ["Face", "Nose", "Hair", "Hands", "Feet"];
const random1 = (array) => {
    return array = array[Math.floor(Math.random() * array.length)];
}
let randomInsults = ["Your", random1(randomBodyParts), "is", "more", random1(randomAdjectives), "than", "a", random1(randomWords), "'s", random1(randomAnimalBodyParts), "!!!"]
console.log(randomInsults.join(" "));
let randomInsult = "Your " + random1(randomBodyParts) + " is" + " more " + random1(randomAdjectives) + " than " + " a " + random1(randomWords) + "'s " + random1(randomAnimalBodyParts) + "!!!"
console.log(randomInsult);

let array2 = [3, 2, 1];
let array3 = [array2[0], "is", "bigger", "than", array2[1], "is", "bigger", "than", array2[2]];
console.log(array3.join(" "));

//[chapter 04 Object]
let cat = {
    legs: 3,
    "full name": "Harmony Philomena Snuggly-Pants Morgan",
    color: "Tortoiseshell",
    value: {
        legs: 3,
        color: "red"
    }
};
console.log(cat["legs"]);
console.log(cat.legs);
// As with unquoted keys in object literals, this will work only if the key doesn’t contain any special characters, such as spaces.
console.log(cat["full name"]);
// console.log(cat."full name");
// main.js:93 Uncaught SyntaxError: Unexpected string
// spaces aren’t allowed in an unquoted key
console.log(Object.keys(cat));
console.log(Object.values(cat));
console.log(cat.age);
console.log(cat[0]);

let dog = {};
dog["name"] = "Shelly";
dog["color"] = "black";
dog.age = 4;
console.log(dog);

let array4 = [
    {
        legs: 3, "full name": "Harmony Philomena Snuggly-Pants Morgan", color: "Tortoiseshell",
        value: {
            legs: 5,
            color: "red"
        }
    },
    { name: "Shelly", color: "black", age: 4, "lucky number": [2, 4, 6, 8, 9] }
];
console.log(array4[0]);
console.log(array4[0]["value"]);
console.log(array4[0].value);
console.log(array4[0].value.legs);
console.log(array4[0].value["legs"]);
console.log(array4[1]["name"]);
console.log(array4[1].name);
console.log(array4[1]["lucky number"]);
console.log(array4[1]["lucky number"][0]);

// ****You can use dot notation only with objects, not with arrays.
//console.log(array4.0);

let pet = {
    cat: {
        legs: 3, "full name": "Harmony Philomena Snuggly-Pants Morgan", color: "Tortoiseshell",
        value: {
            legs: 5,
            color: "red"
        }
    },
    dog: { name: "Shelly", color: "black", age: 4, "lucky number": [2, 4, 6, 8, 9] }
};

let scores = {
    Lily: 0,
    Anni: 0,
    Manni: 0,
    Jone: 0,
    Kaiyin: 0
};
scores.Manni += 15;
console.log(scores.Manni);

let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};
console.log(myCrazyObject["some array"][2].number);
console.log(myCrazyObject["some array"][2]["number"]);

