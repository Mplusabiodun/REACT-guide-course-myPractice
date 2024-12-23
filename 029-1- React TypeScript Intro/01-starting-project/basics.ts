// primitives: numbers, strings, boolean
// More complex type: Arrays, objects
// function types, parameters

// Primitives

let age: number;
age = 24;

let username: string;
username = "Adekunle";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["sports", "cooking"];

// type Allias
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Fatai",
  age: 24,
};

// let people: {
//   name: string;
//   age: number;
// }[];

// OR

let people: Person[];

people = [
  {
    name: "Fatai",
    age: 24,
  },
  {
    name: "Adekunle",
    age: 25,
  },
];

// Types inference

let course = "React - The complete guide";
// course = 12345; not allowed because of type inference

// Union Types

let framework: string | number = "React - The complete guide";
framework = 12345;

// Function & types
function add(a: number, b: number) {
  return a + b;
}

function prinutOut(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // ["d", a", "b", "c"]
