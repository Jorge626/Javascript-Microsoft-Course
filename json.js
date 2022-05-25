/*
    JavaScript is used extensively in modern web development
    Client-Server. JavaScript runs in the browser and "talks" 
    to remote servers over a network

    Many communication protocols and storage systems rely on text
    Requirements. Data should be transferable in text format,
    easy for humans to read (debug)

    JSON = JavaScript Object Notation
    Language independent and user-readable. 
    Depends only on 2 data structures taht are found in all modern
    programming languages

    1. Collection of name-value pairs
    Comparable to objects. Think of JavaScript object properties "stringified"

    2. Ordered list of values
    Comparable to arrays. Think ability to pack collections of objects into single file
    for transfer

    JSON Format:
    Data in name-value pairs that are seperated by commas
    ex. name-value pairs within an object, objects within an array - seperated by commas
    
    { } enclose single objects
    ex. a single books

    [ ] enclose multi-item arrays
    ex. a collection of book copies

    JSON.stringify:
    Serialize a JavaScript Object into an equivalent text string
    ex. stringify "book" object to a JSON string for network transfer or file storage

    Serialize a collection of JavaScript Objects into an ordered list
    ex. stringify "array" of objects to a JSON string for transfer or file storage

    JSON.parse()
    Deserialize a JSON-formatted text string into a JavaScript object
    ex. reverts the previously-created string into a JavaScript object literal with
    related properties to restore object methods, define constructors

    Deserialze a JSON-formatted text string into a JavaScript array
    ex.reverts the previous-created string into a JavaScript array with list order preserved
*/

// Object format
const book = new Object ({
    title: "1984",
    author: "George Orwell",
    isAvailable: false 
});

console.log("\n ----------");
console.log(typeof book);
console.log(book);

const myBooks = [
    new Object({title: "1984", author: "George Orwell"}),
    new Object({title: "Becoming", author: "Michelle Obama"}),
    new Object({title: "Snow Crash", author: "Neal Stephenson"}),
    new Object({title: "Predictably Irrational", author: "Dan Arnold?"})
];

console.log("\n ----------");
console.log(typeof myBooks);
console.log(myBooks);

// Converted to JSON
console.log("\n ----------");
let bookJSON = JSON.stringify(book);
console.log(typeof bookJSON);
console.log(bookJSON);

console.log("\n ----------");
let myBooksJSON = JSON.stringify(myBooks);
console.log(myBooksJSON)

let data = bookJSON;
let parsed = JSON.parse(data);
console.log("\n ----------");
console.log(parsed);
console.log(Array.isArray(parsed))
console.log("Num items: ".parsed.length);

data = myBooksJSON;
parsed = JSON.parse(data);
console.log("\n ----------");
console.log(parsed);
console.log(Array.isArray(parsed))
console.log("Num items: ".parsed.length);
console.log("Author of 2nd book: ".parsed[1].author);
