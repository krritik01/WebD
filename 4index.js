console.log('Heeloo');
let lastName='Chaudhary'; // this is normal string means primitive

// if we want to treat above primitive string as object we use . 
lastName.length;
lastName[0]; // it print the value of lastName at index 0 which is C
lastName.includes('Cha'); // it check that last name start with Cha
lastName.startsWith('Ritik');
lastName.startsWith('Chaudhary');
lastName.endsWith('Ritik');
lastName.endsWith('ik');
lastName.toUpperCase(); // it changes lastName to uppercases
lastName.toLowerCase(); // it changes lastName to lowercase


let firstName= new String('Ritik');  // this is how we made object string

let message='this is my first message';
// if we want to split words we use .split
let words=message.split(' ');
console.log(words);

// Template literal
let Message =
`hello Ritik
Thanks for the offer
Best Regards
Chaudhary\n`;
console.log(Message);
// To make is dynamic we use $ sign
//  \n for line break
`hello ${firstName};
Thanks for the offer
Best Regards
Chaudhary`;
console.log(Message);


// Date and Time Object
// four ways to create Dates

// i)new Date()
// ii)new Date(milliseconds)
// iii)new Date(Date string)
// iv)new Date(year, month, day, hours, minutes, seconds, milliseconds)

// i)new Date()
let timeNow = new Date();
console.log(timeNow); // shows current date and time

// ii)new Date(milliseconds)
const time1 = new Date(0);
console.log(time1); // Thu Jan 01 1970 05:30:00

const time2 = new Date(100000000000)
console.log(time2); // Sat Mar 03 1973 15:16:40

// iii)new Date(Date string)
let date = new Date("2020-07-01");

// the result date will be according to UTC
console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545

// iv)new Date(year, month, day, hours, minutes, seconds, milliseconds)
const time3 = new Date(2020, 1, 20, 4, 12, 11, 0);
console.log(time3); // Thu Feb 20 2020 04:12:11

// if we want to do some changes we use constructor for that
 time3.setFullYear(2023);
 time3.setMonth(5);
 time3.setDate(2);
 console.log(time3);










