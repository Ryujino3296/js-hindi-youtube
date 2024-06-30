const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // THIS can be used only in OBJECT NOT FUNCTION
    }

}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // WILL IVE UNDEFINED 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// function hta dijye aur arrow lga dijye bn gya array function
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // IMPLICIT RETURN 

// const addTwo = (num1, num2) => ( num1 + num2 ) 

//AGAR PARANTHESIS to RETURN likho vrna SMALL BRACES sahi hai 

const addTwo = (num1, num2) => ({username: "hitesh"}) 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()