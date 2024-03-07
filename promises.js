// A promiose is like a placeholder for the result of an asynchronous operation
//A promise is like a placeholder for the result of an asynchronous operation. or a conatainer for the future result or value.

// It can be in one of three states:
//Pending - Initial state, neither fulfilled nor rejected
//Fulfilled(Resolved) - The operation completed successfully
//Rejected -  The operation failed or encountered an error

// const promise = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     resolve("Promise is resolved");
//   }, 2000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("This is finally");
//   });

/*
//We can also write like this 
const promise = new Promise((resolve,rejected)=>{
    setTimeout(() => {
        resolve("Promise is resolved")
    }, 2000);
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
 console.log(error)
}).finally(()=>{
    console.log("This is finally")
})
*/

/*
We should use try-catch blocks when working with synchronous code or when you need to handle exceptions within a specific block of code. This is useful for operations that may throw an exception, such as accessing properties of undefined or working with non-existent files.

On the other hand, then-catch is used with Promises in asynchronous code to handle success (then) and error (catch) conditions. If you are working with asynchronous operations like fetching data from a server or reading a file, you would typically use then-catch to handle the results or errors of those operations.

In summary, use try-catch for synchronous code and handling exceptions within a specific block, and use then-catch for asynchronous code and handling promises.
*/

// const studentName = "Ritik";

// const interviewCrack = (studentName) => {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.5;
//       console.log(isSuccessful)
//       if (isSuccessful) {
//         resolve(`${studentName} got an internship.`);
//       } else {
//         rejected(
//           `${studentName} we are sorry to inform you that we can't go further with you application`
//         );
//       }
//     }, 2000);
//   });
// };
// interviewCrack(studentName)
 
//   .then((result) => {
//     console.log(result);
//   })

//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("You should work hard");
//   });


const studentName = "Ritik";

const interviewCrack = (studentName) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.5;
      if (isSuccessful) {
        resolve(`${studentName} got an internship.`);
      } else {
        rejected(
          `${studentName} we are sorry to inform you that we can't go further with your application`
        );
      }
    }, 2000);
  });
};

async function runInterview() {
  try {
    const result = await interviewCrack(studentName);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("You should work hard");
  }
}

runInterview();





