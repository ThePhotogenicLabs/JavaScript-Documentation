const user = {
  username: "Naveen",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Naveen"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Naveen";
//     console.log(this.username);
// }

const chai = () => {
  let username = "Naveen";
  console.log(this);
};

// chai();

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>   num1 + num2;

// implicit return
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "Naveen" });

console.log(addTwo(3, 5));

// const myArray = [2,5,6,8,10]

// myArray.forEach(() => {})
