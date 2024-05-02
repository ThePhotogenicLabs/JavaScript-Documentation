// array

const myArrys = [0, 1, 2, 3, 4, 5];
const myHeros = ["Spiderman", "Deadpool", "IronMan", "Thor"];

const myArrays2 = new Array(1, 2, 3, 4, 5);

// console.log(myArrys[1]);

// Array Methods

// myArrys.push(6)
// myArrys.push(7);
// myArrys.pop();

// myArrys.unshift(9)
myArrys.shift();

// console.log(myArrys.includes(9));
// console.log(myArrys.indexOf(9));

const newArray = myArrys.join()

// console.log(myArrys);
// console.log(typeof newArray);
// console.log(newArray);

// slice , splice

console.log("A", myArrys);

const myn1 = myArrys.slice(1, 3)

console.log(myn1);
console.log("B", myArrys);

const myn2 = myArrys.splice(1, 3);
console.log("C", myArrys);
console.log(myn2);