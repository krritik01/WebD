console.log('Lets start the game');
let rectangle = {
    length:3,
    breadth:1,
    draw: function(){
        console.log('Kya hal chal app sab ke');
    } 
};
console.log(rectangle);

// Now if we want to create multiple rectangle then we use a function which can create multiple objects
// Two method to create object
// i) Factory Function
// ii) Constructor Functio

// Factory Function - This function creates an objects and returns rectangle
function createRectangle(){
let rectangle = {
    length:3,
    breadth:1,
    draw: function(){
        console.log('Kya hal chal app sab ke');
    } 
};
return rectangle;
}
// console.log(rectangle.draw);
// console.log(rectangle.length);
// console.log(rectangle.breadth);

// Now we store above function in a variable
let rectangleObj1 = createRectangle(); // here we do function call
console.log(rectangleObj1);

// Now we have multiple value, so for this we do
function createRectangle(len,bre){
    let rectangle = {
        length:len,
        breadth:bre,
        draw: function(){
            console.log('Kya hal chal app sab ke');
        } 
    };
    return rectangle;
}
// Here we create multiple object and assign th function
 let rectangleObj2 = createRectangle(3,4); 
 let rectangleObj3 = createRectangle(2,4); 
 let rectangleObj4 = createRectangle(5,6); 
 let rectangleObj5 = createRectangle(9,7); 

 console.log(rectangleObj2);
 console.log(rectangleObj3);
 console.log(rectangleObj4);
 console.log(rectangleObj5);


//Constructor Function - In this we follow a notation Pascal Noation. First letter of every word is capital. 
// Ex--> NumberOf Student  
// How to create a Constructor Function
function Rectangle (){
    // this-  this keyword is used  shows that the current object you are working 
    this.length=9,
    this.breadth=5,
    this.draw= function(){
        console.log('drawing');
    }
}
// Object creation using constructur function
let rectangleObject = new Rectangle(); // Here rectangle is a constructor

// Now we set a value
function Reectangle (len,bre){ 
    this.length=len,
    this.breadth=bre;
    this.draw= function(){
        console.log('drawing');
    }
}
// Object creation using constructur function
// Here we create multiple object and assign the constructor function
let reectangleObject = new Reectangle(3,5);
let reectangleObject1 = new Reectangle(39,5);
let reectangleObject2= new Reectangle(3,57);
let reectangleObject3 = new Reectangle(90,75);
// we call the constructor function
console.log(reectangleObject3);

// Dynamic nature of Object-we can add or delete anything in object
function Reectangle (){ 
    this.length=9,
    this.breadth=5,
    this.draw= function(){
        console.log('drawing');
    }
}
// Object creation using constructur function
let reeectangleObject = new Rectangle();
// Now if we want to add anything in this we do
reeectangleObject.height=6;
console.log(reeectangleObject);
// Now if we wnat to delete anything in this we do
delete reeectangleObject.height;
console.log(reeectangleObject);


// "This is `` back-tick character"
























