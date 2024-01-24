//---------------Dates---------------
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

// Month starts from 0 in Javascript

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2020, 0, 23)
// console.log(myCreatedDate.toDateString())

// let myCreatedDaate = new Date(2020, 0, 23, 5, 3, 45)
// console.log(myCreatedDaate.toLocaleString());


// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocalString())

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.getTime())


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

// console.log(newDate);
// console.log(newDate);
// console.log(newDate.getMonth());  
// console.log(newDate.getMonth()+1);  
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})

