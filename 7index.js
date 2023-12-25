let promise=new Promise(function(resolve,reject){
    resolve(66)
})
    console.log(promise);

console.log('Understand Promises');
setTimeout(function(){
    console.log('Hello in 3 second')
},2000)

//  resolve==>fullfilled
//  reject==>not fullfilled
let p= new Promise(function(resolve,reject){
setTimeout(function(){
    resolve(true);
    // console.log('I am a promise and I am fullfilled');
},3000);
})
console.log(p);

let a= new Promise(function(resolve,reject){
    setTimeout(function(){
        reject(new Error('I am a error'));
        // console.log('I am a promise and I am rejected thats why I am showing error');
    },4000);
    })

// To get the error
p.then((value)=>{
    console.log(value)
})
// promise.then(alert);


// To get the error
// a.catch((value)=>{
//     console.log("some error due to rejected")
// })

// Another method for error
a.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})


