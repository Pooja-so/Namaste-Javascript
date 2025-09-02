// * Advantages of Closure */
// 1. Data hiding/Encapsulation
// Encapsulate the data so that the other functions/part of program can not access it.

//Example:
// var counter = 0;
// function incrementCounter() {
//   counter++;
// }
// The problem with the above code is that as the counter variable is declared in the global scope, all the functions in the program can access it and modify its value.
// In order to hide the counter variable so that no other function can access it, we can encapsulate the variable and the function that operates on that variable inside other function
function counter() {
  var count = 0;
  return function increment() {
    count++;
    console.log(count);
  }; // when we return the function, the closure is returned
}

// var counter1 = counter();
// counter1();
// Now as the data is hidden if somebody tries to access the variable outside the counter() function it will result in error.

// The below code creates a new fresh counter(), new closure is returned
// var counter2 = counter();
// counter2();

//* Function Constructor

function Counter() {
  var count = 0;
  this.incrementCounter = () => {
    count++;
    console.log(count);
  };
  this.decrementCounter = () => {
    count--;
    console.log(count);
  };
}
var counterObj = new Counter();
counterObj.incrementCounter();
counterObj.incrementCounter();
counterObj.decrementCounter();

//* Disadvantages of Closure:
/**
 - There could be an overconsumption of memory in closures. Everytime when a closure is formed, it consumes a lot of memory and the inner(closed over) variables are not garbage collected. As the varaibles are not garbage collected till the program expires. If not handled properly it can leads to memory leak.
 */

//* What is garbage collector?
// - https://medium.com/swlh/garbage-collection-in-javascript-b1e4dbffb51

//* What is the relation between garbage collection and closure?
function outer() {
  var a = 10;
  return function inner() {
    console.log(a);
  };
}
var fun = outer();
/* 
- In normal scenario, we expects that after the outer function is executed the memory allocated to the function  e.g. its varaible must be garbage collected so that the memory freed can be allocated to other.
- But as the outer function forms a closure with the inner function as its returns inner function (x is referred by the inner function  which is returned by the outer function due to which it cannot be freed beacuse we cannot say where we will need the variable in our program)- For exmaple, when we call outer function it will return inner function which forms closure with its lexical environment. As the inner function is referring to the variable present in outer function, we cannot free the memory allocated to the variable even if the outer function has finished executing because we cannot say when we'll no longer need the variable as the fun function in above code can be called whenever we need it.
- However in  some modern browsers and JS engine like V8 and Chrome has Smart Garbage Collection which finds out the variables that are unreachable and they smartly collects these variables.
*/
//* What is Smartly collecting garbage means?
/* */
function outer1() {
  var a = 10, z=100;
  return function inner1() {
    console.log(a);
  };
}
var fun1 = outer1();
/* In above function both the varaibles a,z forms the closure with the inner1 function but as the varibale z is not used inside the inner1 function so after the outer1 function is executed the variable z wil be garbage collected by modern browsers and Js engine.  */
