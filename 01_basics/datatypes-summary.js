//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt,

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail = undefined;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 242532626277575733n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "Naveen",
  age: 27,
};

const myFunction = function () {
  console.log("Hello world");
};

// console.log(typeof heros);


// Stack (Primitive), Heap (Non primitive)

let myName = 'Naveen'

let anothername = 'Kumar'
anothername = 'Naveen Kumar S'

console.log(myName);
console.log(anothername);

let userOne = {
  email :"user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "naveen@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);