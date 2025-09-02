//* Index
/**
- What is block? 
 */

//* Q-1) What is block?
/* -> In JavaScript, a block is a set of statements grouped together within curly braces {}. Blocks are commonly used in control structures such as if statements, for loops, and functions.
-> A block statement is used to group zero or more statements. The block is delimited by a pair of braces ("curly braces") and contains a list of zero or more statements and declarations.
*/
{
  // Block also known as Compound statement.
}
//* Q-2) What is the use of block?
/**
-> Block is used to combine multiple line of statements into one group.
-> (imp) We group multiple statement together in a block so that we can use where javascript expects one statement.
-> For example, conditional statement if expects one statement otherwise it will give SyntaxError
 */
//if(true) //*SyntaxError: Unexpected end of input
// if condition expects single statement to be executed in case if the condition is true. we can write single statemnet without using curly braces. But when we need to write multiple statements we wrap it inside {} to represent it as a single statement.
if (true) {
  let l = 20;
  console.log(l);
}

//* Q-3) What is block scope?
/**
 -> The block scope of a variable means that the variable is accessible within the block only i.e. between the curly braces. An is not accessible outside the block.
 -> Block scope in JavaScript refers to the scope of variables defined within a block of code, such as within a function, loop, or conditional statement. Variables declared with the let and const keywords have block scope, meaning they are only accessible within the block in which they are defined.
 */

{
  // a is hoisted inside the global scope
  var a = 10;
  // b and c are hoisted in block scope
  let b = 20;
  const c = 30;
}
//* Main point
/**
 -> let & const are blocked scope whereas var is global or function scoped
 - let and const varibales are allocated memory but are stored in seperate memory space than global 
 -> var variables are stored in global memory space.
 */

//* Q-3) What is shadowing?
/**
  -> Variable shadowing is a concept in JavaScript where a variable declared in an inner scope with the same name as a variable in an outer scope, the inner varibale shadows or hides the outer variable.
  */

//* 3.1 Shadowing in var varibale
var a = 100;
{
  var a = 200;
  console.log(a); // 200
}
console.log(a); // 200
/**
 * -> var varibales have function-level scoping, which means that variables declared inside a function are only accessible within that function and its nested functions.
 -> In above code, memory is allocated for varibale 'a' and stored in global memory space.
 -> When we declare the var varibale in inner scope with same name  as declared in outer scope, the inner var vraible shadows or hides the outer var vraiable. (In memory, the var variable points to the same reference i.e. both the inner and outer var varibale are smae reference stored in global memory space.) 
->That's why in case of variable declared with var keyword, the inner variable modifies the value of outer varibale because variables declared with var has:
i) function or global-level scoping  
ii) stored in function or global memory space
 */
//* var varibale global-level scoping
var a = 100;
{
  var a = 200;
  console.log(a); // 200 (inner varibale shadows outer variable)
}
console.log(a); // 200 (inner variable initialization modifies the outer varibale as they both points to the same reference stored in global memory space)

//* var vraible function-level scoping
var y = 15;
function foo() {
  var y = 20;
  console.log(y); // 20
}
foo();
console.log(y); // 15

//* 3.2 Shadowing in let variable & const
/* let and const variables has block-level scoping means that variables declared inside {} are accessible within that {} only. they are not accessible outside that {}*/
let z = 1000;
const c = "Pooja";
{
  let z = 3000;
  const c = "Ray";
  console.log(z); // 3000
  console.log(c); // Ray
}
console.log(z); // 1000
console.log(c); // Pooja

//* Shadowing behaves the same in function
var r = 10;
function fun() {
  var r = 20;
  console.log(r); // 20
}
console.log(r); // 20

let l1 = "l1";
const c1 = "c1";
function fun1() {
  let l1 = "l2";
  const c1 = "c2";
  console.log(l1); // l2
  console.log(c1); // c2
}
fun1();
console.log(l1); // l1
console.log(c1); // c1

//* Q-4) What is Illegal Shadowing?
/*-> If you create a variable  with the let keyword in a global scope and another variable with the var keyword in a block scope with the exact same name, it will throw an error. This is called illegal shadowing.
//*-> Example of Illegal Shadowing:
let user = "Sam";
{
  var user = " Samaira"; //*SyntaxError: Identifier 'user' has already been declared
}
// Rules: 
-> If a variable is shadowing another variable it should not cross the boundary of its scope.
let variable has block-level-scope and var variable has function-level-scope. 
In above code, var variable crosses the scope boundary as it does not has block-level-scoping Js engine will throw an error.
 */
//*-> Example of Legal Shadowing:
let user = "Sam";
function fun3() {
  var user = " Samaira";
}
fun3();
// The above code is legal because now var user is not crossing the boundary as it has function-level scoping. So now var can legally shadow let variable.

//* Block scope also follows lexical scope
//* Q-5) What is lexical scope?
/*  lexical: one inside another
 */
const t = 10;
{
  const t = 20;
  {
    const t = 30;
    console.log(t); // 30
  }
  console.log(t); // 20
}
console.log(t); // 10
