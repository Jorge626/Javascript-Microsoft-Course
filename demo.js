/* Three ways to save variables: var, let, const
var is function scoped, can be changed in scope, and is available after declaration. Also mutable
let is block scoped, can be changed in scope, only available after declaration 
const is block scoped, cannot be changed, only available after declaration

use 'cons't by default, 'let' in loops,'var' not as useful? */
console.log(hello)
var hello = "Hello";
console.log(hello);
hello = "Hello World";
console.log(hello);


// error if console.log(world); is before let world = "Hello world";
if (true) { 
    let world = "Hello World";
    console.log(world);
}
// console.log (world); 

const jorge = "Jorge";
console.log(jorge);
//jorge = "Jorge Aranda"