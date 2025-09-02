const arr = [1, 2, 3, 4];
console.log("Original array: ", arr);

//* Map: The map() method of Array instances creates a new array populated with the results of calling a provided callback function on every element in the calling array.
//Example: Give an output aray containing binary
const output = arr.map((x) => x.toString(2));
console.log("Binary equivalent of array: ", output);

//* filter: The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// Example: Filter out the odd values
const odd = arr.filter((x) => x % 2);
console.log("Odd array:", odd);

//*Reduce:

// Example1: Finding sum
const array1 = [1, 2, 35, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
// Expected output: 10

const sum = array1.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(sum);

// Example 2: Finding maximum

const max = array1.reduce((accumulator, currentValue) =>
  Math.max(accumulator, currentValue)
);
console.log("Maximum value: ", max);

//______________________________________________________________________________________________________________________________//

// Example1
const users = [
  { firstName: "Akshay", lastName: "Saini", age: 26 },
  { firstName: "Tia", lastName: "Sharma", age: 26 },
  { firstName: "Ratan", lastName: "Tata", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
];

const fullName = users.map((user) => {
  return user.firstName + " " + user.lastName;
});

console.log(fullName);

// Example2:
const ageGrp = users.reduce((ageObj, user) => {
  if (ageObj[user.age]) {
    ageObj[user.age] += 1;
  } else {
    ageObj[user.age] = 1;
  }
  return ageObj;
}, {});

console.log("Age Grouping: ", ageGrp);

//*Example3: First name of all the people whose age is less than 30
//Problem with using map
const youngAdult2 = users.map((user) => {
  if (user.age < 30) return user.firstName;
});
console.log(
  "First name of all the people whose age is less than 30: ",
  youngAdult2
);

// Solution1: we need to use filter and then map (Here map function runs on the filtered output array)
const firstName30Age = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);
console.log("Solution1: Users whose age is less than 30: ", firstName30Age);

//Solution2: USing reduce
const firstName30Age2 = users.reduce((youngAcc, user) => {
  if (user.age < 30) {
    youngAcc.push(user.firstName);
  }
  return youngAcc;
}, []);
console.log("Solution2: Users whose age is less than 30: ", firstName30Age2);
