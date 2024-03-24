// for

// for(let index = 0; index < 10; index++){
//     const element = index;
//     console.log(element);
// }
// for (let index = 0; index < 6; index++) {
//     for (let jndex = 0; jndex < 8; jndex++) {
//         const element = jndex;
//         console.log(element);
//     }
//     const element = index
//     console.log(element);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`5 DETECTED`);
        break;
    }
    console.log(`${index}`);  
}

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`5 DETECTED`);
        continue;
    }
    console.log(`${index}`);  
}