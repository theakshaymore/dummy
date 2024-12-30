let person = {
  name: "Akshay",
  greet() {
    console.log(`Hi, I'm ${this.name} `);
  },
};

let output = person.greet();

let anotherOutput = person.greet;
anotherOutput();

let thirdOutput = person.greet.bind({ name: "Kunal" });
thirdOutput();
