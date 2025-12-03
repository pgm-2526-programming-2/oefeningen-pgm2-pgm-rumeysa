const student = Symbol("rumo");
const person = Symbol("rumo");

console.log(
  student,
  student.toString(),
  student.description,
  student === person
);

// uppercase variables: waarde die nooit zulen veranderen en je gebrukt  die in heel je project "optie" dit is een confentie dit zijn varden die nooit veranderen drm hoofdletters
const STATES = {
  LOADING: Symbol("laden"),
  LOADED: Symbol("laden"),
};

console.log(STATES.LOADED === STATES.LOADING);
