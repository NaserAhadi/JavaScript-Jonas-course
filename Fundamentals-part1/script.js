// ** 5.Values and Variables ** //

let js = "amazing";
// if(js==='amazing') alert('JavaScript is Fun!')

console.log(40 + 22 - 24);

// declaring variables
// let firstName = 'Naser'
// console.log(firstName);

// variable name can not start with number
// let 3years = 3;

// variable names contain only: letters, numbers, under score(_) and dollar sign($)
// let my&variable = 'test'
let my_variable$ = "that ok";

// variable names should not be JavaScript reserved keyword like: new, function, name, etc.
// let function ='something'
// let new ='something'
let name = "my name";
console.log(name);

// variable names should NOT start with uppercase(it's not illegal but it's a convention)
let Person = "someone";
// we choose all in uppercase letters for constant that we know will never change like: the number PI =3.1415 (convention)
let PI = 3.1415;

// variable names should be descriptive
// when you name a variable, it should be easy to understand what value the variable is holding.
// more descriptive variables
let myFirstJob = "Civil Engineer";
let myCurrentJob = "Programmer";
// less descriptive variables
let job1 = "Civil Engineer";
let job2 = "Programmer";

// ** 7.Data Types ** //

/* 
example of javascript dynamic typing:
first we assign a boolean to a variable and then reassign it with a string and everything is ok,
just because of javascript dynamic typing feature.
*/
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log("type of javascriptIsFun:", typeof javascriptIsFun);

javascriptIsFun = "YES";
console.log("type of javascriptIsFun:", typeof javascriptIsFun);

console.log(typeof 23);
console.log(typeof "Naser");
// when declare an empty variable, its value and type both are undefined!.
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

// bug of type of null: typeof null should return null but it return object!!
console.log(typeof null); // object

// ** 8.let, const and var ** //
const birthDay = 1990;
// birthDay = 1991 // we get type error: Uncaught TypeError: Assignment to constant variable.
// const job; // Uncaught SyntaxError: Missing initializer in const declaration

// lastName = 'Ahadi'
// console.log('lastName: ',lastName) // Ahadi

// ** 9. Basic Operators ** //
// Operators basically allows us to transform values or combine multiple values.
// Categories of operatores: Mathematical or Arithmetic, Assignment, Comparison, Logical,

// Math operator: (+, -, *, /)
//minus
const now = 2023;
const ageNaser = now - 1990;
const ageSarah = now - 2000;
console.log(ageNaser, ageSarah);

console.log(ageNaser * 2, ageNaser / 10, 2 ** 3, ageNaser + 2);
// 2 ** 3 means 2 power to three which means 2 * 2 * 2

// concatenating two string with plus operator
const firstName = "Naser";
const lastName = "Ahadi";
console.log(firstName + " " + lastName);
// template string:
console.log(`${firstName} ${lastName}`);

// typeof operator: give us type of value
console.log(typeof firstName);

// Assignment operator: (=, +=, -=, *=, /=, ++, --)
// plus operator and assignment operator.
let num = 10 + 5;
console.log(num); // 15  => plus operator is precedence to assignment operator.
num += 10; // num = num + 10 = 25
console.log(num); // 25

num *= 4; // num = num * 4 = 25 * 4 = 100
console.log(num); // 100
num++; // num = num + 1 = 101
console.log(num); // 101
num--; // num = num - 1 = 100
console.log(num); // 100
num /= 4; // num = num / 4 = 100 / 4 = 25
console.log(num); // 25

// Comparison operators: (>, <, >=, <=, ==, ===)
// comparison operators produce Boolean values.
console.log(ageNaser > ageSarah); // true

// ** 10. Operator Precedence ** //
/*
JavaScript has a well-defined order of operator precedence, 
So basically the order in which operators are executed.
to check operator precedence table:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

And of course you don't need to know any of these precedence numbers.
You just have to have a general idea of which operators are executed first.
So usually all the math operators are executed before the comparison operators for example.
*/

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

// const averageAge = ageNaser + ageSarah / 2  // not ok, result 44.5 is not correct
const averageAge = (ageNaser + ageSarah) / 2; // ok, result is 28
console.log(ageNaser, ageSarah, averageAge);

// ** Coding Challenge 1 ** //
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/
// const markMass = 78
// const markHeight = 1.69
// const johnMass = 92
// const johnHeight = 1.95

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// ** 12. Strings and Template Literals ** //
/*
type coercion: in concatenation of number and string, basically JavaScript will simply convert this number to a string, 
so that it can concatenate them
*/

const naserAhadi =
  "I'm " + firstName + ",a " + (now - birthDay) + " years old " + myCurrentJob;
console.log(naserAhadi);
// template literal
const naserAhadiNew = `I'm ${firstName},a ${
  now - birthDay
} years old ${myCurrentJob}`;
console.log(naserAhadiNew);

console.log(
  "multiline \n\
string\n\
testing"
);

console.log(`multiline
string
testing with template literal`);

// ** 13. Taking Decisions if  else Statements ** //
const age = 9;
if (age >= 18) {
  console.log("you can get drive license");
} else {
  const yearsLeft = 18 - age;
  console.log(`you are younge and ${yearsLeft} years left`);
}

// ** Coding Challenge 2 ** //
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
*/

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's! ${markBMI}`);
}

// ** 15. Type Conversion and Coercion ** //
// type conversion: convert data type manually
// type coercion: the automatic or implicit conversion of values from one data type to another

//type coercion
console.log("I am " + 23 + " years old"); // convert number to string
console.log("23" - "10" - 3); // 10  -> convert string to number
console.log("24" / "2"); // 12 -> convert string to number
console.log("23" * "2"); // 46 -> convert string to number
console.log("23" > "18"); // true -> convert string to number
console.log("23" + "10" + 5); // '23105' -> convert number to string
// only plus operator convert number to string, other operators convert string to number

// type conversion
const inputYear = "1990";
console.log(Number(inputYear), inputYear); // 1990, '1990'
console.log(Number(inputYear) + 5); // 1995
console.log(Number("Naser")); // NaN
console.log(typeof NaN); // number
console.log(String(23), 23); // '23', 23

// ** 16. Truthy and Falsy Values ** //
// 5 falsy values: 0, '', null, undefined, NaN
console.log("Boolean(0) :>> ", Boolean(0)); // false
console.log("Boolean(undefined) :>> ", Boolean(undefined)); // false
console.log("Boolean(NaN) :>> ", Boolean(NaN)); // false
console.log('Boolean("naser") :>> ', Boolean("naser")); // true
console.log("Boolean({}) :>> ", Boolean({})); // true
console.log('Boolean("") :>> ', Boolean("")); // false

// type coercion into boolean when using logical context(if else statement condition)
const money = 0;
if (money) {
  console.log("Good, You Have Money");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Yay! height is defined");
} else {
  console.log("height variable is UNDEFINED");
}

// ** 17. Equality Operators == vs. === ** //
// equality operator
const personAge = 18;
if (personAge === 18) console.log("you are an adult :D, strict equality");
if (personAge == 18) console.log("you are an adult :D, loose equality");

// const favoriteNumber = prompt(`what's your favorite number?`)
// if(favoriteNumber === 20){
//     console.log('yes 20 is a cool number');
// } else if(favoriteNumber === 9) {
//     console.log('9 is cool number too');
// } else {
//     console.log('number is not 9 and 20');
// }

// different operator (with excalmation mark)
// strict different operator !==
// loose different operator !=
// if(favoriteNumber !== 20) console.log('why not 20 ?');

//** 18. Boolean Logic **//

//** 19. Logical Operators **//
const hasDriversLicense = true; // variable A
const hasGoodVision = false; // variable B
const isTired = true; // variable C

// AND operator with NOT operator
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("you able to drive");
} else {
  console.log("someone else should drive...");
}

// OR operator
console.log(hasDriversLicense || hasGoodVision || isTired); // true

//** 20. Coding Challenge #3 **//
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1.2.3.4.Calculate the average score for each team, using the test data below
Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§
 Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§
 Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§
 Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const averageOfDolphins = (96+108+89)/3
// const averageOfKoalas = (88+91+110)/3
// console.log('averageOfDolphins :>> ', averageOfDolphins);
// console.log('averageOfKoalas :>> ', averageOfKoalas);
// if(averageOfDolphins>averageOfKoalas){
//     console.log('Dolphins are winner');
// } else if(averageOfDolphins<averageOfKoalas){
//     console.log('Koalas are winner');
// } else {
//     console.log('it is a draw');
// }

// bonus 1
// const averageOfDolphins = (97+112+101)/3
// const averageOfKoalas = (109+95+123)/3
// if(averageOfDolphins>averageOfKoalas && averageOfDolphins>=100){
//     console.log('Dolphins are winner');
// } else if(averageOfDolphins<averageOfKoalas && averageOfKoalas>=100){
//     console.log('Koalas are winner');
// } else if(averageOfDolphins!==averageOfKoalas) {
//     console.log('min 100 is required');
// } else {
//     console.log('it is a draw');
// }

// bonus 2
const averageOfDolphins = (97 + 112 + 101) / 3;
const averageOfKoalas = (109 + 95 + 106) / 3;
if (averageOfDolphins > averageOfKoalas && averageOfDolphins >= 100) {
  console.log("Dolphins are winner");
} else if (averageOfDolphins < averageOfKoalas && averageOfKoalas >= 100) {
  console.log("Koalas are winner");
} else if (averageOfDolphins === averageOfKoalas && averageOfKoalas >= 100) {
  console.log("it is a draw", averageOfDolphins);
} else {
  console.log("no team wins");
}

//** 21. The switch Statement **//
const day = "sunday";
switch (day) {
  case "monday": // day === 'monday'
    console.log("it is monday");
    console.log(`let's go to vandar`);
    break;
  case "tuesday":
    console.log("it is tuesday");
    break;
  case "wednesday":
    console.log("it is wednesday");
    break;
  case "thursday":
  case "friday":
    console.log("it is the weekend, enjoy");
    break;
  case "saturday":
    console.log("it is saturday");
    break;
  case "sunday":
    console.log("it is sunday");
    break;
  default:
    console.log("it is not a valid day");
}

// if else statement of above logic
if (day === "monday") {
  console.log("it is monday");
  console.log(`let's go to vandar`);
} else if (day === "tuesday") {
  console.log("it is tuesday");
} else if (day === "wednesday") {
  console.log("it is wednesday");
} else if (day === "thursday" || day === "friday") {
  console.log("it is the weekend, enjoy");
} else if (day === "saturday") {
  console.log("it is saturday");
} else if (day === "sunday") {
  console.log("it is sunday");
} else {
  console.log("it is not a valid day");
}

// * 22. Statements and Expressions * //
// So essentially, an expression is a piece of code that produces a value.
3 + 4; // is expression because it produces a value
1991; // is expression because it produces a value
true && false; // is expression because it produces a value

// statement is like a bigger piece of code that is executed and
// which does not produce a value on itself.
if (23 > 10) {
  const str = "23 is bigger than 10";
}
//so basically, whenever something ends with a semicolon,that's then a statement.
// JavaScript expects statements and expressions in different places.
console.log(`I am ${2023 - 1990} years old`);
// in template literal we should put expression not a statement

// * 23. The Conditional (Ternary) Operator * //
const ageOfPerson = 12;
// ageOfPerson>=18 ? console.log('you can drink wine') : console.log('you should drink water');

// ternary operator is an expression (unlike if else statement):
const drink = ageOfPerson >= 18 ? "wine" : "water";
console.log(`I like to drink ${ageOfPerson >= 18 ? "wine" : "water"}`)

// Coding Challenge #4
// const bill = 275
// const bill = 40
const bill = 430
const tip = bill >= 50 && bill <=300 ? 0.15 * bill : 0.2 * bill
const finalBill = tip + bill
console.log('tip :>> ', tip);
console.log('finalBill :>> ', finalBill);