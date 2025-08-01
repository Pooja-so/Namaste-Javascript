//Hoisting: Calling function statement and fuction exppression before it initialization
funStmt();
// funcExp(); //Uncaught TypeError: funcExp is not a function

//*1. Function Statement: A function who does nothing but just console log a statement
function funStmt() {
  console.log(" This is function statement.");
}

//*2. Function Expression: A function assigned to a varaible is called function expression
var funcExp = function () {
  console.log(" This is function expression.");
};

//*3. Difference between function statement and function expression: Hoisting

//*4. Function Declaration: Function Statement also known as Function declaration

//*5. Annonymous Function: A function without name
// function () { }  //Uncaught SyntaxError: Function statements require a function name
// In ES6 annonymous function results in error  then whats the use of it??
//* Usage: Annonymous functions are used where ftion are used as values

//*6. Named Function Declaration: A function exprsssion with a name to the function
var fun = function namedFunExp() {
  console.log("Named Function Expression");
  namedFunExp(); //Valid as it is created in local scope of fun()
};
fun();
// namedFunExp(); //Uncaught ReferenceError: namedFunExp is not defined // as it is not created in global scope

//*7. Difference between parameters and argument
function definition(param1, param2) {
  console.log("Function definition.");
}
var arg1 = 10,
  arg2 = 20;
definition(arg1, arg2); //

//*8. First class Functions === First Class Citizens
// The ability of function
// i. to be used as values
// ii. to assigned to a variable
// iii. to be passed as argument to another function
// iv. to return from a function

var b = function () {
  // return function xyz() {
  //   console.log("Hello first class hai.");
  // };
};
console.log(b());
//*9. Arrow Function
