/* #################### Ep-04 Hoisting in Javascript ############################*/

//* 1.---------------- Initial stage-----------------
console.log("\n1. Accessing variable after it's declaration");
var x = 70;
function getName() {
  console.log("Namaste Javacript");
}
getName();
console.log(x); // 70

//* 2.----------------Trying to access variable before its initialization--------------------
/* In javascript, we can access the variable even before it's initialization. while in other programming lanaguage it will give error whenever we try to access any variable before its initialization*/
console.log("\n2. Trying to acces variable before its declaration");
getName();
console.log(y); //ReferenceError: y is not defined when y is not declared and try to access it
var y = 80;
function getName() {
  console.log("Namaste Javacript");
}

//* 3. ----------------------Print----------------------------
console.log("3. Printing function variable and function invocation");
console.log(getName);
// console.log(getName());
getName();
function getName() {
  console.log("Namaste Javacript");
}

/**
 Note: The above result: Even before the whole JS code  start executing memory is allocated for each and every variables and functions with default value i.e., undefined for variable & function variables and whole code of function to function 
    1. variable_name: undefined 
    2. function variable: undefined
    3. function_name: () {code of function} -- only if the function is named function. Not an arrow function ---
-> This is the reason why we are able to access variables and functions before its declaration without any error.
 */

//* 4. ------------Hoisting in Named Function-----------------
console.log("4. Accessing Named Function before it's declaration");
getSurname("Singh");
console.log(getSurname);
function getSurname(s) {
  console.log("Surname ", s);
}

//* 5. ----------Hoisting in Arrow function---------------
console.log("5. Accesing arrow function before it's declaration.");
// getValue(); //*TypeError: getValue is not a function
console.log(z);
console.log(getValue);
var z = 20;
var getValue = () => {
  console.log("Accesing value of z: ", z);
};
/* reason for error at line 50: when you are executing the above piece of code, the arrow function getvalue behaves just like variable not a function. It means during the Memory Allocation Phase of the execution context, in memory component the function will be stored as getValue:undefined instead of getValue:(){}
 */

//* 6. ------------Hoisting in Anonymous function-------------
console.log("5. Accesing anonymous function before it's declaration.");
// getMe();
console.log(getMe);
var getMe = function () {
  console.log("Pooja is here!");
};

/* 
-> Anonymous function getMe also behaves like variable. getMe:undefined.
-> In case of Arrow and Anonymous function, the function behaves just like varibale. So during the memory allocation phase, JS engine will allocate memory for the function_name with the palceholder undefined. That's why invoking function before it's declaration gives TypeError: getMe is not a function
-> Only in case of Named function, it will allocate memory to the function_name with it's whole block of code as value i.e. it will treat the function_name as function not as variable.
*/
