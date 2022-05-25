/* To convert numerical strings to numbers use 'ParseInt()' and 'parseFloat()'
   Adding non-numerical characters can have unintended results
   parseFloat() is for floating point numbers (numbers with decimals)

   To convert numbers to numerical strings use 'toString()'
*/

let num1 = '150';

console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF'));

let flo1 = '1.50';
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

// Numbers after special characters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

// Using Template Literals
console.log(parseInt(`${1 + 1}`));

// Converting Numebrs to Strings
num1 = 150;
flo1 = 1.50;

console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());