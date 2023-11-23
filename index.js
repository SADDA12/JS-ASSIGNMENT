// FUNCTIONS
// Q1.
function calculateArea(radius) {
    let area = Math.PI * (radius * radius)
    return area 
}
console.log(calculateArea(10))

// Q2.
function multiply(a,b) {
    let result = a * b
    console.log(result)
}
multiply(2,5)

// Q3.
function greet(name = "Guest") {
    console.log ("Good day " + name)
}
greet()

// Q4.
let square = (x) => x * x
console.log(square(5))

// OBJECTS
// Q5.
let car = {
    make: "Audi",
    model: "Q7",
    year: 2005
}
console.log(car)

// Q6.
let Car = {
    make: "Audi",
    model: "Q7",
    year: 2005,
    start: function start() {
        console.log("Engine started!")
    }
}
Car.start()

// Q7.
let person = {
    name: "kofi",
    occupation: "banker",
    age: 30
}
function printObject(person) {
    for(let key in person) {
        console.log(`${key}: ${person[key]}`)
    }
}
printObject(person)

// Q8.
let {make,model} = car
console.log(make)
console.log(model)

// ARRAYS
// Q9.
let fruits = ["apple", "orange", "banana"]

// Q10.
fruits.push("grape")
fruits.shift()
console.log(fruits)

// Q11.
function printFruits(fruits){
    for(let i=0; i<fruits.length; i++){
        console.log(fruits[i])
    }
}
printFruits(fruits)

// Q12.
function firstLast6(nums){
    return nums[0] === 6 || nums[nums.length - 1] === 6
}
console.log(firstLast6([1, 2, 6]))
console.log(firstLast6([6, 1, 2, 3]))
console.log(firstLast6([13, 6, 1, 2, 3]))

// LOOPS
// Q13.
for(let i=1; i<=5; i++){
    console.log(i)
}

// Q14.
let number = 2

while (number <= 8) {
  console.log(number);
  number += 2;
}

// Q15.
function printTable() {
    for (let i = 1; i <= 5; i++) {
        for (let x = 1; x <= 12; x++) {
            let result = i * x;
            console.log(`${i} * ${x} = ${result}`);
        }
        console.log('\n');
    }
}

printTable()


// CONDITIONAL STATEMENTS
// Q16.
let temperature = 38

if (temperature > 30) {
  console.log("It's hot!");
}

// // Q17.
let dayOfWeek = 7

switch (dayOfWeek) {
    case 1:
        console.log("Sunday.");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Not a day of the week.");
}


// Q18.
let Number = 13

let result = Number % 2 === 0 ? "even" : "odd"

console.log(result)

// Q19.
// Truthy values are values that are considered true when used in a boolean Context. All values are considered truthy unless they are false
// Examples of such values are strings that are not empty, numbers that are not 0, arrays, objects, functions.
// eg: 
if("Check information") {
    console.log("a string that's not empty is truthy");
}

if(5) {
    console.log("number apart from 0 is truthy");
}

if (["rice", "beans"]) {
    console.log("an array is a truthy value");
}

// Falsy values are values that are considered false when used in a boolean context. 
// Examples of such values are empty string, 0, NaN, null, undefined, and false.
// eg:
if (0) {
    console.log("Falsy: 0");
  } else {
    console.log("0 is a falsy value");
}

if (null) {
    console.log("Falsy: null");
  } else {
    console.log("null is a falsy value");
}

if (undefined) {
    console.log("Falsy: undefined");
  } else {
    console.log("undefined is a falsy value");
}

// Q20.
let num = 14

if (num > 10 && num < 20) {
  console.log(`${num} is greater than 10 and less than 20.`);
}
else {
  console.log("condition is false")
}