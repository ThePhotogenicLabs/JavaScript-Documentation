function sayMyName() {
  console.log("N");
  console.log("A");
  console.log("V");
  console.log("E");
  console.log("E");
  console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1 , number2) {
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result

  return number1 + number2;
}

const result = addTwoNumbers(5, 10);

// console.log("Result :" , result);

function loginUserMessage(username) {
  if (!username) {
      console.log("please enter a username")
      return
  }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Naveen"));
// console.log(loginUserMessage());

// ...number1 rest operator or spread operator
function calculateCartPrice(...number1){
    return number1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username : "Naveen",
    price : 99
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username : "Sam",
    price : 199
});

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
  return getArray
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 100]));