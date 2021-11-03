const mobiles = [
  { Mobile: "Apple", model: "iphone 12", price: 120000, color: "blue" },
  { Mobile: "Samsung", model: "GalaxyNote", price: 80000, color: "red" },
  { Mobile: "Google", model: "pixel6A", price: 95000, color: "black" },
  { Mobile: "Oneplus", model: "9R", price: 50000, color: "Gold" },
];

const supermarket = [
  { Product: "Pen", Quantity: 10, Price: 50, Total: 200 },
  { Product: "paper", Quantity: 100, Price: 2, Total: 100 },
  { Product: "Snacks", Quantity: 5, Price: 20, Total: 100 },
  { Product: "charger", Quantity: 1, Price: 100, Total: 100 },
];

//using simple reduce
const sample = [1, 2, 5, 8].reduce(sum, 10);
function sum(acc, a) {
  return acc + a;
}
console.log(sample);

//using reduce funciton for a array
const output2 = supermarket.reduce(function (acc, curr) {
  return acc + curr.Total;
}, 0);
console.log(output2);

//using reduce by arrow function
const output3 = supermarket.reduce((acc, curr) => {
  return acc + curr.Price;
}, 0);
console.log(output3);

//using reduce to count the values
const output = mobiles.reduce(function (acc, curr) {
  if (acc[curr.price]) {
    acc[curr.price] = ++acc[curr.price];
  } else {
    acc[curr.price] = 1;
  }
  return acc;
}, {});
console.log(output);
