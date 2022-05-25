/* 
    JavaScript supports common operators: <, <=, >, >=
    JavaScript automatically converts data types in many instances: can lead to bugs
    Two comparison operators available
    == checks for equality regardless of data type
    === checks for equal values and data types
    Best practice, always use ===
    != checks for non-equality regardless of data type
    !== checks for non-equal values and data types
    Best practice, always use !==
*/

const status = 200;
if (status === 200) {
    console.log('OK!');
}
else if (status === 400){
    console.log('Error!');
}
else {
    console.log('Unknown status')
}

// no { } needed if using single line of code
if (status === 200) console.log('OK!');
else if (status === 400) console.log('Error!');
else console.log('Unknown status');

// Ternary (instant)
const message = (status === 200) ? 'OK!' : 'Error!';