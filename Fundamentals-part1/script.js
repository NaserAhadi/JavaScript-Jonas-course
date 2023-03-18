// ** 5.Values and Variables ** //

let js = 'amazing'
// if(js==='amazing') alert('JavaScript is Fun!')

console.log(40+22-24);

// declaring variables
let firstName = 'Naser'
console.log(firstName);

// variable name can not start with number
// let 3years = 3;

// variable names contain only: letters, numbers, under score(_) and dollar sign($)
// let my&variable = 'test'
let my_variable$ = 'that ok'

// variable names should not be JavaScript reserved keyword like: new, function, name, etc.
// let function ='something'
// let new ='something'
let name = 'my name'
console.log(name);

// variable names should NOT start with uppercase(it's not illegal but it's a convention)
let Person = 'someone'
// we choose all in uppercase letters for constant that we know will never change like: the number PI =3.1415 (convention)
let PI = 3.1415

// variable names should be descriptive
// when you name a variable, it should be easy to understand what value the variable is holding.
// more descriptive variables
let myFirstJob = 'Civil Engineer'
let myCurrentJob = 'Programmer'
// less descriptive variables
let job1 = 'Civil Engineer'
let job2 = 'Programmer'

// ** 7.Data Types ** //

/* 
example of javascript dynamic typing:
first we assign a boolean to a variable and then reassign it with a string and everything is ok,
just because of javascript dynamic typing feature.
*/
let javascriptIsFun = true
console.log(javascriptIsFun);
console.log('type of javascriptIsFun:',typeof javascriptIsFun);

javascriptIsFun = 'YES'
console.log('type of javascriptIsFun:',typeof javascriptIsFun);

console.log(typeof 23);
console.log(typeof 'Naser');
// when declare an empty variable, its value and type both are undefined!.
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

// bug of type of null: typeof null should return null but it return object!!
console.log(typeof null);  // object


// ** 8.let, const and var ** //
const birthDay = 1990;
// birthDay = 1991 // we get type error: Uncaught TypeError: Assignment to constant variable.
// const job; // Uncaught SyntaxError: Missing initializer in const declaration

lastName = 'Ahadi'
console.log('lastName: ',lastName) // Ahadi

