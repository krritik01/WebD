//A first class function means that function can be treated as values, assigned to vaiable, and passed around as arguments.

function sayHello(name){
    return "Hello, "+ name + "!"
}
var greetFunction=sayHello;
console.log(greetFunction("ritik"))