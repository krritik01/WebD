console.log('Hello EVERYONE 4.0'); 

let a='5';
console.log(a);

let b='ritik';
console.log(b);

let c=true;
console.log(c);

var d=5;
console.log(d);

var d=5;
console.log(d);

// Dynamic Typed- JavaScript is dynamic typed means variable in javascript are not directly associated with any particular value.Below is the example-

let firstname='Ritik';
console.log(firstname);

firstname=5;
console.log(firstname);

firstname=true;
console.log(firstname);


// Objects-It is a collection of variable
let person={
    firstName:'Ritik',
    age:21
};
// if we only want to access age we do this
console.log(person.age);
// if we only want to access name we do this
console.log(person.firstName);
// But if we  want to access all property we do this
console.log(person);

// if we want to change the firstName we do 
person.firstName='Kundan';
console.log(person.firstName);
// we also use bracket to acces properties 
console.log(person['age']);



// Array-In JavaScript, array is a type of data structure used to contain list of item. We store int,bool,string in a single array.
let names=['Ritik','Ravi','Rajeshwar','Shailendra'];
 console.log(names);
//  If we want to change names in javascript we use indexing
 names[1]='Abhinav';
 names[0]='Nilesh';
 names[2]='54';
 console.log(names);
 console.log(names[0]);
 console.log(names[1]);
 console.log(names[2]);
 console.log(names[3]);


//  Functions - It is a set of statement that either performs a task or calculate and return a value 
function secondname(){
    console.log('hello world');
}
// This is how we call the function in javascript
secondname();

// Concatenation of function
function ritik(name,lastname){
    console.log('Hello' + ' ' + name + ' ' + lastname)
}
ritik('Ritik','Kumar');

// Types of function
// Calculating a value
function square(number){
    return number * number;
}
// let n=square(4);
// console.log(n);
console.log(square(4));

// Ternary Operator
let age=17;
let status =(age>=18)?'I can drive':'I can not drive';
console.log(status);

// Exponential operator
let bar = 5;
bar =bar** 2;
console.log(bar);

// Comparision operator
 const num1=5;
 const num2=7;
 const result=num1<num2;
 console.log(result);

//  Logical AND operator
let t=9;
let g=7;
let z=t>5&&g>6;
console.log(z);

let q=9;
let w=7;
let e=t>5&&g<6;
console.log(e);

//  Logical OR operator

let r=9;
let y=7;
let u=t>9||g>6;
console.log(u);


//  Logical NOT operator
let i=5;
let f=i<6;
console.log(!f);

// Bitwise operators treat its operands as a set of 32-bit binary digits (zeros and ones) and perform actions.

// Bitwise AND operator-
let s = 12; 
let  j = 25; 
let l = s & j; 
console.log(l); 

// Bitwise OR Operator
let h= 2; 
let k= 1; 
n=h|k; 
console.log(n);

// Conditional Statement
// IF-ELSE statement
let marks=101;
if(marks==99){
    console.log('Passed');
}
else if(marks>99){
    console.log('Tu topper hai');
}
else{
    console.log('Padh le bhai');
}

// Switch case
let num=6;
switch(num){
    case 1: console.log('A')
    break;
    case 2: console.log('B')
    break;
    case 3: console.log('C')
    break;
    case 4: console.log('D')
    break;
    case 5: console.log('E')
    break;
    default:console.log('Enter the right value');
}

// LOOPS

// For loop
for(let i=0;i<5;i++){
    console.log(i);
}

for(let i=0;i<5;i++){
    console.log(i + ' ' + 'Ritik');
}

// While Loop
let m=0;
while(m<5){
    console.log(m)
    m++;
}

// Do while loop
var n=0;
do{
    console.log(n);
    n++
}
while(n<5);


// Q1 find the type of javascript

let o='tttt';
console.log(o);
console.log(typeof o);



 




