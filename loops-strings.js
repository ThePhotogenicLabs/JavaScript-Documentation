// Loops and Strings
// Loops are used to execute a piece of code again and again

// For Loop

for (let count = 1; count <= 5; count++) {
  console.log("Naveen Kumar");
}
console.log("Loop has ended");

// Calculate sum of 1 to n

let sum = 0;
let n = 7;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("Sum = ", sum);

console.log("Loop has ended");

// While Loop

let i = 1;
while (i <= 5) {
  console.log("i=", i);
  i++;
}
console.log("Loop has ended");

// Do while Loop

do {
  console.log("i =", i);
  i++;
} while (i <= 10);

console.log("Loop has ended");

// For-of loop

let str = "Naveen";
let size = 0;
for (let val of str) {
  console.log("Value =", val);
  size++;
}
console.log("String size = ", size);

// for in loop

let students = {
  name: "Naveen Kumar",
  age: 27,
  cgpa: 7.5,
  isPass: true,
};

for (let key in students) {
  console.log("Key =", key, "value = ", students[key]);
}

// Print all even numbers from 0 to 100

for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    // even number

    console.log("Number =", num);
  }

  // if (num % 2 !== 0) {
  //   // odd number

  //   console.log("Number =", num);
  // }
}
