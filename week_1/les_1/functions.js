function sum(a, b) {
  /* parameter; soort van variable die we gebruiken */
  return a + b;
}

const name = "rumeysa";
const division = () => {};
const multiplier =
  function () {}; /* functions() 6 en 7 lijn) heeft geen naam */

// oefening; neem echt een random student-----------

function selectRandomStudents(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const age = 21;
const students = ["Yme", "Arne", "Mert"];

console.log(sum(age, 12)); /*  argument*/

console.log(20);

console.log(selectRandomStudents(students));

// ---------------------------------------------

function showMessage() {
  console.log("Answer Checker Message");
}

function checkAnswer(answer, solution, callback) {
  if (answer === solution) {
    callback();
    return true;
  }
  callback();
  return false;
}

checkAnswer("Ja", "Ja", showMessage);

// ------------------------------------------------

// oefening: multiply, division

// oefening: Maak een functie showCalculation die 3 parameters heeft. 2. getallen, en een van onze functies

function showCalculation(a, b, func) {
  console.log(func(a, b));
}

showCalculation(1, 1, sum);
showCalculation(1, 1, multiply);

showCalculation();

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}
