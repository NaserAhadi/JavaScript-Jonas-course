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
