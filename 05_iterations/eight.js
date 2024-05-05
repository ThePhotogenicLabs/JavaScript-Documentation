const myNumbers = [1, 2, 3];

// const myTotal = myNumbers.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNumbers.reduce((acc, curr) => {
     return acc + curr;
}, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Js Course",
    price: 2999,
  },
  {
    itemName: "Python Course",
    price: 999,
  },
  {
    itemName: "Mobile Dev Course",
    price: 5999,
  },
  {
    itemName: "Data Science Course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) =>{
    return acc + item.price
},0)

console.log(priceToPay);
