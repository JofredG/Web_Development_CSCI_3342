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
let people = [
    {
        name : 'bob',
        age : '42',
        favorite_color : 'pink',
    },

    {
        name : 'emily',
        age : '4',
        favorite_color : 'black',
    },

    {
        name : 'max',
        age : '82',
        favorite_color : 'green',
    }
];

console.log(people);

// change the age of the third object to 27 using associative array syntax
console.log(people[2].age);
console.log(`Changing the third persons age to 27`);
people[2].age = '27';
console.log(people);

// using a for...of loop and object . notation, print the favorite colors
console.log('using a for...of loop and object to print the favorite colors')
for (person of people){
    console.log(person.favorite_color);
}

// using a for...in loop, print the property names in the first object in the array
// (i.e. name, age, favorite_color)
console.log('using a for...in loop and object to print the favorite colors')
for (person in people){
    console.log(people[person].favorite_color);
}

// using Object.keys, print the array of keys in the second object (no loop, the whole thing)
console.log('Printing the keys of the second person');
console.log(Object.keys(people[1]));

// using Object.values, print the array of values in the second object  (no loop, the whole thing)
console.log('Printing the values of the second person');
console.log(Object.values(people[1]))

console.log("-------------- Destructuring Bind and Spread Syntax ---------------")

// write a function that returns an array of three numbers
function array(num1, num2, num3){
    let lst = [num1, num2, num3];
    return lst;
}
// call that function and use destructuring syntax to assign the numbers to three separate variables
let arr = array(1,2,3);
let [n1, n2, n3] = arr;
console.log(n1);
console.log(n2);
console.log(n3);

// write a function that returns an object
function prsn(name, age, favorite_color){
    let obj = {
        name : `${name}`,
        age : `${age}`,
        favorite_color : `${favorite_color}`
    };
    return obj;
}

function prsn(name, age, favorite_color) {
    return { name, age, favorite_color };
}

// call that function and use destructuring syntax to assign the property values to separate variables
let {name: pName, age: pAge, favorite_color: pFavorite_color} = prsn('Emmett', 21, 'Green');
console.log(pName);
console.log(pAge);
console.log(pFavorite_color);

// write a function that takes two named parameters using destructuring syntax
function twoParameters({name, age}){
    console.log(`${name}`)
}

// call that function by passing in an object
let Jofred = prsn('Jofred', 59, 'Blue')
twoParameters(Jofred)

// using Object.entries and a for...of loop that destructures the [key, value] pair,
//  print the second object like:
// name: bob
// age: 32
// favorite_color: mauve
for (const [key, value] of Object.entries(people[1])) {
    console.log(`${key}: ${value}`);
}

// using spread syntax, copy your object array and add a fourth object
const p = {...people[0], location: "Arkansas"};
console.log(p)

// using spread syntax, make a copy of the third object in the array but with the name changed to 'batbatbat'
p3 = {...people[2], name : "batbatbat"}
console.log(p3)

// write a function that uses spread syntax ("rest") to take a variable number of numbers and return the sum
function sum(...numbers){
    let summation = 0;
    for (let num of numbers){
        summation += num;
    }
    return summation;
}
console.log(sum(4,4,4,4))

console.log("this script is done")
