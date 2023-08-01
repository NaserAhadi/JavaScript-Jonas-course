// ** 2. Activating Strict Mode **//
// 'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense=true;
if(hasDriversLicense) console.log('I can drive :D')


// ** 3. Functions **//
function logger(){
    console.log('my name is Naser');
}

// calling/ invoking/ running function
logger()
logger()
logger()

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
function calcAge1(birthYear){
    return 2037 - birthYear
}
const age1 = calcAge1(1990)

// Function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear
}
const age2 = calcAge2(1990)
console.log(age1, age2)

//** 5. Arrow Functions **/
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1990)
console.log(age3)

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return retirement
}
console.log(yearsUntilRetirement(1990))

const yearsUntilRetirementWithName = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirementWithName(1990, 'Naser'))
console.log(yearsUntilRetirementWithName(1991, 'Jonas'))


// ** 6. Functions Calling Other Functions **//
function cutFruitPieces(fruit){
    return fruit * 4
}

function fruitProccessor(apple, orange){
    const applePieces = cutFruitPieces(apple)
    const orangePieces = cutFruitPieces(orange)

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice
}

console.log(fruitProccessor(2,3));