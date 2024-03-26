// Variables
// Variables are containers for data

fullName = "Tony Stark";
age = 27;
price = 99.99;
radius = 14;
a = null;
y = undefined;
isFollow = true;

console.log(fullName);

// var, let, const
// var : variable can be re-declared and updated. a global scope variable
// let : variable cannot be re-declared but can be updated. a block scope variable
// const : variable cannot be re-declared or updated. a block scope variable

let name = "Naveen Kumar";
let Age = 27;
const isAdult = true;
const PI = 3.14;
console.log(name);
console.log(PI);

// blocks
{
  let a = 10;
  console.log(a);
}
// blocks
{
  let a = 50;
  console.log(a);
}

// Data Types [Primitive - 7]
// Numbers , Strings , Boolean , Undefined , Null , BigInt , Symbol

//[Non-Primitive]
// Objects , Arrays , Function
// Objects -> collection of values

const student = {
  fullName: "Naveen Kumar",
  age: 26,
  cgpa: 8.2,
  isPass: true,
};

student["age"] = student["age"] + 1;
student["fullName"] = "Naveen";

console.log(student);
console.log(student["fullName"]);
