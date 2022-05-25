/* 
   Time is a JavaScript object
   One central object - Date
   Contains both date and time: Internally time is stored as a number of milliseconds since 1 Jan 1970
*/

// get right now
const now = new Date();

// set a specific date and time
// month counting starts with zero!
const randomDate = new Date(2015, 3, 12, 6, 25, 58);

// set a specific date - time set to midnight
const win95Launch = new Date(1995, 7, 24);

console.log(randomDate);
console.log(win95Launch);

// Setting values
now.setFullYear(2022); // sets year
now.setMonth(4); // May (counting starts at 0)
now.setDate(24); // sets dat

now.setHours(14); // 24 hour clock
now.setMinutes(43);
now.setSeconds(46);

console.log(now);

// Getting values
const now2= new Date();
console.log(now2.getMonth()); // all of the set functions have get
console.log(now2.getTime()); // milliseconds since 1 Jan 1970
console.log(now2.getDay()); // day of the week (Sunday = 0)

// Demo
const demoNow = new Date();
console.log(now);
console.log(win95Launch);
 
const demoDate = new Date();
demoDate.setMonth(0);
console.log(demoDate);

console.log(`Day of week: ${demoDate.getDay()}`);
console.log(`Date ${demoDate.getDate()}`);
