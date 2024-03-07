// A high-order function is a function that takes one or more function as argument or return a function as a result.

// Higher-order function that takes a function as an argument
function applyOperation(x, y, operation) {
    return operation(x, y);
}

// Function to add two numbers
function add(x, y) {
    return x + y;
}

// Function to subtract two numbers
function subtract(x, y) {
    return x - y;
}

// Using the higher-order function with different operations
console.log(applyOperation(5, 3, add)); // Output: 8
console.log(applyOperation(5, 3, subtract)); // Output: 2
