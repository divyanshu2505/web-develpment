const userEmail = "h@hitesh.ai"
if(userEmail){
    console.log("Got User email");
} else {
    console.log("Dont have user email"); 
}
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values
// "0","false", "", [], {}, function(){}

if (userEmail.length === 0){
    console.log("Array is Empty");
}
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// nulish coalishing operator(??): nulln undefined
let val1;
// val1 = 5?? 10
// val1 = null?? 10
val1 = undefined ?? 15
// val1 = null ?? 10?? 20
console.log(val1);

// ternary operator
// condition? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")