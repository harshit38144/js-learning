// Singleton

//object literals
const mySym = Symbol("Hello")

const JsUser = {
    name: "Harshit",
    [mySym]: "myKey1",
    age: 22,
    location: "Ranchi",
    email: "kumarharshit6206@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.isLoggedIn);
// console.log(JsUser["age"]);
// console.log(JsUser[mySym]);

JsUser.email = "harshit77@gmail.com"
//console.log(JsUser.email);

JsUser.greeting = function(){
    console.log(`hello ${this.name}`);
}
console.log(JsUser.greeting());

