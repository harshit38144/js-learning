const arr = [3, 4, 5, 6, 7]
const myHeros = ["BatMan", "SpiderMan","HomeLander"]
const myArr = new Array(3, 4, 5, 6, 7)

//console.log(arr[3]);

// Array methods

// myArr.push(9)
// myArr.push(22)
// console.log(myArr);

// myArr.unshift(1)
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//Slice, Splice

// console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
// console.log(myn2);
// console.log("C", myArr);