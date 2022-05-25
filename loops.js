/*
    Loops in JavaScript
    Execute code multiple times : Hard coded value, Iterate through a list, While somethihng is true
    Common loop types: while, for, for ... of

    Selecting the right loop:
    while loops: Calling a function which returns false or null when completed
    for loops: Looping a known number of times
    for ... of loops: Iterate through an Array/Collection
*/

const names = ['Jorge', 'Sarah', 'Justin'];
let whileIndex = 0;
while (whileIndex < names.length) {
    const name = names[whileIndex];
    console.log(name);
    whileIndex++;
}

for (let forIndex = 0; forIndex < names.length; forIndex++){
    const name = names[forIndex];
    console.log(name);
}

for (const name of names) {
    console.log(name);
}
