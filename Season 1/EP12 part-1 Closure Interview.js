//* What is a closure?
// Closure is a combination of a function and its lexical environment bundled together forms a closure.
// Each and every function in JavaScript has access/reference to it's parent/outer lexical environment i.e. access to the variables & functions of its parent's environment. So even when the JavaScript functions are executed in some other scope instead of it's original scope, it still remembers it's lexical environment.

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner; // Here not only the function is returned but a closure is returned.
// }
// //* Way 1: To call inner function
// outer()();

// //* The () operator invokes (calls) the function:
// /*
// - first parenthesis: outer() invokes the outer function which in turn returns the inner function.
// - second parenthesis: outer()() invokes the inner function.
// As outer()= inner then outer()() = inner()
// */

// //* Way 2: To call inner function
// var close = outer();
// close();

// //* Q-2) Will Changing the sequence of variable declaration will affect the output?
// function outer1() {
//   function inner1() {
//     console.log(a);
//   }
//   var a = 10;
//   return inner1;
// }
// var close = outer1();
// close();

// //* Q-3) Will Changing variable declaration var to let will affect the output?
// // let has blocked scoped
// function outer1() {
//   function inner1() {
//     console.log(a);
//   }
//   let a = 10;
//   return inner1;
// }
// var close = outer1();
// close();

// //* Q-4) Will Changing variable declaration var to let will affect the output?
// // No, since let has blocked scoped so it can be accessed anywhere inside the {}. As in the code
// function outer1() {
//   function inner1() {
//     console.log(a);
//   }
//   let a = 10;
//   return inner1;
// }
// var close = outer1();
// close();

// //* Q-5) Will passing the parameter to the outer function change the closure ?
// // function with its lexcal environment becomes the closure(inner function with its outer environment). If we pass parameter to the outer function, the parameter will become the part of outer environment. Hence is accessible by the inner function as it forms a closure.
// function outer1(b) {
//   function inner1() {
//     console.log(a, b);
//   }
//   let a = 10;
//   return inner1;
// }
// var close = outer1(40);
// close();

//* Q-6) What if the outer function is nested inside another outer function? Will the inner function will have access to the environment of that function also?
//Yes
// function outermost() {
//   var c = 40;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   // outer(20); // not allowed
//   return outer;
// }
// var close = outermost()("Twenty")();
// close(); TypeError: close is not a function
/** outermost function returns outer function
 * so outermost() = outer
 * outer function returns the inner function
 * so outer() = inner
 * The operator() invokes the function
 * outermost()()() = inner()
 */

//* Q-7) What if there is an global let vraiable with the same name as local let variable
// Whenever any variable is accessed in a function, JS engine will first search for the variable in the local scope of that function. If it is unable to find the variable  in the locaal scope, it will search it's lexical scope. It will go on searching the variable till the global scope. (Scope chaining). If Js engine is unable to find the variable in the global scope also, it will result in ReferenceError: 'a' is not defined.
function outermost() {
  var c = 40;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    // let a = 10;
    return inner;
  }
  // outer(20); // not allowed
  return outer;
}
let a = 100;
var close = outermost()("Twenty")();

