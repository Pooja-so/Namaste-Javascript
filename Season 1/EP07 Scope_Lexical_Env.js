// ## ********** Scope in JavaScript is directly related to the Lexical environment *************
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
console.log(b);

/*
1) What is scope? 
Scope means the place where you can access a specific variable or function in a code.
*/


/* *Understanding concepts of scope with the help of above code
1. What is the scope of varaible b?
- The scope of variable b means where you can acces variable b in the code.

2. Is varibale b inside the scope of function c?
- It means can i acces the varibale b inside the function c.
 */

/** Lexical Environmet
  -> Whenever any execution context is created, an lexical environment is also created

  (Important point)
  Q-1) What is lexical environment?
  -> Lexical environment is the local memory along with lexical environment of its parent.
  -> Lexical environment = Local memory + Lexical environment of its parent

  Q-2) What is lexical?
  -> lexical means in a hierachy or in a sequence.
  -> In above code, 'c function' is lexically inside the ,'a function'i.e. 'c function' is physically placed inside the ,'a function'. 'function a' is lexically placed inside the Global Execution Context
 */

  function a() {
    // var b = 10;
    c();
    function c() {
      console.log(b); // ReferenceError: b is not defined
    }
  }
  a();
  console.log(b);
  