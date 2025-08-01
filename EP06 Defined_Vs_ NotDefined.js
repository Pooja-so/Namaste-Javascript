/** 1) undefined vs Not defined in the javascript
 In JavaScript, "undefined" is a special value that indicates that a variable has been declared but has not been assigned a value. On the other hand, "not defined" refers to a variable that has not been declared or is out of scope.
 */

// 1. "Undefined" means a variable has been declared but has not been assigned a value. For example:
var x;
console.log(x); // Output: undefined

// 2. "Not defined" means a variable has been used without being declared. For example:
// console.log(y); // Output: ReferenceError: y is not defined

/**
 -> undefined value is a placeholder indicates that memory is allocated to the variable but value is not initialized to it.
-> Not defined indicates that memory is not allocated to the variable or the variable is out of scope or the Variable does not exists.
-> undefined does not mean empty. It's like a placeholder that is assigned to a variable till it is not initialized indicating that memory is allocated to the variable but value is not initialized to it yet.
 */

var a;
console.log(a); // undefined

if (a === undefined) {
  // true
  console.log("a is undefined"); // a is undefined
} else {
  console.log("a is not undefined");
}

var x = 10;
console.log(x); // 10

if (x === undefined) {
  // false
  console.log("x is undefined");
} else {
  console.log("x is not undefined"); // x is not undefined
}

/**
 2) Javascript is a loosely-typed language/ weakly-typed language
 -> Loosely typed language means that it does not attaches it variables to any specific data types. Suppose we declare a variable "x" and store string in it, we can later on also store number, boolean or any value in the variable 'x' irrespective of its data type.
 -> JS is a loosely typed language (flexible). It is not strict typed language like 'C language' in which we must store value in the variable depending on the data type specified during its declaration. e.g. int a; can only store integer value it cannot store charcater, boolean or any other data type.
 */
console.log("- 2. Example of loosely typed language:- ");
console.log("Value of p");
console.log(" Before initialization:", p);
var p = 10;
console.log(" After initialization:", p);
console.log("Storing number:", p);
p = "pooja";
console.log("Storing string:",p);

/**
 3) Bad Practice: Avoid below mistake:
 */
p = undefined // Though it is valid, but it is considered bad practice because undefined indicates that memory is allocated to the variable and it has been not intialized with a value yet. So don't put undefined as hard code.