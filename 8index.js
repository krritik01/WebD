// Promise chaning
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('resolved in 2 second')
        resolve(48)
    },2000)
})
p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Promise 2 in 3 second')
        },3000)
        
    })
    return p2;
}).then((value)=>{
    console.log(value)
    console.log('We are done')
})


// Attaching Multiple Handlers to a Promise
let p2=new Promise((resolve,reject)=>{
    alert("Hey I am not resolved")
    setTimeout(()=>{
        resolve(48)
    },4000)
})
p2.then(()=>{
    console.log("Hurray")
    alert("Hurray")
})

p2.then(()=>{
    console.log('Congratulation I am now resolved')
})
// p2.then(()=>{
//     console.log("Hurray")
//     alert("Hurray")
// })











































































