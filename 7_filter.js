// const coding = ["js", "cpp", "solidity","rust","java","swift"]

// const value = coding.forEach( (item)=>{ //This will not print anything
//     // console.log(item)
//     return item
// } )
// console.log(value)


//Filter is true or false game
const myNumber = [1,2,3,4,5,6,7,8,9,10]
const newNumber= myNumber.filter( (num) => num>5)
console.log(newNumber);
// console.log(myNumber.filter( (num) => num>5))

// We use it also as arrow function then we have to use "return" keyword to console it
const newNumberr = myNumber.filter((num)=>{
    return num>5
})
console.log(newNumberr)

//We can aslo do it using forEach loop

const newNum=[];
myNumber.forEach((num)=>{
    if(num>5){
        newNum.push(num)
    }
})
console.log(newNum)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);






