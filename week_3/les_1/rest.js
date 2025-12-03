// selecteer "de rest"
function sum(a, b, ...rest) {
  console.log(rest);

  return a + b + rest.reduce((prev, curr) => prev + curr, 0);
}
// spread operator verzamell de overige argumenten en slaat deze op in een array
// rest operator is altijd o het einde en binnen haakjes
console.log(sum(1, 2, 3));
