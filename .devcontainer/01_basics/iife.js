// Immediately Invoked Function Expressions (IIFE)

// GLOBAL SCOPE SE POLLUTION SE BACHNE KE LIYE HM CHAHTE HAI KI IMMEDIATELY FUNCTION EXECUTE HOJAYE ISILIYE IIFE 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
 // chai() same ==> (function ko define kro)()--> execute bhi krdo 
 // usko end krne keliye ; lgana zaroori hai  

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')