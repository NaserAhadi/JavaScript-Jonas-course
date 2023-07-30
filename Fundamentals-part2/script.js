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

function fruitProccessor(apple, orange){
    const juice = `Juice with ${apple} apples and ${orange} oranges.`
    return juice
}

const appleJuice = fruitProccessor(5,0)
console.log(appleJuice);

const appleOrangeJuice = fruitProccessor(2, 4)
console.log(appleOrangeJuice);