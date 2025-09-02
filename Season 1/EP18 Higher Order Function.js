//--------------------- Non-modular Programming --------------------------------//

const radius = [1, 2, 3, 4];
console.log("Radius: ", radius);

const calculateArea = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.PI * arr[i] * arr[i]);
  }
  return result;
};

console.log("Area of radius array: ", calculateArea(radius));

const calculatePerimeter = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(2 * Math.PI * arr[i]);
  }
  return result;
};

console.log("Perimeter of radius array: ", calculatePerimeter(radius));

const calculateDiameter = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(2 * arr[i]);
  }
  return result;
};

console.log("Diamter of radius array: ", calculateDiameter(radius));

//--------------------- Modular Programming --------------------------------//
/*
1. Follow DRY(Don't Repeat Yourself) Principle
2. Use functional programming approach: Break down your code into functions that perform tasks to avoid code redundancy and enhnaces code reusability 
3. //* Functions that takes another function as argument and/or returns function is called higher order functions. Functions are the first class citizens.
4. //* Functions passed as argument are called callback functions.
5. If we define fucntion as Array.prototype.functionName then that functions will be avilabe to all the arrays in your code.
*/

const area = function (radius) {
  return Math.PI * radius * radius;
};

const perimeter = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (arr, logic) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(logic(arr[i]));
  }
  return result;
};

console.log("Area of radius array: ", calculate(radius, area));
console.log("Perimeter of radius array: ", calculate(radius, perimeter));
console.log("Diamter of radius array: ", calculate(radius, diameter));

// Syntax similar to map function

Array.prototype.calculateCircle = function (logic) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(logic(this[i]));
  }
  return result;
};
console.log(" Using Map ");
console.log("Area of radius array: ", radius.map(area));
console.log("Using Array.prototype: ");
console.log("Area of radius array: ", radius.calculateCircle(area));
