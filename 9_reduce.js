const myNums=[1,2,3,4,5]
const myTotal = myNums.reduce(function(acc, currVal){
    console.log(`acc:${acc} and currval:${currVal}`);
    return acc + currVal
},0)
console.log(myTotal)

//Now we write it in arrow function
const number=[1,2,3]
const total = number.reduce((acc, curval)=>acc+curval, 0);
console.log(total)


//Arrow with each number to know which is taken as acc and curval
const numbers=[1,2,3,4]
const Numtotal=numbers.reduce((acc, curval)=>{
    console.log(`acc:${acc} and curval:${curval}`);
    return acc+curval;
},0)


const shoppingCart= [
    {
        itemName:"JS Course",
        price:2999
    },
    {
        itemName:"DSA Course",
        price:4999
    },
    {
        itemName:"Java Course",
        price:1999
    },
    {
        itemName:"DSA using Java Course",
        price:14999
    }
]

const cartTotal=shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(cartTotal)