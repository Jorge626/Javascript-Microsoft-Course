/*
    Arrows: '=>'
    Sometimes called 'fat arrow functions'
    Changes to the 'this' context
    Support implicit return values
    Must be assigned to a variable, or immediately used
    Reduction in characters typed

    'this' context:
    Inherited from parents scope
    Cannot be changed
    Maintained when function is passed as a reference\

    Implicit Return
    Single line functions return statement result
    Use { } to introduce multiple lines
*/

const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(2, 1)); // 1