/////////////////////////////////////////////////////////
// JavaScript Exercises
/////////////////////////////////////////////////////////

console.log("Script has arrived");

/////////////////////////////////////////////////////////
// Functions and Scope
//
// JavaScript code relies heavily on first-class functions
// that are passed around and called in reponse to
// different events. The newer => syntax helps facilitate
// this.
//
// Write code according to the comments below.
//
/////////////////////////////////////////////////////////

console.log("-------------- First-Class Functions ---------------")

// write a normal named function definition that takes two numbers and returns the sum
function add(a, b){
    let sum = a + b;
    return sum;
}

// declare a variable and assign it that function
let add2numbers = add;

// call the function through the variable and print the result
console.log(add2numbers(2,3));

// write an anonymous version of the same function using the "function" syntax
// call it and print the result
(function (a, b){
    console.log(a + b);
})(4, 5); 


// write a => version of the same function (still using {} and return)
// call it and print the result
const addition = (a, b) => {
    return a + b;
};
console.log(addition(8,8))


// write a => version of the same function (with an expression body instead)
// call it and print the result
const addit = (a, b) => a + b;
console.log(addit(9,9));

// write a => function that takes a string and return another => function that prints that string
// the internal function should *not* take the string as a parameter, since the variable is
//  already in scope
// call the initial function to get the callback, then call that to print the string
const strFunc = (string) => () => console.log(string);

const scenario = strFunc('Some particular scenario');
scenario();

// write and call a => function that takes a string and uses setTimeout to print that
//  string 1000ms later
input = process.stdin;
setTimeout(() => {
  console.log("Waited 1000 ms");
}, 1000);


console.log("this script is done")
