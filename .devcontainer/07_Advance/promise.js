// console.log("promises");

// promise is a object . ye apne andar call back leta hai have resolve and reject 
const promiseOne = new Promise(function(resolve, reject)
{
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(
        function(){
        console.log('Async task is compelete');
        resolve() // ab jake connect hua hai .then se 
    }, 1000)
})

// consumption of promise . seedha resolve se connection 
// iske andar ke function me upar me se jo bhi kaam hua hai automatically return hoti hai 
promiseOne.then(function()
{
    console.log("Promise consumed");
})// promise consumed baad me aayega hmesha 





// NYA SYNTAX BINA KISI variable me store kraye 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// yha pe ye btaya gya hai ki resolve function yha pe jo bhi pass krenge wp eventually then function me chla jayega 
//In general object pass krte hai aise case me 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})




// ab Resoolve aur Reject ka kaamm aya 
// yha pe arrow function ka use aaya hai 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// Resolve keliye .then aur error me .catch
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {            // yah pe chaining ho rha hai upar wala return value hi return hoga 
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  // ye btado i kaam hogya hai kya ?




// Yha pe naye tarike se sab kuch discuss hoga
// async await function bhi use krskte hai  
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// async await function bhi use krskte hai . But isme "await" se directly hm error ko handle nahi krskte hai 
// isiliye hm try and catch function use krte hai 
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()  // BINA AWAIT FUNCTION KE YE FINAL OUTPUT NAHI DEGA BHELE HI data print krne pe dikha de 
                        // but yha problem ye aarhi hai ki .json use ya jason me convert krne keliye bhi time lg rha hai 
                        // to siiliye hmlogon ne await ka use kra  
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.