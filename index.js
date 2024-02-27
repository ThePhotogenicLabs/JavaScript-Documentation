console.log("I Like Pizza");
console.log("I Like Cookies");

// A Variable is a container for storing data
// A Variable behaves as if it was the value that it contains

// Two Steps :
// 1 . Declaration (var,let,const)
// 2 . Assignment (= assignment operator)

let firstName = "Naveen Kumar"; // Strings
let age = 26; // Numbers
age = age + 1;
let student = true; // Booleans

console.log("Hello", firstName);
console.log("You are", age);
console.log("Enrolled", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "Enrolled " + student;

/*
  arithmetic expression is a combination of...
  operands (values , variables, etc.)
  operators (+ - * / %)
  that can be evaluated to a value
  ex. y = x + 5
*/

let students = 20;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// let extraStudents = students % 3;

//Augmented Assignment Operators

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

console.log(students);

/*
   operator precedence
   1. parenthesis ()
   2. exponents
   3. multiplication and division
   4. addition & subtraction
*/

let result = 1 + 2 * (3 + 4);

console.log(result);

// Accept user input

// Window prompt

// let username = window.prompt("What is your name ?");
// console.log(username);

// Using HTML Text Box

let username;

document.getElementById("myButton").onclick = function () {

  username = document.getElementById("myText").value;

  console.log(username);

  document.getElementById("myLabel").innerHTML = username;
};

// Type Conversion = change the datatype of a value to another (strings, numbers, booleans)