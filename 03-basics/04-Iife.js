//Imidiately Invoked Function Expression (IIFE)

(function chai(){
    //Named IIFE
    console.log(`DB CONNECTED`);
})();
//for two IIFE we use semicolon

( (name)=>{
    //Normal IIFE
    console.log(`DB CONNECTED NOW ${name}`);
} )('Harsh')