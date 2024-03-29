// Strings

let string = "  Naveen Kumar";

console.log(string[8]);

// Template Literals
let sentence = `This is a template literal`;

console.log(sentence);

let obj = {
  item: "Pen",
  price: 10,
};
// String interpolation
console.log(`The cost of the ${obj.item} is ${obj.price} rupees`);

// String methods
// These are built in functions to manipulate a string

console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.trim());

let string2 = "Hello";

console.log(string2.replace("Hello", "HI"));

console.log(string2.charAt(1));
