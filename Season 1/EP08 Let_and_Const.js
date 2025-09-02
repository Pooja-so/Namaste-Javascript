/* Index
- var, let and const
- Are let and const hoisted?
- what is Temporal dead zone?
- Difference: var vs. let and let vs. const
- Errors: RefrenceError, SyntaxError and TypeError
*/

//* Q-1) What is var, let and const?
/*
-> var: The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value. These variables are function-scoped or globally-scoped, meaning they can be accessed and used within the function or throughout the entire program according to declaration.
-> let: The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value. Block-scoped means the variables are only accessible within the {} in which they are declared..
-> const: The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

Q-) SyntaxError vs. ReferenceError vs. TypeError?
*/

//* Q-1) Are let and const declarations hoisted?
/*
Ans Yes, let and const declarations hoisted in JS. But very differently than var declaration. let nad const are in the Temporal dead zone for the time being.
-> Hoisting means we can access the variable and functions even before its initialization because in JavaScript, memory is allocated to the variables and functions even before the single line of code is executed
*/

//* Hoisting for let
console.log(b);
// console.log(z);  // ReferenceError: Cannot access 'z' before initialization
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
const z = 300;
var b = 20;
/**
 -> Memory is allocated to both the variables a and b
 -> But the diference is that 
 - variable a declared with var keyword is stored in global.
 - varibale b declared with let keyword is stored in different memory space than global.
 -> variables declared with let and const keywords are also alllocated memory but they are stored in different memory space than global. you cannot access these memory space before initialization
*/

//* Q-2) What is a Temporal dead zone?
/*
 Ans. The temporal dead zone in JavaScript refers to the period between the declaration of a variable with let or const and its initialization. 
 Temporal dead zone = Time period since the let or const variable is hoisted till it is initialized with some value.
 During this period, accessing the variable will result in a ReferenceError. This occurs because the variable exists in the scope, but has not yet been assigned a value.
*/

// Here is an example of the temporal dead zone in JavaScript:
// console.log(myVar); // ReferenceError: myVar is not defined
// let myVar = 10;
// In this example, trying to access myVar before it has been declared will result in a ReferenceError due to the temporal dead zone.

//** Not a temporal dead zone
let var2;
console.log(var2); // undefined
var2 = 20;
console.log(var2); // 20

//**  Summary **//

// console.log(p); // ReferenceError: p is not defined (beacuse memory is not allocated to variable p)
console.log(r); // undefined (beacuse memory is allocated to variable r with placeholder value undefined in global till it is initialized as it is declared with var keyword)
var r = 100;
console.log(r); // 100

// console.log(t); // ReferenceError: Cannot access 't' before initialization (because memory is allocated to variable r with placeholder value undefined but stored in different memory space than global as it is declared with let keyword) This is temporal dead zone phase
let t;
console.log(t); // undefined
t = 200;
console.log(t); // 200

//*****  Differences: *******//
//* 1) Where variable declared with var and let are stored?
//-> var varibale r is attached to global object as it is stored in global memory space only when declared in global scope not in function scope.
var r = 1000;
console.log(window.r); // 100
console.log(this.r); // 100

//-> let varibale l is not is attached to global object as it is not stored in global memory space.
let l = 2000;
console.log(window.t); // undefined
console.log(this.t); // undefined

//* 2) Can varibale declared with var and let can be re-declared?
//-> var: Yes, varibale decalred with var can be re-declared
var r = 3000;
console.log(r);
//-> let: No, varibale declared with var cannnot be re-declared. JS engine will give SyntaxError when we try to re-declare let variables in same scope.
// let l = 4000; //* SyntaxError: Identifier 'l' has already been declared

//* 3) Difference between let and const varibales?
//-> let and const behaves the same in case of hoisting and temporal dead zone as explained above.
//-> But const is more stricter than let.
//-> let varibale can be declared earlier and initialized later on.
let n;
n = 8000;
console.log(n);
//-> const varibale must be declared and intialized at the same time otherwise JS engine will give SyntaxError
//const m;  //* SyntaxError: Missing initializer in const declaration
const m1 = 4000;
console.log(m1);
//-> const variables cannot be re-assigned otherwise JS engine will give TypeError
//m1 = 5000; //* TypeError: Assignment to constant variable.

//* Q-4) What to use from var, let and const?
/**
 * There are three ways to declare variable in JavaScript. But the most preferrable is to use "const" in first place. 
 * -> when you don't want to change value once assigned use "const". Using "const" helps you to not to run in any unexpected error. 
 * -> Use let only in case where you need to change value  of variable
 * -> Avoiding use var. It is not at all used nowadays. It will be used ver rarely as it need to be used very conciously.
 */

//* Q-5) How to avoid errors occurring due to Temporal dead zone?
// Always keep the variable declarations and initialization at the top. It will shrink the temporal dead zone to zero.