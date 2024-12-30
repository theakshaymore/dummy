function Person(name) {
  this.name = name;
}

Person.prototype.myFun = function () {
  console.log(`Hello from myFun ${this.name}`);
};

let output = new Person("Akshay");
output.myFun();
