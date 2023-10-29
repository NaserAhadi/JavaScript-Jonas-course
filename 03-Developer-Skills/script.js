// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
const xycbzd = 'dsjks';

if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log('x', x);
console.log(xycbzd);

// Todo Highlight extension:
// FIXME:
// INFO:
// WARNING:
// NOTE:
// TODO:
// TODO(string):

// 4. Installing Node.js and Setting Up a Dev Environment
console.log(calcAge(1990));
console.log('testing');
console.log('test 2');

// 5. Learning How to Code

// 9. Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    // value: prompt('Degrees celsius:'),
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIYFY
// console.log(measureKelvin());

// 10. Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
days ... 21oC in 2 days ... 23oC in 3 days ..."

Test data:
Data 1: [17, 21, 23]
Data 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ... ${arr[i]}*C in ${i + 1} days`;
    if (i === arr.length - 1) str += ' ...';
  }
  // console.log();
  return str;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
