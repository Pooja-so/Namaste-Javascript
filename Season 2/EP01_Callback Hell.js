/* Remember: 
1. Javascript is Synchronous Single-threded language.
2. Time, Tide and JavaScript wait for none.
3. But in order to excecute peice of code after sometimes, 
we wrap that code within function and pass callback function 
to setTimeout(cb, delay). 
"Callback plays an important role in writing asynchronous code in JS."
 */
/*-------------------- Two main problems using callback ------------------------ */
/*
## First problem: Callback Hell
Real World Scenarios: In e-commerce website, in order to buy a product 
1. first we need to place an order
2. Then do payment. 
3. send confirmation mail to the user.
-> There is depenedency (asynchronous code : one operation(Payment) needs to waits for other(Place an order) to proceed)
Here callback will be handy as we want to write async code.
*/

/* Structure: api.placeOrder(cart, callback(proceedToPayment( payment, callback(sendEmail())))) 
 placeOrder -> proceedToPayment -> sendEmail */
api.placeOrder(cart, function () {
  api.proceedToPayment(payment, function () {
    api.sendEmailConfirmation(function() {
        api.updateWallet();
    });
  });
});
/* How it will execute: JS will execute placeOrder() and 
then it is the responsibility of placeOrder() to execute proceedToPayment()
then further it is the responsibility of proceedToPayment() to execute sendEmailConfirmation()
then after email is send, we need to update the wallet
This leads to the problem known as "Callback Hell" also known as "Pyramid of Dom"*/

/* ## Second Problem: Inversion of control: 
-> Lose the control of your code while using callback
-> For example , in below e-commerce scenario, here we are giving the control of proceedToPayment() 
to placeOrder() function i.e it is responsibility of placeOrder() to call back proceedToPayment() 
when it work is done. But we never know that in future whether placeOrder() will call proceedToPayment() or not.
*/
api.placeOrder(cart, function () {
  api.proceedToPayment(payment, function () {
  });
});

/* Summary
1. Callback are super-powerful way of handling Asynchronous opertions in javascript.
2. Asynchronous opertions exists because Callback exists.
3. Two major problems while writing callaback: 
 a. Callback Hell (Deep Nested callbacks where one callabck function is dependent on the previous one) and 
 b. Inversion of control - We lose control of our program because we pass one callabck function into another function
 results in passing the control of that function to another function. 
 SO we will know whether that function will execute the passed callback function in future
*/