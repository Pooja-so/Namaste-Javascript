//** How function invocation behaves Behind The Scenes*/

var x = 1;

// we can invoke the Named Function before it's intialization due to Hoisting
a();
b();
console.log(x);

// Here a nd b are Named functions
function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

/*Output:
10
100
1
*/

/*
//* Note: What happens behind the scenes when an function is invoked ?

-> Whenever any JS program is executed, an Global Execution Context is created(GEC), GEC is pushed into the Call Stack.
-> Whenever any function is invoked, a brand new Execution Context is created and pushed into the call stack.
-> When an function is executed completely, it execution context is deleted and popped off from the call stack.
-> When the whole JS program is executed completely, Global Execution Context is deleted and popped off from the call stack. Now the call stack becomes empty.

//*-> Execution Context has two components: Memory and code component created in two phases:
    //*  1) Memory Creation(Allocation) Phase: 
    -> In this phase, memory is allocated for all variables and functions and stored in memory component as key:value pair as follows:
      a. variable: undefined
      b. Named function: (){...}  // whole block of code of named function
      c. Arrow function: undefined
      d. Anonymous function: undefined
      --> Arrow and Anonymous function are treated as variable.
    //*  2) Code Execution Phase: 
    -> In this phase, JS code is executed line by line starting from the first line of code. When an function invocation is encountered, its brand new Execution Context is created inside the Code component. It's memory component contains the variable declared inside the function. In code execution Whenever any variable is refernced the JS engine looks for the varibale inside the local scope i.e. inside the function itself. (Whenever any variable is referenced, JS engine looks for the variable around its closest scope. First in its local scope. if not present then in the scope above it)
*/

/**
 //* Main Note:
  -> Whenever a new execution context is created, it will have its own seperate memory space.
  -> Even if the execution context is created by JS code (Global Execution Context is created(GEC)) or function invocation (Local Execution Context) or any other Execution Context, they will have their own memory space, virtual environment, where they are running seperately independent of ecah other.
 */