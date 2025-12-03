// extra

class Student {
  constructor(firstName, initialAge) {
    this.name = firstName;
    this.age = initialAge;
  }

  getOlder() {
    function increaseAge(initAge) {
      // 'this' slaat op de function.
      this.age = initAge + 1; // Geeft foutmelding.
    }

    // functie met hoofdletter? constructor

    function Person() {
      this.name = "rumo";
      this.age = 22;
    }

    const increaseAge = (initAge) => {
      // 'this' slaat op de Class zelf.
      this.age = initAge + 1; // Werkt want arrow functions hebben geen 'this' keyword.
    };

    increaseAge(this.age);
  }
}

const favoriteStudent = new Student("Jan", 20);
const newStudent = new Student("Mert", 25);
const erasmusStudent = new Student("Juan", 21);

console.log(
  favoriteStudent.age,
  favoriteStudent.name,
  favoriteStudent.getOlder()
);
