//*Q-1) What is closure?
//* (A closure is function bundled together with its lexical environment) [Imp]
/* ->A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. 
->In JavaScript, closures are created every time a function is created, at function creation time.
 */

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}
outer();

//* Functions in Javascript
// 1. You can pass the whole function as argument.
function fun1() {
  var x = 10;
}
fun1(function foo() {
  console.log(x);
});
// ----------2. You can also return s function from another function.---------------
function fun2() {
  var x = 10;
  function foo2() {
    console.log(x);
  }
  return foo2; // returning function from another function
}
var result = fun2();
console.log(result);
/* ƒ foo2() {
    console.log(x);
  }
 */

/**
 //* Revision of Ep07 Lexical environment in order to understanding the above code.
 Q-1) What is lexical environment?
  -> Lexical environment is the local memory along with lexical environment of its parent.
  -> Lexical environment = Local memory + Lexical environment of its parent
 Every function has an execution context, which comprises of an environment that gives meaning to the variables within that functioni.e. variable environment/memory component and a reference to its parent’s environment (as expalined in the Ep07 lexical environment). A reference to the parent’s environment makes all variables in the parent scope available for all inner functions, regardless of whether the inner function(s) are invoked outside or inside the scope in which they were created.

So, it appears as if the inner function “remembers” its lexical environment (or scope) because the function literally has a reference to its lexical environment (and the variables defined in that environment)!
 */

//* What happens when a function returns another function?
/* when a function returns another function, it will return the closure i.e. whole function code along with its lexical environment. That's why still the code inside the function can access the variables of its parent environment even if the parent function is executed and its execution context is deleted.
 */

//*Q-1) What is closure?
//(A closure is function bundled together with its lexical environment) [Imp]
// Example:
function func1() {
  var a = 12;
  function y() {
    console.log(a); // 13
  }
  var a = 13;
  return y; // Returns closure i.e. function along with its lexical environment
}

var z = func1();
console.log(z);
/* ƒ y() {
  console.log(x);
  }
  */
z();

function f1() {
  var a = 1;
  function f2() {
    var b = 2;
    function f3() {
      console.log(a, b);
    }
    f3();
  }
  f2();
}
f1();
// In case the above inner-functions were returned, variables a nd b will have not been garbage collected, instead they would have retain their values even if the execution context of the function in which the variables were declared are deleted
