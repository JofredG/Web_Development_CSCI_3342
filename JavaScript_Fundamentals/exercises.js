/////////////////////////////////////////////////////////
// JavaScript Exercises
/////////////////////////////////////////////////////////

console.log("I...am...JAVASCRIPT!");

/////////////////////////////////////////////////////////
// CS 1 in a dozen(ish) questions
//
// These exercises assume you are familiar with a c-style
// language like C++, Java, or C# and introduce JavaScript
// by contrast to those languages.
//
// Write code according to the comments below. If anything
// causes an error on purpose, comment your code out once
// you see the error.
//
/////////////////////////////////////////////////////////

console.log("-------------- Data and Variables ---------------")

// declare two constants and assign them floating point values
    const a = 3.14;
    const b = 5.31;
// declare two variables and assign them floating point values
    let c = 8.42;
    let d = 9.67;
// calculate the average of those values and output to the console using a *template literal*
//  (the `` notation)
// for example, "The average is 3.4" 
    console.log(`The average is ${ (a + b + c + d) / 2 }`);

    console.log("-------------- Control Structures ---------------")

    function is_false_y(input){
        if(input){
          console.log(`${input} is true`)
        }
        else{
          console.log(`${input} is false`)
        }
      }

// write if statements to print out whether each of the following values is "false-y" (evaluates to false)
//  positive number, negative number, zero
    is_false_y(5);

    is_false_y(-5);

    is_false_y(0);

//  empty string "", blank string "  "
    if(""){
      console.log("empty string is true");
    }
    else{
      console.log("empty string is false");
    }

    if("  "){
      console.log("blank string is true");
    }
    else{
      console.log("blank string is false");
    }




//  null, NaN, Infinity, undefined
    is_false_y(null);

    is_false_y(NaN);

    is_false_y(Infinity);

    is_false_y(undefined);

//  an undefined variable
    let x;
    console.log(`undefined variable "x" aka `);
    is_false_y(x);

// write a for loop that prints the numbers from 0 to 10
    console.log("Count 0 - 10 inclusive:")
    for(let i=0; i<=10; i++){
      console.log(i);
    }

// write a while loop that counts down from 20 to 0 by threes
    console.log("Count down 20 - 0 by threes inclusive:")
    for(i=20; i>=0; i = i-3){
      console.log(i);
    }

console.log("-------------- Functions ---------------")

// write a function that takes two parameters and returns their sum
function add (a, b){
  return a + b;
}

// call it with one argument and print the result
console.log(add(4));
// call it with two arguments and print the result
console.log(add(4,5));
// call it with three arguments and print the result
console.log(add(4,5,6));

console.log("-------------- Arrays ---------------")

// declare an array of 5 integer values ranging from -10 to 10
let lst = [-8, -7, 0, 1, 3];

// change the third value in the array to -17 and print the array
lst[2] = -17;
console.log(`Changed the third value in the array to ${lst[2]}`);

// write a for...in loop over the array and print each value (each value that is "bound" to the specified variable)
// often used for objects but also works with arrays/lists
for (num in lst){
    console.log(num);
}

// write a for...of loop over the array and print each value
for (num of lst){
    console.log(num);
}

// use the array.sort method to sort the array and print it
lst = lst.sort();
console.log(lst);

// use the array.join method to create a comma-separated string from the array and print it
lst = lst.join();
console.log(lst);

console.log("This script is done.")
