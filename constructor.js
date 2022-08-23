//Constructor Function

function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
  this.getTodoName = function () {
    console.log(this.name);
  };
}

const todo = new Todo("Buy Eggs", false);
const todo2 = new Todo("Do my homework", false);

todo2.getTodoName();
todo.getTodoName();

//javascript Constructor Examples:
//Here's a few examples of constructors in Javascript:
/* Using the 'this' Keyword
when the this keyword is used in a constructor, it refers to the newly created object:
*/
function User() {
  this.name = "Bob";
}

let user = new User();
console.log(user);
//A constructor can also have parameters:
function Sport(sport, age) {
  this.sport = sport;
  this.age = age;
}

let athlete = new Sport("wrestling", 20);
console.log(athlete);

//W3schools Examples:
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create two person objects
const myFather = new Person("john", "Doe", 50, "blue");
const myMother = new Person("sally", "Rally", 48, "green");

console.log(myFather);
console.log(myMother);

//adding a property to an object:

function Persons(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

// Create 2 person Objects

  const MyFather = new Persons("john", "Doe", 50, "blue");
  const MyMother = new Persons("sally", "Rally", 48, "green");
// Add nationality to first object
 MyFather.nationality = "English";
// Note: you cannot add a new property to an object constructor the same way you add a new property 
// to an existing object
 console.log(MyFather);

  
  

