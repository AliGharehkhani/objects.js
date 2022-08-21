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
  this.getName()
}

// and we can binding the person object to registerUser function in this way:
const register = registerUser.bind(person);

register();