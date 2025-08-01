/*----------------------------- The shortest JS Program is an empty file---------------------------- */

/**
 * Main Note: *
 ## 1) What happens behind the scenes when you create an shortest JS Program i.e. an empty .js file ?
 - When you execute an empty .js file, JS engine will still create an Global Execution Context and also set up the memory space, though there is no varaibles or functions present to allocate memory to.
 ### JS engine also does some interesting things:
    - It also create something know as "Window" in the global space.
    - Window is an object that contains its own variables and methods which can be accessed anywhere in the JS Program as it is created in the global space.
    - It also creates an "this" keyword.
    - At global scope, "this" points to "window"
### what is window?
    - Window is an global object which is created along with the Global Execution Context.
### Summary: 
- Whenever any JS Program is run, an Global Execution Context is created, along with it Global Object i.e. "window" and "this" keyword is also created.
 */

console.log(window);
console.log(this);

/**
 ## 2) What Global Object is called in browsers and servers?
 - Global Object in case of browsers is known as "window".
 - JS is not only run on browers but only on servers and on many more devices. Wherever the JS code is running an JS engine is always present. All JS engines has this responsibility to create an global object.
 - This global object created by an JS engine is know as window in case of browser. It is also known as something else in case of Node, internet explorer, Mozilla firefox etc.
 ### Summary:
 - Whenever an JS program is run, an global object is created along with Global Execution Context, even if the file is empty.
 */

/**
 ## 3) What else is created along with Global Execution Context other than global object?
 - Whenever an JS program is run, "this" keyword is also created along with Global Execution Context
 - "this" is cretead along with every Execution Context created i.e. for Global Execution Context as well as for function execution context.
 - At global level, this===global object i.e. this===window in case of browser.
 ###Summary:
 - "this" keyword is created both at the global level as well as at the local level. In short, "this" keyword is created along with every Execution Context created.
 */

console.log(window === this); // true

/**
 4) What is global space?
 - Whatever code which you write outside the function i.e. the code which is not inside the function is said to be in the global scope.
 */

var a = 10;
function b() {
  var x = 10;
}

// Here variable a is in the global scope
// Any variable or function created outside the function i.e. in the global space get attached to the global object
console.log(window.a);
console.log(this.a);
console.log(a); // when you don't put anything in front of variables & functions, JS engine assumes that you are referring to the variable created in the global space.

console.log(x); //ReferenceError: x is not defined
/*  JS engine gives the ReferenceError because as var x is in the local scope but it will try to find the variable x in the global scope as nothing is written in front of it */
