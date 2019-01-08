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
//****animals[2] = ["Cat"], but animals.indexOf(["Cat"]) = -1
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

//chapter 06
let message = "Hello world!"
console.log(message);
let name = "Celesy";
console.log("Hello, " + name);
if (name.length < 7) {
    console.log("Your name isn't very long.");
};
let name1 = "Celestine";
console.log("Hello, " + name1);
if (name1.length > 7) {
    console.log("Wow, you have a REALLY long name!");
} else {
    console.log("Your name isn't very long.");
};
let dish = "sweet and sour pork";
if (dish === "lemon chicken") {
    console.log("Great! I'm having lemon chicken!");
} else if (dish === "beef with black bean sauce") {
    console.log("I'm having the beef.");
} else if (dish === "sweet and sour pork") {
    console.log("Ok, I'll have the pork.");
} else {
    console.log("well, I guess I'll have rice then.")
};

let name3 = "Anni";
if (name3 === "Anni") {
    console.log("Hello me!");
} else if (name3 === "John") {
    console.log("hi, dad.");
} else if (name3 === "Shelly") {
    console.log("hi, mom.");
} else {
    console.log("Hello stranger!");
};

let things = ["clothes", "shoes", "toothbrush", "pen", "suitcase"]
for (let i = 0; i < things.length; i++) {
    console.log("I have " + things[i] + ".");
};
for (let i in things) {
    console.log("I have " + things[i] + ".");
};

for (let a = 3; a < 10000; a *= 3) {
    console.log(a);
};
let a = 3;
while (a < 10000) {
    console.log(a);
    a *= 3;
};

let animals1 = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
for (let i in animals1) {
    animals1[i] = "Awesome " + animals1[i];
};
console.log(animals1);
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = "";
while (randomString.length != alphabet.length) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
};
console.log(randomString);

let input = "javascript is awesome";
let output = "";
for (let i in input) {
    if (input[i] === "a") {
        output += "4";
    } else if (input[i] === "e") {
        output += "3";
    } else if (input[i] === "i") {
        output += "1";
    } else if (input[i] === "o") {
        output += "0";
    } else {
        output += input[i];
    }
};
console.log(output);

//chapter 08
let ourFirstFuction = () => {
    console.log("Hello world!");
};
ourFirstFuction();
let sayHelloTo = (name) => {
    console.log("Hello " + name + "!");
};
sayHelloTo("Anni");
const drawCats1 = (times) => {
    for (let i = 0; i < times; i++) {
        console.log(i + "=^.^=");
    }
};
drawCats1(10);
function drawCats2(times, things) {
    for (let i = 0; i < times; i++) {
        console.log(i + things);
    }
};
drawCats2(5, "(>_<)");

const newFunction = function (number) {
    return number * 2;
};
console.log(newFunction(8));
console.log(newFunction(3) + newFunction(2));
console.log("Hello");
let fifthLetter = (name) => {
    if (name.length < 5) {
        return;
    }
    if (name.length < 10) {
        return "The fifth letter of your name is " + name[4] + ".";
    }
    return "You have a so long name, it's cool!"
};
console.log(fifthLetter("Celestine"));
console.log(fifthLetter("John"));
console.log(fifthLetter("Philipulytaste"));

const addFunction = (a, b) => {
    return a + b;
};
const multiplyFunction = (m, n) => {
    return m * n;
};
console.log(addFunction(multiplyFunction(36325, 9824), 777));

const areArraysSame = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
console.log(areArraysSame([1, 2, 3], [1, 2, 6]));

let words = ["javascript", "monkey", "amazing", "pancake", "excellent", "come"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
/* const answerArray1 = (array) => {
    for (let i in array) {
if 
    }
}*/
let ary = [1, 2, 3];
for (let i in ary) {
    console.log(ary[i]);
}
let remainingLetters = word.length;
let guessesCount = 0;
let Counts;
// Game code goes here
while (remainingLetters > 0 && guessesCount < 5) {
    // Show the player their progress            
    alert(answerArray.join(" "));
    // Take input from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        guessesCount += 1;
        Counts = 5 - guessesCount;
        alert("Please enter a single letter, your remaining number of chances is : " + Counts);
    } else {
        // update the game state with the guess
        guess = guess.toLowerCase();
        let nMatched = 0;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
                nMatched++;
            }
        }
        if (nMatched === 0) {
            guessesCount += 1;
            Counts = 5 - guessesCount;
            alert("Please try again, your remaining number of chances is : " + Counts);
        }
    }
};
// update answerArray and remainingLetters for every correct
if (remainingLetters === 0 && answerArray[i] !== "_") {
    alert(answerArray.join(""));
    alert("Good job! The answer was " + word);
};
if (guessesCount === 5) {
    alert("I'm sorry, your challenge is over. Good luck next time!");
};