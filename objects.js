/*
    The real world is full of objects! 
    ex. book, song, library, playlist

    Real objects have associated attributes
    ex. book title, book author, book availability (at library)

    Real objects have associated actions
    ex. checkout the book (from library)

    JavaScript objects are:
    Representations of real world objects - using code!
    
    JavaScript objects have associated properties
    ex. book has title, author, isAvailable

    JavaScript objects have associated methods
    ex. You can checkIn, checkOut a book

    Object Syntax & Creation (literal)
    Collection of unordered name=value pairs!
    Think hashMaps (name is key, maps to value)

    This is an example of an object literal
    It's the easiest way to create a JavaScript object at definition
    Just enclose name-value pairs in { } seperated by commas

    You can also create objects in other ways
    Ex. Using "new" with an object or function constructor

    Object Creation (constructor)
    Think of constructors as "templates" Create instances using the "new" keyword
    Create instances using the "new" keyword
    Object is the 'template' for a base or vanilla object

    Once constructed, you can add or modify the properties and methods just as before
    Objects created wtih "new" act just like those from literals
    We won't cover function constructors or object prototypes
    (for inheritance) in this module - do look them up!

    Object Properties (attributes)
    Properties have immutable names and mutable values
    Naming uses the same conventions as variables

    Acces Approach 1: Dot notation
    Use <object>.<name> (like with namespaces)
    ex. book.title gives "1984 in the examples below"

    Access Approach 2: Bracket notation
    Use <object>["name"] (like with hashmaps)
    ex. book["title"] gives "1984 in the examples below"

    Methods are special properties whose values are function definitions
    They are used to define tasks that operate on object data

    Access methods just like properties
    ex. book.checkIn gives [Function: checkIn]
    ex. book["checkIn"] gives [Function: checkIn]

    Invoke methods just like functions
    ex. book.checkIn() executes that method
    ex. book["checkIn"]() does likewise

    The "this" keyword(context)
    Functions need access to runtime context.
    (Object) methods may need access to peer property values
    (Standalone) functions may use global variables in execution

    "this" maps to relevant context at runtime
    Maps to enclosing object - for object methods
    Maps to global object - for standalone functions
    May be undefined (strict mode) or changed (e.g., use apply)

    About the global object
    defaults to window object in browser runtime
    defaults to global object in Node.js runtime
    use "globalThis" to reference the global object consistently
*/

// Demo
// Simple object
const blank = { };
console.log("Blank type: ", typeof blank)
console.log("Blank value: ", blank)

// Object creation
const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false,

    checkIn: function(){
        this.isAvailable=true;
    },
    checkOut: function(){
        this.isAvailable=false;
    }
};
console.log("Book type:",typeof book);
console.log("Book value:\n", book)

// Constructor
const data = {title:"1984", author:"George Orwell"}
const bookConstruct = new Object(data);
console.log("Book type:", typeof bookConstruct);
console.log("Book value:\n", bookConstruct)

bookConstruct.title = "1984";
bookConstruct.author = "George Orwell";
bookConstruct.isAvailable = false;
bookConstruct.checkIn = function(){
    this.isAvailable=true;
};
bookConstruct.checkOut = function(){
    this.isAvailable=false
};
console.log(typeof bookConstruct)

// Accessing properties and methods
console.log(book.author); // Dot notation
book.author= "G. Orwell";
console.log(book);

console.log(book["author"]); // Brackets notation
book["author"]="George Orwell";
console.log(book);

console.log(book.isAvailable);
book.checkOut();
console.log(book);

console.log(book.isAvailable);
book["checkIn"]();
console.log(book);

// this
const bookObj = {
    checkIn: function(){
        return this;
    }
}
console.log("\n\nthis is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === globalThis);
console.log(bookObj.checkIn() === bookObj);

function anotherCheckIn(){
    return this;
}

console.log("\n\nthis is: ", anotherCheckIn());
console.log(anotherCheckIn() === globalThis);