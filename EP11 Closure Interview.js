function x() {
  var i = 2004;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Namaste JavaScript");
}
x();

/* JS engine will first execute console.log("Namaste Javascript"). JS executes the callback function written inside the setTimeout function after 3 secs only. 
//* JS engine does not wait till 3 seconds. It will keep on going executing the code and after 3 seconds it will execute the callback function of setTimeout(). */

//* very important note:
/**
 *  The callback function inside the setTimeout() forms a closure i.e. the callback function will remmeber the references of it lexical environment. for exmaple, the callback function in the above code, remmeber the reference of var i.
 */

//* Q-1) how the setTimeout() works:
/**
  setTimeout() takes the callback function, attaches a timer to it and store it somewhere. When the timer expires, it calls the function. The JS engine does not waits when it sees setTimeout() i.e., till the timer expires, it continue executing the code and when the timer expires it will executes the ca;;back function.
*/

//* Explanation EP11 : 7:01
// function y() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// y();

// function y() {
//     for (var i =10 ; i <= 14; i++) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//   }
//   y();

//   function z1() {
//     for (var i =1 ; i <= 5; i++) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//   }
//   z1();

//* Solution1: Using let instead of var because let is blocked-scope. So after every block, a new copy of let i is created, referring to a new reference of i
// function z2() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);z
//   }
// }
// z2();

//* Solution1: Using var but Wrapping the setTimeout() inside function, because var is function-scoped. So after every function, a new copy of var j is created, referring to a new reference of j
// function z1() {
//   for (var i = 1; i <= 5; i++) {
//     function close(j) {
//       setTimeout(function () {
//         console.log(j);
//       }, j * 1000);
//     }
//     close(i);
//   }
// }
// z1();


