// Operators

// Artimetic Operators

let a = 5;
let b = 2;

console.log("a =", a, "& b =", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); // 5^2 = 25

// Unary Operators
/*
  a++ [post increment]
  ++a [pre increment]
  a-- [post decrement]
  --a [pre decrement]
*/
console.log("a =", a, "& b =", b);
a++;
console.log(a);
a--;
console.log(a);

// Assignment Operators

let c = 5;
let d = 2;

c += 4; // c = c + 4
console.log("c =", c); // 9

c -= 4; // c = c - 4
console.log("c =", c); // 5

c /= 4; // c = c / 4
console.log("c =", c); // 1.25

// Comparison Operators

let e = 6;
let f = 2;

console.log("5 == 2", e == f); // false
console.log("5 != 2", e != f); // true
console.log("5 > 2", e > f); // true
console.log("5 < 2", e < f); // false

// Logical Operators

let condition1 = e > f;
let condition2 = e === 6;
console.log("condition 1 && condition 2", condition1 && condition2);
console.log("condition 1 || condition 2", condition1 || condition2);
console.log("!(6<5)", !(6 < 5));
console.log("!(6<5)", !(e === 6));

// Conditional statements

// IF STATEMENT

let age = 25;

if (age > 18) {
  console.log("You Can Vote");
}

if (age < 18) {
  console.log("You Cannot Vote");
}

if (age >= 18) {
  console.log("You Can Vote");
} else {
  console.log("You Cannot Vote");
}

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
}

if (mode === "light") {
  color = "light";
}

console.log("Color Variable set to :", color);

// IF ELSE STATEMENT

if (mode === "dark") {
  color = "black";
} else {
  color = "light";
}
console.log("Color Variable set to :", color);

// ODD OR EVEN NUMBER
let num = 20;

if (num % 2 === 0) {
  console.log(num, "is even number");
} else {
  console.log(num, "is odd number");
}

// ELSE IF STATEMENT

if (mode === "dark") {
  color == "black";
} else if (mode === "blue") {
  color = "blue";
} else if (mode === "pink") {
  color = "pink";
} else {
  color = "white";
}

console.log("color :", color);

// TERNARY OPERATOR

let result = age >= 18 ? "Adult" : "Not Adult";
console.log(result);
