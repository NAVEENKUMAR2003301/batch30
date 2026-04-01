// variable - 3 types


// var , let , const

// var - function scope , global scope

// let - block scope 

// const - block scope

// rules 

// var :- 

// declration  // intialization

var a = 12;

// reuse      // reIntialiazation

    a = 15

// reDeclration

var a = 16


console.log(a);

// let 

let b = 20

    b = 36

// let b = 50 not accept reDeclration

console.log(b)


// const - constant


const c = 50

    //   c = 55  not accept reuse, reDeclration

// const c  = 60 not accept reDeclration

console.log(c);


// console.log(a+b);

// 1
var a = 12;
a = 15;
var a = 16;
console.log(a);    // 16
// What will be the output?

// 2
let b = 20;
b = 36;
console.log(b); //   36 
// What will be the output?

// 3
let b = 20;
let b = 50;
console.log(b); // syntex error
// What will happen?

// 4
const c = 50;
c = 55;
console.log(c); // Type error
// What will happen?

// 5
const c = 50;
const c = 60;
console.log(c); // syntex error
// What will happen?

// 6
var a = 12;
var a = 30;
a = 40;
console.log(a); // 40
// What will be the output?

// 7
let b = 10;
b = 20;
b = 30;
console.log(b);  // 30
// What will be the output?

// 8
var x = 5;
x = 10;
var x = 15;
x = 20;
console.log(x);  // 20 
// What will be the output?

// 9
const y = 100;
y = 200;
y = 300;
console.log(y);  // type error
// What will happen?

// 10
var z = 1;
z = 2;
let z = 3;   // syntex error
z = 4;
const z = 5
console.log(z);  // syntex error 
// What will happen?