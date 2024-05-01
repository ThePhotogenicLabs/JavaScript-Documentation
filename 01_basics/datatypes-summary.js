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

console.log(typeof heros);
