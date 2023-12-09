// A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.

// JavaScript is an object-based language. Everything is an object in JavaScript.

// JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.

//Example -- In real life, a car is an object. A car has properties like weight and color, and methods like start and stop.
// All cars have the same properties, but the property values differ from car to car.
// All cars have the same methods, but the methods are performed at different times.

// Properties --> car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white	
// Methods --> car.start(), car.drive(), car.brake(), car.stop()

//Object can be declared in two ways i) object literals const JsUser = {} and ii)constructor functions Object.create

const mySym = Symbol("key1")  //Symbol is a data type in javascript

const JsUser = {
    name:"Ritik",
    "full name":"Ritik Chaudhary",
    [mySym]: "mykey1",  //to declare symbol we have to use square brackets
    age: 21,
    location: "Greater Noida",
    email: "krritik0987@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

//access the value
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])  //to access symbol we have to use square brackets


//change the value
JsUser.email="ritik@gmail.com"
console.log(JsUser.email)

//lock the value we use freeze now if we change anything it does not happen
// Object.freeze(JsUser)
// JsUser.email="ritikritik@gmail.com"
// console.log(JsUser.email)
// console.log(JsUser)


//Add function in that object
JsUser.greeting = function(){
    console.log("Heelo Everyone")
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Heelo, ${this.name}`)
}
console.log(JsUser.greetingTwo())