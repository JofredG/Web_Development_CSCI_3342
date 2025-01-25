/////////////////////////////////////////////////////////
// JavaScript Exercises
/////////////////////////////////////////////////////////

console.log("Script has arrived");

/////////////////////////////////////////////////////////
// Objects, Dictionaries, and Associative Arrays
//
// (They're all the same thing)
//
// Write code according to the comments below.
//
/////////////////////////////////////////////////////////

console.log("-------------- Objects, Dictionaries, and Associative Arrays ---------------")

// create an array of three objects where each object has made up values for
//  name, age, and favorite_color
let person = {
  name : 'bob',
  age : '42',
  favority_color : 'pink',
};

console.log(person.name);

// change the age of the third object to 27 using associative array syntax

// using a for...of loop and object . notation, print the favorite colors

// using a for...in loop, print the property names in the first object in the array
// (i.e. name, age, favorite_color)

// using Object.keys, print the array of keys in the second object (no loop, the whole thing)

// using Object.values, print the array of values in the second object  (no loop, the whole thing)

console.log("-------------- Destructuring Bind and Spread Syntax ---------------")

// write a function that returns an array of three numbers

// call that function and use destructuring syntax to assign the numbers to three separate variables

// write a function that returns an object

// call that function and use destructuring syntax to assign the property values to separate variables

// write a function that takes two named parameters using destructuring syntax

// call that function by passing in an object

// using Object.entries and a for...of loop that destructures the [key, value] pair,
//  print the second object like:
// name: bob
// age: 32
// favorite_color: mauve

// using spread syntax, copy your object array and add a fourth object

// using spread syntax, make a copy of the third object in the array but with the name changed to 'batbatbat'

// write a function that uses spread syntax ("rest") to take a variable number of numbers and return the sum


console.log("this script is done")
