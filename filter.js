const mobiles = [
  { Mobile: "Apple", model: "iphone 12", price: 120000, color: "blue" },
  { Mobile: "Samsung", model: "GalaxyNote", price: 80000, color: "red" },
  { Mobile: "Google", model: "pixel6A", price: 95000, color: "black" },
  { Mobile: "Oneplus", model: "9R", price: 50000, color: "Gold" },
];

//using map to specify the mobile
const output2 = mobiles.filter((x) => x.price < 90000).map((x) => x.Mobile);
console.log(output2);

//using single equal to operator
const output1 = mobiles.filter(
  (x) => ((x.Mobile = "Samsung"), (x.model = "iphone13"))
);
console.log(output1);

//using double equal to operator
const output3 = mobiles.filter((x) => x.Mobile == "Samsung");
console.log(output3);

const output = mobiles.filter((x) => x.color == "red");
console.log(output);

//using length to filter the mobilename
const output4 = mobiles.filter((x) => x.Mobile.length > 5);
console.log(output4);
