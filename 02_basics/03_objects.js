// singleton
// Object.create
// object literals
const mySym = Symbol("key1")
const jsUser = {
    "full name": "Hitesh Choudry",
    name: "hitesh",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");    
}
JsUser.greetingTwo = function(){
    console.log("Hello JS user, {this.name}");    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

