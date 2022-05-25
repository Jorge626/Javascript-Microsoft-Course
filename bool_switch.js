/*
    Other Boolean notes
    Implicit false values:
    Strings
        Empty strings test as false
    Objects
        Null or undefined objects test as false
    Numebrs
        0 tests as false
    
    Use '!' to reverse the result

    Strings are case sensitive:
    Convert to upper or lower case
    Consider using localeCompare

    Combining comparisons
    And (both sides must be true)
    (x & y)
    (x && y)
    Or (either side can be true)
    (x | y)
    (x || y)

    Shortcut operators && and || : Stops evalution if the answer is already known
    (x && y) // y not evaluated if x is false because the answer is false
    (x || y) // y not evaluated if x is true becuase the answer is true

    Best practice is always && and ||
*/

// Demo
console.log('-- implicit false demo --')
const name = '';
if (name) {
    console.log('We have a name!');
} else {
    console.log('We have a name')
}

console.log('-- case sensitive demo --')
const statusDemo = 'error';
if (statusDemo.toUpperCase() === 'ERROR') {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}
if (statusDemo === 'ERROR') {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}

const status = 200;
console.log('-- and sensitive demo --')
if (status === 200){
    console.log('OK!');
} else if (status === 400 || status === 500){
    console.log('Error!');
} else {
    console.log('Unknown status');
}

console.log('-- switch sensitive demo --')
const status2 = 500;
switch (status2) {
    case 200:
        console.log('OK');
        break;
    case 400:
    case 500:
        console.log('Error');
        break;
    default:
        console.log('Unknown value');
        break;
}