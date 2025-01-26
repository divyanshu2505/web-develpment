const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log('Got user Details from database');
        console.log('Username: ${this.username}');
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log('welcome${this.username}');
    }

    return this
}
const userOne = new User("hitesh", 12,true)
const userTwo = new User("chai and code", 11, false)
console.log(userOne.constructor);
console.log(userTwo)