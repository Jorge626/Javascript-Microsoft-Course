/*
    List, or collection of values: Arrays can contain many different values of different datat types
    Each value has an index: An index is a unique numerical value that represents the value in the array
    Array Length: After an array is created, you can check its length at any time with arrayName.length
*/

let arrayLength = 5;
let arr1 = [];
let arr2 = Array(arrayLength);

console.log(arr1.length)
console.log(arr2.length)

/*
    Adding Data to an Array
    During array creation: You can create an array with data in one statement

    After array creation: You can add data to an array after its been created
    This method requires assigning the value to an index
    Indexes that may already have a value will be overwritten
    Keeping track of array's length is important if it has a fixed length'

    Values in an array can be accessed by its index
*/

arr1 = ["A", true, 2];
console.log(arr1[0]);
console.log(arr1[1]);

arrayLength = 2;
arr2 = Array(arrayLength);
arr2[0] = "Value at index 0";
console.log(arr2[0]);
console.log(arr2[1]); // No value present at index

/*
    Length: Sum of spaces that have been allocated for values in the array
    Index: Numerates values or spaces in array, starting at 0
    Length will always be larger than the index: Because of the index starts at 0
    Index of the last item in the array will be the length, subtracted by 1
*/

console.log(arr1.length);
console.log(arr1[3]); // Doesn't exist
console.log(arr1[2]); // Last index of array
console.log(arr1[arr1.length] - 1); // Equals 2

/*
    Manipulating Arrays
    Push and Pop : Affects end of the array
    array.push(values) adds one or more value to end of array and returns its length
    array.pop removes value from end of array and returns removed value

    Shift and Unshift : Affects front of array
    array.shift() removes value from front of array and returns removed value
    array.unshift(value) adds one or more value to front of array and returns its new length

    Concat : Joins two arrays to make a new array
*/

console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop()); // Removes last value
console.log(arr1);

console.log(arr1.unshift("new value"));
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);

let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1, 2, 3]);
console.log(newArr);
console.log(newArr2)