function greetings() {
  return " Hello  daar !";
}
console.log(greetings());
//--------------------------

function greetings(name) {
  return " Hello " + name + " ! ";
}
console.log(greetings("anna"));

// -------------------------

function greetings(name = "daar") {
  return " Hello " + name + " ! ";
}

console.log(greetings());
console.log(greetings("anna"));

//-----------------------------

function controlAge(age) {
  if (age >= 18) return "Volwassen";
  return "nog niet volwassen";
}
console.log(controlAge(16));
console.log(controlAge(21));

//------------------------------
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}

//------------------------------
function mainLogic(func) {
  func();
}

function func() {
  return " dit is de callback-functie";
}
mainLogic(func);

// array
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log(fruits.length);
//--------------------------------
let matrix = [
  [3, 7, 2],
  [9, 4, 6],
];

function getNumber(matrix, row, col) {
  console.log(matrix[row][col]);
}

getNumber(matrix, 1, 2);

function getNumber(matrix, row, col) {
  console.log(matrix[row][col]);
}

getNumber(matrix, 1, 2);

//--------------------------
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

for (let char of "hello") {
  console.log(char);
}

const colors = ["red", "blue", "green", "yellow"];

colors.forEach((color, index) => {
  console.log(index, color);
});
//----------------------
const words = [
  "mal",
  "snurkduif",
  "bromvlieg",
  "snottebel",
  "knotsgek",
  "pindakaas",
  "fluitketel",
  "smurfenmuts",
];
let joined = words.join("-");

let startsWithB = words.some((w) => w.toLowerCase().startsWith("b"));
words.unshift("hello");

let allLongEnough = words.every((w) => w.length > 2);
words.sort();
let third = words[2];

let filtered = words.filter((w) => w.length > 4);

//------------------------------------
const randomNumbers = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91];

let biggerThan10 = randomNumbers.filter((n) => n > 10);
randomNumbers.pop();
randomNumbers.shift();
randomNumbers.push(5);

let allLessThan20 = randomNumbers.every((n) => n < 20);
let numberString = randomNumbers.join(" ");
let sum = randomNumbers.reduce((a, b) => a + b, 0);
let doubled = randomNumbers.map((n) => n * 2);
let anyGreaterThan30 = randomNumbers.some((n) => n > 30);

//------------------------
const namesArray = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eva", "Frank"],
  ["Grace", "Hank", "Ivy"],
  ["Jack", "Kelly", "Liam"],
];

let flat = namesArray.flat();
let doubledFlat = namesArray.flat().map((x) => x + x);
namesArray.forEach((arr) => arr.shift());

namesArray.pop();

//-------------------------

function addArrays(a1, a2) {
  return a1.map((n, i) => n + a2[i]);
}

console.log(addArrays([1, 2, 3], [4, 5, 6]));

//_----------------------
let wordArray = ["appel", "pear", "kiwi", "banana"];

let longest = wordArray.reduce((a, b) => (b.length > a.length ? b : a));

console.log(longest);

//---------------

function filterEvenNumbers(numbers) {
  return numbers.filter((n) => n % 2 === 0);
}

let nums = [3, 8, 15, 6, 10, 7];
console.log(filterEvenNumbers(nums));

//------------------

function sortByProperty(objects, property) {
  return [objects].sort((a, b) => (a[property] > b[property] ? 1 : -1));
}

let objectsArray = [
  { name: "Anna", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

console.log(sortByProperty(objectsArray, "name"));

// ---- OBJECTS ------------------
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "blue",
};

car.color = "red";
console.log(car.brand);
car.fuel = "gasoline";
delete car.year;
//-------------------
let person = {
  name: "Anna",
  age: 25,
  address: {
    street: "Hoofdstraat",
    number: 123,
    city: "Stadsville",
  },
};

console.log(person.address.number);
person.phone = "123456789";

let extraInfo = {
  hobby: "sporten",
  favoriteColor: "paars",
};

Object.assign(person, extraInfo);

console.log(person);
//______----------------
function areObjectsIdentical(obj1, obj2) {
  return JSON.stringify(obj1 === JSON.stringify(obj2));
}
const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(areObjectsIdentical(objectA, objectB));

//---------------------------
const shoppingCar = {
  item1: { name: "Product 1", price: 20 },
  item2: { name: "Product 2", price: 30 },
  item3: { name: "Product 3", price: 15 },
};

// Gebruik Object.keys() om de namen van de items weer te geven
const itemNames = Object.keys(shoppingCar);
console.log("Namen van items:", itemNames);

// Gebruik Object.values() om de prijzen van de items weer te geven
const itemPrices = Object.values(shoppingCar).map((item) => item.price);
console.log("Prijzen van items:", itemPrices);

// Gebruik Object.entries() om zowel de namen als prijzen van de items weer te geven
const itemEntries = Object.entries(shoppingCar);
console.log("Namen en prijzen van items:", itemEntries);

const shoppingCar2 = {
  items: [
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 30 },
    { name: "Product 3", price: 15 },
  ],

  // Aangepaste methode om totale prijs te berekenen
  calculateTotal: function () {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  },
};

console.log("total price:", shoppingCar2.calculateTotal());
// commit
//committrtttt
