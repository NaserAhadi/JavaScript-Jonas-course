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
