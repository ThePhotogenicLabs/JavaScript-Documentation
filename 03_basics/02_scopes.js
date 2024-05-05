let a = 300

if (true) {
  let a = 10;
  const b = 20;
//   var c = 30;
// console.log("Block Scope", a);
}

// console.log("Global Scope", a);
// console.log(b);
// console.log(c);


function one(){
   const username = "Naveen"

   function two() {
    const website = 'google.com'
    // console.log(username);
   }

  //  console.log(website);
   two()
}

one()

// ++++++++++++++++++++++++++++++ 

console.log(addone(5));

function addone(num){
  return num + 1
}



const addTwo = function(num){
  return num + 2
}

console.log(addTwo(5));

