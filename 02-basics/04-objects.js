//const tinderUser = new Object() // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rao"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "anyone@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Harshit",
            lastName: "Kumar"
        }
    }

}
//console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

const course = {
    coursename: "pw java",
    price: "3500",
    courseInstructor: "someone"
}

const {courseInstructor} = course

console.log(courseInstructor);