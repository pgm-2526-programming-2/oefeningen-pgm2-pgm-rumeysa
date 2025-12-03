//operators
// > < === === etc
// spread en rest operator

//... drie puntjes

const numbers = [1, 2, 3];

console.log(numbers, ...numbers);

// reden om te spreaden?
// 1. kopie maken van een reference datatype
const students = ["mert", "yenes"];
students.push("farah");
const friends = students;

// const  people = [students]; // [["mert" , "yenes"]]

const people = [...students];
students.push("milana");
// students- ["mert", "yenes", "farah", "milana"]
//friends- ["mert", "yenes", "farah", "milana"]
// people - ["mert", "yenes", "farah"]

// 2. om arrays samen e voegen.

const drinks = ["pintje", "gin", "moctail"];
const snacks = ["frikandel", "chips"];

const menu = [...drinks, "cola", ...snacks];

// 3. wanneer ee methode geen arrays aanvaart
Math.max(3, 5, 7, 1, 2);
Math.max(...numbers);

// dit werkt ook allemaal met objecten

const car = {
  brand: "citroen",
  model: "c",
  year: 2011,
};

const upgrade = {
  spoiler: true,
  extra: ["GPS", "custom uitlaat"],
};
car.upgrade = upgrade;

const upgradeCar = {
  ...car,
  ...upgrade,
};
// object keys advanced syntax
const a = "hello";

const obj = {
  a,
};
// a: a (eerste is de key, tweede is een variable)
//a: "hello"
// korte schrijfwijze:a
