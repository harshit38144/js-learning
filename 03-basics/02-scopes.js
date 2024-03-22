let a = 45 //global scope

// block scope
if(true){
    let a = 44
    const b = 55
    var c = 66
    console.log("Hello theren "+b );
}

console.log(a);
// console.log(b);
console.log(c);