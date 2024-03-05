// A callback function is a function passed as an argument to another function and is excuted after the completion of a task and it is also high-order function

function processUserInput(name, callback){
    console.log("Received input: "+ name);
    callback(name)
}
function greetUser(name){
    console.log(`Hello ${name}`)
}
processUserInput("Ritik", greetUser)