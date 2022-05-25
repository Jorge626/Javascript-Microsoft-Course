/* Javascript types are a lot more simplistic and flexible compared to other languages
   Defined in a pseudodynamic way, types are defined by assignment, so we can reassign them
   Simple type system: Numbers, strings, booleans, dates, functions, array, and objects
   Only one type of number: float.
   Special Types: NaN, null, undefined
*/

/* Checking Types
   'typeof': returns a string of the data type primitive
   'instanceof': returns a boolean of if a value matches the data type 
*/
let x = 'something';
x = 1;
x = 1 + 'hello'; // is x a string or number?

// Equality Gotchas
// use '===' to type test
let y = 0 == ''; // true, type coerced
y = 0 === ''; // false, type respected

const people = ["Jorge", "Aaron", "Mel"];
const one = 1;
const str = "Hello World";
const b = true;

const person = {
    firstName: "Jorge",
    lastName: "Aranda"
};

function sayHello(person){
    console.log("Hello " + person.firstName);
}

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

// instanceof compares against instance constructor, we used literal values in declaration above
console.log("-- instanceof --");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

const newOne = new Number(1);
const newStr = new String("Hello World");
const newB = new Boolean(true);
console.log("-- Correct instanceof --");
console.log(newOne instanceof Number);
console.log(newStr instanceof String);
console.log(newB instanceof Boolean);