const myName = "Harshit"

function name(name1, name2){
    console.log(name1 + name2 +" "+ (myName));
}
name("k", "r")

const chai = function(){
    let username = "Harsh"
    console.log(this.username);
}
chai()

//const twonum=(num1, num2) => (num1 + num2)

const twonum=(num1, num2) => ({username: "Harsh"})

console.log(twonum(5, 6))