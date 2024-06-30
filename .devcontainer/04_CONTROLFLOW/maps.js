// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);
//output of this is 
/*Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  } */

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//output of this is 
/*IN :- India
USA :- United States of America
Fr :- France */

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//OBJECTS ARE NOT ITRETABLE so we can't iterate over it 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }