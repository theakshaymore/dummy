function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let output = outer();

console.log(output());
console.log(output());
console.log(output());
