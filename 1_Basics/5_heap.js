// Heap Memory  - Used in reference type(Non-primitive type) - Whenever heap memory is used we get reference of original value. Original value change

let user1={
    email: "ritik@gmail.com",
    upi: "user@123"
}

let user2=user1
user2.email="ritik09@gmail.com"

console.log(user1.email);
console.log(user2.email);