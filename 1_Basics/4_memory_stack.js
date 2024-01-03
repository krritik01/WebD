// Memory are of two types-:

// Stack Memory - Used in primitive type - Whenever stack memory is used we get a copy of declared variable. Original value does not change

// Heap Memory  - Used in reference type(Non-primitive type) - Whenever heap memory is used we get reference of original value. Original value change

let myYoutubename = "TechNoCode"

let anotherName=myYoutubename;

anotherName="coffeeWithCode"

console.log(myYoutubename);
console.log(anotherName);