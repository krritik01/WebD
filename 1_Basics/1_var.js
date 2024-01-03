// JavaScript is a dynamically typed language. This means that the data types of variables are determined by the values they hold at runtime and can change throughout the program as we assign different values to them. There's no inbuilt way to annotate or restrict the types of variables.

const accountId=13422
let accountEmail="safas@gmail.com"
var accountPassword="354354"
accountCITY="Delhi"

// nodeaccountId=54

accountEmail="dsf@fas.com"
accountPassword="5465"
accountCITY="Bihar"

console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCITY);

// Simple method to print

console.table([accountId,accountEmail,accountPassword,accountCITY]);

// prefer not to use var because of issue in block and functional scope
