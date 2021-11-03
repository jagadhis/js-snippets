// const users = [
//   { firstname: "aadhi", lastname: "ganesh", marks: 80 },
//   { firstname: "antony", lastname: "prince", marks: 80 },
//   { firstname: "aravindhan", lastname: "lakshmanan", marks: 90 },
//   { firstname: "abirami", lastname: "somasundaram", marks: 75 },
// ];
// const output = users.map(
//   (x) => x.firstname + " " + x.lastname + " " + "scores" + x.marks
// );
// console.log(output);

// const output1 = users.reduce(function (acc, curr) {
//   if (acc[curr.marks]) {
//     acc[curr.marks] = ++acc[curr.marks];
//   } else {
//     acc[curr.marks] = 1;
//   }
//   return acc;
// }, {});

// console.log(output1);

// const output2 = users.filter((x) => x.marks < 90).map((x) => x.firstname);
// console.log(output2);

// const output3 = users.reduce(function (acc, curr) {
//   if (curr.marks > 100) {
//     acc.pop(curr.firstname + curr.lastname);
//   } else {
//     acc.push(curr.firstname + curr.lastname);
//   }
//   return acc;
// }, []);
// console.log(output3);
