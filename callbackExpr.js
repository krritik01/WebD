//Write a program to perform mathematical operation using callback function and two variable in Javascript

function mathOperation(x,y,operations){
 return operations(x,y)
}

function add(x,y){
    return x+y
}
function subs(x,y){
    return x-y
}
console.log(mathOperation(4,8,add))
console.log(mathOperation(4,8,subs))