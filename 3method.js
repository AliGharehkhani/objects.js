//Bind,call,apply methods in js;

const person = {
  firstName: "Ed",
  lastName: "Developer",
  getName() {
    console.log(this.firstName + this.lastName);
  },
};

function registerUser() {
  //Aditional functionallity....
  this.getName();
}

// and we can binding the person object to registerUser function in this way:
const register = registerUser.bind(person);

register();

//w3schools
//With the bind() method, an object can borrow a method from another object.
//examples:👇👇👇

const odd = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fulName = odd.fullName.bind(member);

console.log(fulName());

//in the following example, the person object has a display method. in the display 
//method, this refers to the person object:

const Person = {
  firstName:"John",
  lastName: "Doe",
  display: function() {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

Person.display();

