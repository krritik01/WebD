console.log('Hello');
// creating an Array
let number =[1,3,5,6,8];
console.log(number);

// Adding an element in Array
// Insertion at end
number.push(9);
console.log(number);
// Insertion at begin
number.unshift(10);
console.log(number);
// Insertion at middle
number.splice(2,0,'a','b','c');
console.log(number);


// Finding or Searching an Element
 console.log(number);
 console.log(number.indexOf(8));

//  Number exist in an array or Not
if(number.indexOf(8) !=-1);
console.log("Present");
// But this is not a good way to identify
// Optimal method is 
console.log(number.includes(5));

console.log(number.indexOf(3,6));
// In this we search 3 is available in arrry or not but the index start with 6 so it gives -1 as output

 
// Now apply all these in reference
let course =[
    {no:1,namee:'Ritik'},
    {no:2,namee:'kumar'},
]
console.log(course);

// Searching
// we can not do searching using courses.indexOf({no:1, name:'Ritik'}) in this

// In reference or object type searching we use callback function
let coursees = course.find(function(coursees){
    return coursees.namee=='Ritik';
})
console.log(coursees);
// And if we want to make this code small we use arrow function

let couurses=course.find(couurses => couurses.namee==='Ritik');
console.log(couurses);


// Removing an element 

let num =[1,3,4,2,6,7];
// deleting at end
num.pop();
console.group(num);
// deleting at start
num.shift();
console.log(num);
// deleting at middle
num.splice(2,1);
console.log(num);

// Emptying an array
let nummber=[1,2,4,6,8];
nummber.length=0;
// another method
nummber.splice(0,nummber.length);
// we can use both
console.log(nummber);


// Combining an array in primitive
let first=[1,3,5,4];
let second=[2,4,3,7,8];
let combined=first.concat(second);
console.log(combined);

// Slicing an array
let marks = [20,30,90,40,50,70,40];
let sliced = marks.slice(2,5);
console.log(sliced);


// Spread Operator



// Joining Array
let numberr=[1,2,3,4,6,5];
const joined=numberr.join(',');
console.log(joined);
// Splliting the joins
let message='This is the most amazing';
let parts=message.split(' ');
console.log(parts);
let joineed=parts.join('_');
console.log(joineed);


// Sorting in Array in JavaScript in primitive
let zest=[1,40,34,23,56,76];
zest.sort();
console.log(zest);
zest.reverse();
console.log(zest);
// Sorting in Array in JavaScript in reference type

// Filtering in Array in JavScript
let fest = [23,43,1,45,-9,-10,56];
let filtered = fest.filter(function(value){ // we use predicate function in this
    return value>=0;
})
console.log(filtered);
// Now lets create filter using arrow function
let hello=[23,43,5,-90,-12,1/2,45];
let filteredd=hello.filter(value=>value>=0);
console.log(filteredd);

// Mapping in Array in JavaScript we use map method 
let hest=[27,43,50,60,87,94];
console.log(hest);
// let product=hest.map(function(value){
//     return 'item_no'+value;
// })
// using arrow function
let prod=hest.map(value=>'item_no'+value)
console.log(prod);

//Mapping with object
// let rest=[1,2,4,6,-9,-7,10];
// let filtereed=rest.filter(value=>value>=0);
// let items=filtereed.map(function(num){
//     return{value:num};
// })
// using arrow function
// let itms=filtereed.map(num => {value:num} );
// now the shortcut for all these
let rest=[1,2,4,6,-9,-7,10];
let itms=rest
           .filter(value=>value>=0)
           .map(num=>({value:num}));

console.log(itms);















