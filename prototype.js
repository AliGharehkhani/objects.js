// What is prototype???
// in the previous chapter we learned how to use an object constructor:
//Example using an object constructor

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("john", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

document.getElementById("demo").innerHTML =
  " my father is " + myFather.age + " " + ", My mother is " + myMother.age;

//We also learned that you can not add a new property to an existing object constructor:

// about abowe instance we can't  set property to Person object becuase
// if we set this property we get an undefined output

personalbar.nationality = "English";

// to add a new property to a constructor, you must add it to the constructor function
function Person1(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyecolor = eye;
  this.nationality = "English";
}

const father = new Person1("john", "Doe", 50, "blue");
const mother = new Person1("Sally", "Rally", 48, "green");

document.getElementById("demo1").innerHTML =
  "THE nationality of my father is " +
  father.nationality +
  ". The nationality of my mother is " +
  mother.nationality;

//The javascript protorype property allows you to add new properties to
//object constructor:
//Example:

function Individual(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Individual.prototype.nationality = "English";

const Father = new Individual("john", "Doe", 50, "blue");
document.getElementById("demo3").innerHTML =
  "the nationality of my father is " + Father.nationality;

//The javascript prototype property also allows you to add new methods to objects constructor:

function Man(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Man.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

const FATHER = new Man("ahmad", "gharehkhani", 50, "blue");
document.getElementById("demo2").innerHTML = "My father is " + FATHER.name();

// note: only modify your own prototypes. Never modify the properties of standard javascript objects.

// so let's go back to Edwin's magical training
function Todo(name, completed){
    this.name = name;
    this.completed = completed;
};

Todo.prototype.getTodoName = function() {
    console.log(this.name)
}


const todo = new Todo("Buy Eggs", false);
const todo2 = new Todo("Do my homework", false);

todo.getTodoName();

console.log(todo , todo2);