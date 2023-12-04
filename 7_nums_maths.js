const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(1)); //The toFixed() method of Number values formats this number using fixed-point notation.

const ootherNumber=23.8866;
console.log(ootherNumber.toPrecision(3));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // The toPrecision() method of Number values returns a string representing this number to the specified precision.


const hundreds = 1000000
console.log(hundreds.toLocaleString()); //US standards  //The toLocaleString() method of Date instances returns a string with a language-sensitive representation of this date. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.
console.log(hundreds.toLocaleString('en-IN')); //Indian standards


// *****************Maths************************
//The Math namespace object contains static properties and methods for mathematical constants and functions.

console.log(Math);
console.log(Math.abs(-4)); //The Math.abs() static method returns the absolute value of a number. In this negative value only become positive

console.log(Math.round(4.3)); //The Math.round() static method returns the value of a number rounded to the nearest integer. 

console.log(Math.ceil(4.2));  //The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number. Choose top value

console.log(Math.floor(4.2));  //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.


console.log(Math.min(4,8,3,6,9));  //returns min value
console.log(Math.max(4,8,3,6,9));  //return max value


console.log(Math.random()); //gives value between 0 and 1
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10) + 1);


const min =10;
const max=20;
console.log(Math.floor(Math.random() * (max-min+1))+min)
// ----->The expression Math.floor(Math.random() * (max-min+1))+min generates a random integer between min and max, inclusive.

// --->Here is a breakdown of the expression:

// ->Math.random() generates a random number between 10 and 20, exclusive.

// ->Math.floor() rounds a number down to the nearest integer.

// ->(max-min+1) calculates the range of possible values between min and max.

// ->+min adds min to the result of Math.floor(Math.random() * (max-min+1)), ensuring that the result is always greater than or equal to min.