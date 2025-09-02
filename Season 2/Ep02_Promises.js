/* Example: In e-commerce website, 
Suppose there is a cart and two apis:
a. placeOrder(cart): Takes cart, places order and returns orderId and 
b. proceedToPayment(orderId): Takes orderId, doing payment and returns receipt
-> Both APIS are asynchronous(Don't know how much time it will take) and dependent on each other
*/
/* How we need to handle async operation with callback 
-> Wrap the api proceedToPayment(orderId) inside function and then pass it as callback to api plaecOrder. 
-> Now it is the responsibility of placeOrder(cart) API to place an order, and then call proceedToPayment() APi */
function placeOrder(cart) {
  // some logic to generate orderId
  let orderId = 123;
  proceedToPayment(orderId);
}
function proceedToPayment(orderId) {
  console.log(`Payment receipt generated for orderId ${orderId}.`);
}

const cart = ["dress", "food", "clothes"];
placeOrder(cart, (orderId) => {
  proceedToPayment(orderId);
});
/** Two major issues using callback were: a. callback Hell and b. Inversion of control */

/* First way to slove the problem: Using Promise */

const promise = placeOrder(cart); // Here placeOrder is an async API call that will return a promise
/* Understand one thing very clearly:
-> Promise is nothing but an object that will store the data return by the API call placeOrder(cart)
-> placeOrder() is an async API, it will take some time to execute but we don't know much
-> Initially, when JS engine executes placeOrder(), it will return an Promise as an empty object containing
 data property something like {data: undefined}. As we know that undefined acts like a placeholder 
which will be replaced with some value in the future. (that value will be the one returned by API Call placeOrder())
-> After Js executes the function, it will not wait for it to be finish, it will continue its exection with the 
next line of code. In the future, after some time, promise empty object will automatically get filled with the data.

Question: What will happen when the promise object gets the desired value?
-> For this we will attach callback function to the promise object using .then() function
-> .then() is a function available in Promise object by default
-> Syntax: promise.then(callback function)
-> Example: 
      promise.then((orderId) => {
        proceedToPayment(orderId);
      });
-> When promise object gets details returned by async placeOrder API, {data: orderId}
the callback function inside then will automatically get called
*/
//----------------- Difference-----------------------------------
/** Old code: function-name(parameter, callback): [NOT RELIABLE]
-> Here we were passing the callback function. i.e. giving away(losing) the control of the callback function
-> Here executing the callback function is within the hand of placeOrder() */
placeOrder(cart, (orderId) => {
  proceedToPayment(orderId);
});
/** New Code: promiseObj.then(callback): 
 -> Here we are attaching the callabck function using .then(). We have the control of the function with us
 -> Here executing the callback function is within the hand of promiseObj. 
 The only job of placeOrder is to place an order and fill the promsiseObj data with orderId. 
 It is not responsible for calling the proceedToPayment() anymore.
-> The promiseObj gives us an garauntee that as soon as it will filled with orderId the callback function inside 
.then will automatically get called for sure unlike the old code.*/

// const promiseObj = placeOrder(cart);
// promiseObj.then((orderId) => {
//   proceedToPayment(orderId);
// });

//--------------------- Real Code Example ------------------------
/* fetch() - It is an API given by browser to us to make external API calls to the server. 
            It return Promise by default.
*/

const userInfo = fetch("https://github.com/Pooja-so");
console.log("User: ", userInfo); // Promise {<pending>}
/* Golmaal🤔😯 
Output: Promise {<pending>} ---- It is pending because when we console.logged user was in pending state
        > [Prototype]: Promise 
          [PromiseState]: "fulfilled" ---- It is showing the current state of the Promise
        > [PromiseResult]: Response 
*/

/** Two main things to know about Promise: Its state and Result
  1. Initially: Promise:
    [PromiseState]: "pending"
    [PromiseResult]: undefined
  2. When we got the result successulfully
    [PromiseState]: "fulfilled"
    [PromiseResult]: Response 
 */

/* Importatnt Points: (Go and read notes in Promise.txt)
  1. Three states in Promise: a. Pending, b. resolve and c. Rejected
  2. Promise is an immutable object. We can pass it over here and there without the fear of getting changed
  3. It resolves and rejects only once
  4. Always remember to return when you are doing promise chaining. 
  So that the next .then(callback) get promise for theh data flow
*/
placeOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (money) {
    return updateWalletBalance(money);
  });

/* NEVER FORGET to "return" in case of Promise Chaining -
 Because of Promise Chaining, our code grow vertically not horizontally
*/

//---------- Equivalent code(Promise Chaning): Using arrow functions(More readability)------------------
placeOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((money) => updateWalletBalance(money));

/* ### MAJOR LEARNING ####
 -> Inversion of control inssue is solved using Promise
 -> Callback Hell issue is solved using Promise chaining.
  */
