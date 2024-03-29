//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "harsh",
    age: 22,
}

const myFunction = function(){
    //console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


let myName1 = "Harsh"
let myName2 = myName1
myName2 = "Harshit"
console.log(myName1) //Harsh
console.log(myName2) //Harshit

let userOne = {
    Name: "Harsh",
    Branch: "CSE",
    Roll: 20011007
}

let userTwo = userOne
//userTwo.Name = "Harshit"

console.log(userOne)
console.log(userTwo)