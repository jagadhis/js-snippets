//Function can be called before Initialising is called Hoisting
console.log(printNumber(10, 20));

//variable cannot be done by hoisting it will be taken as undefined.
var x = 7;

console.log(x);

function printNumber(a, b) {
  return a * b;
}
