const games = ["super mario bros", "zelda", "N + game"];

const favoriteGames = [
  {
    name: "super mario bros",
    releaseYear: 1980,
  },
  {
    name: "zelda",
    releaseYear: 1984,
  },
];

const altGames = new Array();
Array.isArray(games); // true

const secondGAme = games[1];
const altSecondGAme = games.at(1); //die gaat ook onze tewede elementen ophalen
const lastGame = games.at(-1); // games[lenght - 1] ------laaste -array pakken --------

const values = [
  "rumo",
  function () {
    console.log("hello");
  },
];

const amountOfFavGames = favoriteGames.length;

games.length = 3;
const topThree = games;

games.length = 4;

// -----------------------------------
const stringArray = "[1, 2, 3, 4]";
const numbers = JSON.parse(stringArray);
console.log(typeof stringArray, typeof numbers);

// stringArray.push(5);
numbers.push(5);

const numbersString = JSON.stringify(numbers);
console.log(stringArray, numbers, numbersString);

const students = ["nick", "mert", "rumo"];
const people = ["nick", "mert", "rumo"];

const teacher = "adriaan";
const friend = "adriaan";

console.log(teacher === friend); //true
console.log(students === people); //false

//--------------

function areArraysEquel(arrOne, arrTwo) {
  if (arrOne.length === arrTwo.length) {
    return false;
  }
  return JSON.stringify(arrOne) === JSON.stringify(arrTwo);
}
console.log(areArraysEquel(students, people));

//---------------

//---------MAP------------- aanpassings methode
console.log("numbers", numbers);
const doubleNumbers = numbers.map((value, index) => {
  if (value === 2) {
    return value;
  }

  return value * 2;
});
console.log("Double numbers", doubleNumbers);

console.log("Double numbers as string", doubleNumbers.join(""));

const numbersWithoutEight = doubleNumbers.filter((value) => {
  return value === 8;
});

console.log(numbersWithoutEight);

numbers.some((number) => number === 8);

numbers.every((number) => {
  return number === 8;
});

//----------REDUCE----------------- minder maken

// van een array naar 1 getal te gaan (meestal een som/optelling)

const sales = [4, 10, 6];

sales.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});

// loop 1: 0+4 -> 4
// loop 2: 4+10 -> 14
// loop 3: 14+6 -> 20

const products = [
  { name: "shirt", price: 20 },
  { name: "shoes", price: 50 },
  { name: "hat", price: 15 },
];

// optie 1
const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(totalPrice);
// optie 2
const totalProductsPrice = products.reduce(
  (prevReturnedPrice, productObject) => {
    return prevReturnedPrice + productObject.price;
  },
  0
);

console.log(totalProductsPrice);
