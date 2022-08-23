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

// call method W3schools
//this Example calls the fullName method of person, using it on person1:

const PERSON = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};
document.getElementById("demo1").innerHTML = PERSON.fullName.call(person2);

//The call() method can accept arguments Example👇:
const Person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const Person1 = {
  firstName:"John",
  lastName: "Doe"
}


document.getElementById("demo").innerHTML = Person.fullName.call(person1, "Oslo", "Norway"); 