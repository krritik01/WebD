console.log('hello');
// function declaration
function run(){
    console.log('running');
}
// function call or invoke
run(); 

//Named  function assignment
let talk=function walk(){
    console.log('walking');
}
talk();
//Anonymous function assignment
let talk2=function(){
    console.log('walking2');
}
talk2();

function sum(a,b){
    console.log(arguments); // this is object not an array
    return a+b;
}
console.log(sum(1,4));

function sum(a,b){
    let total=0;
    // applying for loop
    for(let value of arguments)
    total=total+value;
    return total;
}
let ans=sum(1,2,4,5,6);
console.log(ans);

// Rest parameters
function sum(...args){
    console.log(args);
}
sum(1,2,4,5,6,7);

// Default parameter
function intrest(p,r=6,y=7){
    return p*r*y/100;
}
console.log(intrest(1000));
console.log(intrest(1000,9));
console.log(intrest(1000,10,12));

// Gettter and Setter
// getter->access properties
// setter->change or mutate or update properties
let person={
    fName:'Ritik',
    lName:'Kumar',

    get fullName(){
        return `${person.fName} ${person.lName}`;
     },
    set fullName(value){
        let parts = value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
        } 
};
console.log(person.fullName);
person.fullName='Rahul Singh';
console.log(person.fullName);
// console.log(person);
// Now to try to print full name uisng function using backtick
// function fullName(){
//     return `${person.fName} ${person.lName}`;
//  }
// /the above function is read only function we can not update. So for updatation we use get keyword
//  console.log(fullName());


// Error Handling
// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.

let person1={
    fName:'Ritik',
    lName:'Kumar',

    get fullName(){
        return `${person1.fName} ${person1.lName}`;
     },
    set fullName(value){
        if(typeof value !== String){
        throw new Error("Not a String");
    }
        let parts = value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
        } 
};

try{
    person1.fullName='Rahul Singh';
}
catch(e){
    alert(e);
}
console.log(person1.fullName);


// Sorting
let a=[1,3,10,6,7];
a.sort(function(a,b){
    return a-b;
}) 
console.log(a);

// Reducing an Array
let arr=[2,4,5,6,7];
let total=0;
for(let value of arr)
total=total+value;
console.log(total);
// Another method for doing this sum is reducing method
let arrr=[2,4,5,6,7];
let totalSum=arrr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(totalSum);



// Scope->Scope determines the accessibility (visibility) of variables.
// JavaScript has 3 types of scope:
// Block scope
// Function scope
// Global scope


//  Block scope
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:
{
    let x = 2;
  }
  // x can NOT be used here

//   Variables declared with the var keyword can NOT have block scope.
{
    var x = 2;
  }
  // x CAN be used here



//   Local Scope
//   Variables declared within a JavaScript function, become LOCAL to the function.
// code here can NOT use carName
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  // code here can NOT use carName
//   Local variables have Function Scope:
//   They can only be accessed from within the function.


// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}
// A global variable has Global Scope:
// All scripts and functions on a web page can access it.
// Variables declared with var, let and const are quite similar when declared outside a block.
// They all have Global Scope:



// Printing Square Star Pattern in Javascript

let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);








































































































































