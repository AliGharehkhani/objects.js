// function Human(alive, name, level) {
//   this.life = alive;
//   this.name = name;
//   this.level = level;
// }

// const number1 = new Human(true, "ali", "intermidiate");
// console.log(number1);

// //we can make above code beautiful by using classes:

// class Enemy {
//   constructor(life, name, level) {
//     this.life = life;
//     this.name = name;
//     this.level = level;
//   }
//   getInfo() {
//     console.log(this.life, this.name, this.level);
//   }
// }

// const turtle = new Enemy(25, "Squidlebuggl", 10);
// const bug = new Enemy(1, "bugymugy", 1);
// turtle.getInfo();
// bug.getInfo();

// class Bug extends Enemy {
//     constructor(life, name, level, legs,dmg) {
//         super(life, name , level);
//         //
//         this.legs = legs;
//         this.dmg = dmg;
//     }
// }

// const john = new Bug(10 , "Buggy" , 1 , 6 , 10);

// console.log(john);
// john.getInfo();

//Fun Stuff with OOP:

class Animator {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  fadeOut(time, toggle = false) {
    if (toggle && this.selector.classList.contains("fadeOut-active")) {
      this.selector.style.opacity = 1;
      this.selector.classList.remove("fadeOut-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.opacity = 0;
      this.selector.classList.add("fadeOut-active");
    }
  }
  move(time, toggle = false, { x = 0, y = 0 }) {
    if (toggle && this.selector.classList.contains("move-active")) {
      this.selector.style.transform = "translate(0px, 0px";
      this.selector.classList.remove("move-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.transform = `translate(${x}px,${y}px)`;
      this.selector.classList.add("move-active");
    }
  }
}

const intro = new Animator("h1");
const btnAnim = new Animator("button");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  intro.move(1, true, { x: 100, y: 200 });
  intro.fadeOut(2 , true)
  btnAnim.move(2, true, { x: 500, y: 30 });
});
