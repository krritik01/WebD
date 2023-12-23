console.log('Let study');

// for-in loop
let rectangle = {
    length:3,
    breadth:4
};
// for-in loop
for(let key in rectangle){
    // Keys are reflected through key variable
    // Values are reflected through rectangle[key]
    console.log(key,rectangle[key]);
};


// for-of loop 
let reectangle = {
    length:3,
    breadth:4
};
// for-of loop 
for(let key of Object.entries(reectangle)){
// for(let key of Object.keys(reectangle)){
    console.log(key);
};

// How to check that a property is exist in an Object
let reeectangle = {
    length:3,
    breadth:4
};
// now check
if('height' in reeectangle){
    console.log('Present');
}
else {
    console.log('Absent');
}


// Program to clone the Object
// declaring object
let person = {
    name: 'John',
    age: 21,
}
// cloning the object
let clonePerson = Object.assign({}, person);
// The Object.assign() method is part of the ES6 standard. 
// The Object.assign() method performs deep copy and copies all the properties from one or more objects.
console.log(clonePerson);
// changing the value of clonePerson
clonePerson.name = 'Peter';
console.log(clonePerson.name);
console.log(person.name);

// Object cloning is done by three method
// i)Iteration ii)Assign iii)Spread

// i)Iteration
// Ex-a
console.log('This is how we implement cloning using Iteration');
let src={value:10};
let dest={ };
for(let key in src){
    dest[key]=src[key];
}
console.log(src);
console.log(dest);

// Ex-b
let store={
    a:10,b:12,c:15
};
let math={};
for(let key in store){
    math[key]=store[key];
}
console.log(store);
console.log(math);


// ii)Assign
// Ex-a
console.log('This is how we implement cloning using  assign object');
let srrc={value:14};
// Now Copy
let destt=Object.assign({ },srrc)  // Here assign is used to copy
console.log(srrc);
console.log(destt);
// Ex-b
let storee={
    a:10,b:20,c:30
};
let mathh=Object.assign({ },storee);
console.log(storee);
console.log(mathh);

// iii)Spread operator
// Ex-a
console.log('This is how we implement cloning using spread object');

let srrrc={value:40};
let dessttt={...srrrc};
console.log(srrrc);
console.log(dessttt);
// Ex-b
let storeee={
    a:35,b:56,c:86
};
let mathhh={...storeee};
console.log(storeee);
console.log(mathhh);






