/*
    What are functions?
    A block of code that executes using a series of instructions

    Why are functions useful?
    Readability & Conciseness : Say a task takes 10 lines of code and is 
    used 5 times in your program. Reduce code size, make functionality clear
    Maintainability: Need to fix a bug in execution statements?
    Or change the execution code?
    Do this in one place (not 5 seperate places)

    Function Naming: 
    Like variable name conventions: Use alphabets, numbers, $ and _
    No other special characters allowed
    ex.
    function sayHello$() { } // valid
    function say-Hello() { } // invalid

    Function ".name" property
    Returns the name of the function
    Returns "anonymous" for anonymous functions

    Functions Parameters:
    Placeholders for input values. Are optional. Zero-parameter functions exist!
    When invoked, parameters are replace by data
    values (arguments) for actual function execution
    Argument type/number are not checked against definitions
    Missing values will be set to undefined!
    This can have unanticipated results if you don't validate your arguments within
    the function.

    Function Return:
    Exit point for functions. 
    The return statement is optional. There is an implicit return 
    after the last statement defined within the { }

    Use return statements to return relevant output (results) to the invoker
    Example: return true if the first argument is larger than the second; else return false.

    If no return statement is defined, the returned result is undefined
*/

function printThanks(){
    console.log("Thanks for shopping!");
    console.log("Discounts expire Dec 1!");
}
printThanks();

function computePrice(cost, discount){
    console.log(cost, " ", discount)
    let reduction = cost * discount;
    console.log("You saved $" + reduction);
    console.log(cost, discount, reduction);
    return cost - reduction;
}
let result = computePrice(100);
result = computePrice(100, 0.10);

function printHello(name) {
    console.log("Hello " + name + "!" );
}
printHello("World");