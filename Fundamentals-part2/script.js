// ** 2. Activating Strict Mode **//
// 'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// ** 3. Functions **//
function logger() {
  console.log("my name is Naser");
}

// calling/ invoking/ running function
logger();
logger();
logger();

// function fruitProccessor(apple, orange){
//     const juice = `Juice with ${apple} apples and ${orange} oranges.`
//     return juice
// }

// const appleJuice = fruitProccessor(5,0)
// console.log(appleJuice);

// const appleOrangeJuice = fruitProccessor(2, 4)
// console.log(appleOrangeJuice);

//** 4. Function Declarations vs. Expressions **/
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1990);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1990);
console.log(age1, age2);

//** 5. Arrow Functions **/
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(1990));

const yearsUntilRetirementWithName = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirementWithName(1990, "Naser"));
console.log(yearsUntilRetirementWithName(1991, "Jonas"));

// ** 6. Functions Calling Other Functions **//
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProccessor(apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProccessor(2, 3));

//** 7. Reviewing Functions **/
const calcAge4 = (birthYear) => 2037 - birthYear;
const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge4(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
    // after return the function is exited and everything after return is not executed
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    return -1;
  }
};
console.log(yearsUntilRetirement2(1990, "Naser"));
console.log(yearsUntilRetirement2(1970, "Amin"));

//** 8. Coding Challenge #1 **/
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
 Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

 Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
 To calculate average of 3 values, add them all together and divide by 3

 To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("no winner");
  }
};
// Test 1
// const avgDolphins = calcAverage(44,23,71)
// const avgKoalas = calcAverage(65,54,49)
// no winner
////////////////
// Test 2
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
// Dolphins win (60 vs. 28)
checkWinner(avgDolphins, avgKoalas);

//** 9. Introduction to Arrays **/
const friendOne = "Abbas";
const friendTwo = "Ali";
const friendThree = "Amin";

// creating array with square brackets which is called literal syntax
const friends = ["Abbas", "Ali", "Amin"];
console.log(friends); // ['Abbas', 'Ali', 'Amin']

// creating array with Array function
const years = new Array(1990, 1991, 1992);
console.log(years); // [1990, 1991, 1992]

console.log(friends[0]); // Abbas
console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Amin

friends[2] = "Farzan";
console.log(friends); // ['Abbas', 'Ali', 'Farzan']

// friends = ['Bob', 'Marry']
const myFirstName = "Naser";
const naser = [myFirstName, "Ahadi", 2023 - 1990, "programmer", friends];
console.log(naser); // ['Naser', 'Ahadi', 33, 'programmer', Array(3)]

// ** 10. Basic Array Operations (Methods) **//
// Add elements to array:
// push method add element to end of array
friends.push("Hamidreza");
console.log(friends); // ["Abbas", "Ali", "Farzan", "Hamidreza"];

// unshift method add element to the beginning of aray
friends.unshift("Shahram");
console.log(friends); // ["Shahram", "Abbas", "Ali", "Farzan", "Hamidreza"];

// push and unshift method mutate the original array and return the new array length
const newLength = friends.push("Mohammad");
console.log(newLength); // 6
console.log(friends); // ["Shahram", "Abbas", "Ali", "Farzan", "Hamidreza", "Mohammad"];

// Remove elements
// pop method remove element from the last of array and return the popped element
friends.pop();
console.log(friends); // ["Shahram", "Abbas", "Ali", "Farzan", "Hamidreza"];
const poppedElement = friends.pop();
console.log(poppedElement); // Hamidreza
console.log(friends); // ["Shahram", "Abbas", "Ali", "Farzan"];

// shift method removes element from the beginning of array and return the removed element
friends.shift();
console.log(friends); // ["Abbas", "Ali", "Farzan"];
const removedElement = friends.shift();
console.log(removedElement); // Abbas
console.log(friends); // ["Ali", "Farzan"];

// indexOf method return the index of element in array
console.log(friends.indexOf("Farzan")); // 1
// if there is no such element it return -1
console.log(friends.indexOf("Abbas")); // -1

// includes method return true if there is element in array otherwise return false
console.log(friends.includes("Ali")); // true
console.log(friends.includes("Abbas")); // false
// it check element in strict equality way
friends.push(23);
console.log(friends); // ["Ali", "Farzan", 23]
console.log(friends.includes("23")); // false
console.log(friends.includes(23)); // true

if (friends.includes("Ali")) {
  console.log("You have a friend called Ali");
}

//** 11. Coding Challenge #2 **/
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data
below

3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44
*/

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("tips", tips); // [18.75, 111, 8.8];
console.log("totals", totals); // [143.75, 666, 52.8];

//** 12. Introduction to Objects **/
// creating literal syntax object.
const naserObj = {
  firstName: "Naser",
  lastName: "Ahadi",
  age: 2023 - 1990,
  job: "programmer",
  friends: ["Abbas", "Ali", "Amin"],
};

/** 13. Dot vs. Bracket Notation **/
// how retrieve element from an object
// dot notation
console.log(naserObj.job); // programmer

// bracket notation
console.log(naserObj["job"]); // programmer

// bracket notation vs dot: in dot notation you should put final property
// in bracket notation you can put an expression that compute a value
// example:
const nameKey = "Name";
console.log(naserObj["first" + nameKey]); // Naser
console.log(naserObj["last" + nameKey]); // Ahadi
// console.log(naserObj.'first' + nameKey); // doesn't work in dot notation

// const interestedIn = prompt(`what do you want to know about Naser? name, job, age, friends`)
// console.log(interestedIn);
// if(naserObj[interestedIn]){
//   console.log(naserObj[interestedIn]);
// } else {
//   console.log('wrong request! choose between name, job, age, friends');
// }

// Add element to object:
naserObj.location = "Tehran";
naserObj["email"] = "naserahadi95@gmail.com";
console.log(naserObj);
/*
{
  "firstName": "Naser",
  "lastName": "Ahadi",
  "age": 33,
  "job": "programmer",
  "friends": [
      "Abbas",
      "Ali",
      "Amin"
  ],
  "location": "Tehran",
  "email": "naserahadi95@gmail.com"
}
*/

// challenge: write below sentence
// "Naser has 3 friends, and his best firend is called Abbas"
console.log(
  `${naserObj.firstName} has ${naserObj.friends.length} friends, and his best firend is called ${naserObj.friends[0]}`
);

//** 14. Object Methods **//

// as we know object contains key value pairs, and also we know function expression return a value
// so we can create a key and attach a function expression to it which it returns a value.
// So any function that is attached to an object is called a 'method'.

// notic: function declaration is work here when we attach it to a key.

const naserObj2 = {
  firstName: "Naser",
  lastName: "Ahadi",
  birthYear: 1990,
  job: "programmer",
  friends: ["Abbas", "Ali", "Amin"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // testFunctionDeclaration: function calcAge2(birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge2: function(){
  //   console.log(this);
  //   return 2037-this.birthYear
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(naserObj2.calcAge(1990)); // 47
// console.log(naserObj2['calcAge'](1991)); // 46
// console.log(naserObj2.testFunctionDeclaration(1980)); // 57

// JavaScript gives us access to other property from the method by 'this' keyword.
// 'this' keyword is equal to the object that is calling the method.
// console.log(naserObj2.calcAge2()); // 47
/*
{
  "firstName": "Naser",
  "lastName": "Ahadi",
  "birthYear": 1990,
  "job": "programmer",
  "friends": [
      "Abbas",
      "Ali",
      "Amin"
  ],
  "hasDriversLicense": true
}
*/

// if we call calcAge method 4 times, it should better to store the computed result as
// a property so there is no need to calculate age 4 times and return the age from
// the computed property.
console.log(naserObj2.calcAge()); // 47
console.log(naserObj2.age); // 47
console.log(naserObj2.age); // 47
console.log(naserObj2.age); // 47

// challenge: write a method.
// "Naser is a 47-year old programmer, and he has a/no driver's license"
console.log(naserObj2.getSummary());

//** 15. Coding Challenge #3 **//
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) 
(mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height 
(Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method

3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = (this.mass / this.height ** 2).toFixed(2);
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = (this.mass / this.height ** 2).toFixed(2);
    return this.BMI;
  },
};

const naserBmiObj = {
  fullName: "Naser Ahadi",
  mass: 72,
  height: 1.73,
  calcBMI: function () {
    this.BMI = (this.mass / this.height ** 2).toFixed(2);
    return this.BMI;
  },
};
mark.calcBMI();
john.calcBMI();
naserBmiObj.calcBMI();

console.log(mark.BMI); // 27.31
console.log(john.BMI); // 24.19
console.log(naserBmiObj.BMI); // 24.06

if (mark.BMI > john.BMI) {
  console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})!`);
} else {
  console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})!`);
}

/** 16. Iteration The for Loop **/
// for (initialization; condition; afterthought) {
//   // code block to be executed
// }

// for loops keep running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

/** 17. Looping Arrays, Breaking and Continuing **/
const naser2 = [
  "Naser",
  "Ahadi",
  2023 - 1990,
  "programmer",
  ["Abbas", "Ali", "Amin"],
  true,
];
const types = [];

for (let i = 0; i < naser2.length; i++) {
  // Reading from naser2 array
  console.log(naser2[i], typeof naser2[i]);

  // Filling types array
  // types[i] = typeof naser2[i]
  types.push(typeof naser2[i]);
}
console.log(types); // ["string", "string", "number", "string", "object", "boolean"];

const years3 = [1990, 2003, 1969, 2020];
const ages = [];
for (let i = 0; i < years3.length; i++) {
  ages.push(2037 - years3[i]);
}
console.log(ages); // [47, 34, 68, 17];

// continue and break
// continue: with continue the current iteration of the loop is exited, and then the next one starts immediately.
// break is used to completely terminate the whole loop.

console.log("--- ONLY STRING ---");
for (let i = 0; i < naser2.length; i++) {
  if (typeof naser2[i] !== "string") continue;
  console.log(naser2[i], typeof naser2[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < naser2.length; i++) {
  if (typeof naser2[i] === "number") break;
  console.log(naser2[i], typeof naser2[i]);
}

/* 18. Looping Backwards and Loops in Loops */
for (let i = naser2.length - 1; i >= 0; i--) {
  console.log(i, naser2[i]);
}
/*
5 true
4 ['Abbas', 'Ali', 'Amin']
3 'programmer'
2 33
1 'Ahadi'
0 'Naser'
*/

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting Exercise ${exercise}`);

  for (let rep = 0; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weigth number ${rep}`);
  }
}

/* 19. The while Loop */
let rep = 1;
while (rep <= 5) {
  console.log(`WHILE LOOP: Lifting exercise repition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("loop is about to end ...");
}

/* 20. Coding Challenge #4 */
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1.  Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1 First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together

4.2 To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)

4.3 Call the function with the 'totals' array
*/

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips2 = []
const totals2= []

for(let i = 0; i<bills2.length; i++){
  tips2.push(calcTip(bills2[i]))
  totals2.push(tips2[i]+bills2[i])
}

console.log(tips2);
console.log(totals2);
const testy=[1,2,3,4]

const calcAverage2 = function (arr) {
  let sum = 0
  for(let i=0; i<arr.length; i++){
    sum += arr[i]
  }
  let ave = sum / arr.length
  return ave
}
console.log(calcAverage2(totals2));
console.log(calcAverage2(tips2));
console.log(calcAverage2(testy));

const calcAverageWithReuce = function (arr) {
  const intialValue = 0
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, intialValue)
  let ave = sum / arr.length
  return ave
}
console.log(calcAverageWithReuce(testy));
console.log(calcAverageWithReuce(totals2));




