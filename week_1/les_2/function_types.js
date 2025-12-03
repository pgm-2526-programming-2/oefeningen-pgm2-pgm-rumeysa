sum(7, 4); // Werkt ook!

function sum(a, b) {
  return a + b;
}

sum(3, 4); // Werkt

// anotherSum(2, 3); // Werkt niet!
// Function expression
const anotherSum = function (a, b) {
  return a + b;
};

anotherSum(2, 3); // Werkt

// Arrow functions

const arrowSum = (a, b) => {
  return a + b;
};

// Geen curly braces? Return het statement.
const altArrowSum = (a, b) => a + b;
