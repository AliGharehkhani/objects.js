sayHi();

let inbox = 10;

console.log(inbox);

function sayHi() {
  console.log("hello");
}

//Introduction to the JavaScript execution context
//Example:
let x = 10;

function timesTen(b) {
  return b * 10;
}

let y = timesTen(x);

console.log(y);

//JavaScript call stack example:
function add(a, b) {
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

let l = average(10, 20);
console.log(l);

//this Keyword
//A POINTER -> IT REFERS TO AN OBJECT

const lists = document.querySelectorAll("li");

lists.forEach((li) => {
  li.addEventListener("click", function () {
    console.log(this);
  });
});

const user = {
  name: "developedbyed",
  videos: ["html", "css", "js", "react"],
  greet() {
    console.log(`Hello there ${this.name}`);
    this.videos.forEach(video => {
      console.log(this);
    });
  },
};
user.greet();
