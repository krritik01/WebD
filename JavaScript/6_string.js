// In JavaScript, a string is a primitive data type.

// Strings, numbers, booleans, null and undefined are primitive data types in JavaScript, whereas anything that is an Object is a non-primitive data type in JavaScript.

const name = "Ritik"
const repoCount = 15;

// Better method for concatenation is to use backtick (` `)
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

//String is also object in JavaScript

const gameName = new String("Ritik-ritik-chaudhary");

console.log(gameName[0]);
// Method in JavaScript 
// Lots of methods are available
console.log(gameName.__proto__);

console.log(gameName.length);    // know the length

console.log(gameName.toUpperCase());   // convert all to uppercase

console.log(gameName.charAt(2));   // which character at this index
console.log(gameName.indexOf('t'));    // which index number at this character

const newStirng = gameName.substring(0, 4)
console.log(newStirng);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "      Ritik        "
console.log(newStringOne);
console.log(newStringOne.trim());   // The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.


const url = "https://ritik.com/ritik%20choudhary"
console.log(url.replace('%20', '-'))    // The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.


console.log(url.includes('Ritik'))  // The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

console.log(gameName.split('-'))  //The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

