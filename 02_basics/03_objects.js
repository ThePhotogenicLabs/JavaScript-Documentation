// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Naveen",
    [mySym] : "mykey1",
    age : 27,
    location : "Bengaluru",
    email : "naveen@xyz.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]

}

// console.log(JsUser.name)
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "example@xyz.com"
// Object.freeze(JsUser)
JsUser.email = "example1@xyz.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function () {
  console.log(`Hello Js User, ${this.name}`);
};


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());