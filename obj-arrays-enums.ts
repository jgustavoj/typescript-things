// object types

// bad practice to do this unless we want to be explicit and ts inference is not reading the types the way we want
// const person: {
//     name: string;
//     age: number;
// } = {

// better
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Gus",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"], // tuple, this example should only have 2 elements (ts = union type)
// };

// Tuple Example
// !!! important
// Push is an execption to tuple as it does not give an error
// person.role.push("Admin");
// This will give an assignment error
// person.role[1]= 10

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum will assign a number to the value starting at 0
// But if you want to start at a different number you can assign it
// example { ADMIN = 5, READ_ONLY, AUTHOR} and the rest of the values will increment accordingly
// you can also assign strings or numbers or change the values

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Gus",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivites: string[];
favoriteActivites = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // !!! ERROR !!! not an array, this is where ts inference shine!
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
