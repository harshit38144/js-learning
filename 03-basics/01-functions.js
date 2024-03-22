

// function myName(){
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("T");
// }
// myName()

// function score(player1, player2){
//     let result = player1 + player2
//     return result
//     console.log(player1 + player2);
// }
// // score(5, 3)
// const result = score(5, 5)
// // console.log(result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Harsh"))

function priceCalc(...num1){
    return num1
}
console.log(priceCalc(200, 300, 300));

const user = {
    username: "Harsh",
    price: 3
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)