// const telegramUser = new Object()

const telegramUser = {}

telegramUser.id="908edx"
telegramUser.name="Ritik"
telegramUser.isLoggedIn = false

console.log(telegramUser)
console.log(Object.keys(telegramUser))
console.log(Object.values(telegramUser))
console.log(Object.entries(telegramUser))
console.log(telegramUser.hasOwnProperty('isLoggedIn'))
console.log(telegramUser.hasOwnProperty('LoggedIn'))

//nested object
const regularUser = {
    email:"ririk@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ritik",
            lastname:"chaudhary"
        }
    }
}
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)


//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

//or

//Object.assign() is a method in JavaScript used to copy the values of all enumerable own properties from one or more source objects to a target object. It is a way to merge objects or copy properties from multiple source objects into a single target object.

//Combining the object
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

const obj3 = Object.assign({}, obj1, obj2, obj4)  //{} use this as a target for better code 
// console.log(obj3)

//But the best method is to use the spread operator
const obj5 = {...obj1, ...obj2, ...obj4}
// console.log(obj5)



//Destructur of object
const course={
    courseName:"JS",
    price:1000,
    courseInstructur:"Ritik"
}

//course.courseInstructur for printing the value but if we want to print many times then the name is to big so we can also use this syntax

const {courseInstructur: instructor} =  course
console.log(instructor);