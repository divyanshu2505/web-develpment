// primitive
// 7 types : String, Number, Boolean, null, undefined, symbol
// BigInt

// reference (non primitive)
// Array, object , Function

const score = 100
const scoreValue = 100

const isLoggedIn = false
let userEmail;
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 3455576767688

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"hitesh", 
    age:"22"
}
const myFunction = function(){
    console.log("Heloo world");
}

console.log(typeof bigNumber);



// #################
// stack(primitive),heap(non-primitive)

let myYoutubename = "hiteshchaodrydotcom"
let anothername = myYoutubename
anothername = "chaiaur code"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}