// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firtname: "Naveen",
      lastname: "Kumar",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firtname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "naveen@xyz.com",
  },
  {
    id: 2,
    email: "naveen@xyz.com",
  },
];

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename : "Javascript in hindi",
    price : 99,
    courseInstructor : 'Hitesh'
}

// course.courseInstructor

const {courseInstructor : instructor, coursename, price} = course

console.log(instructor);


const navbar = ({company}) =>{

}

navbar(company = 'Naveen')

