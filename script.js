// // variable - 3 types


// // var , let , const

// // var - function scope , global scope

// // let - block scope 

// // const - block scope

// // rules 

// // var :- 

// // declration  // intialization

// var a = 12;

// // reuse      // reIntialiazation

//     a = 15

// // reDeclration

// var a = 16


// console.log(a);

// // let 

// let b = 20

//     b = 36

// // let b = 50 not accept reDeclration

// console.log(b)


// // const - constant


// const c = 50

//     //   c = 55  not accept reuse, reDeclration

// // const c  = 60 not accept reDeclration

// console.log(c);


// // console.log(a+b);

// // 1
// var a = 12;
// a = 15;
// var a = 16;
// console.log(a);    // 16
// // What will be the output?

// // 2
// let b = 20;
// b = 36;
// console.log(b); //   36 
// // What will be the output?

// // 3
// let b = 20;
// let b = 50;
// console.log(b); // syntex error
// // What will happen?

// // 4
// const c = 50;
// c = 55;
// console.log(c); // Type error
// // What will happen?

// // 5
// const c = 50;
// const c = 60;
// console.log(c); // syntex error
// // What will happen?

// // 6
// var a = 12;
// var a = 30;
// a = 40;
// console.log(a); // 40
// // What will be the output?

// // 7
// let b = 10;
// b = 20;
// b = 30;
// console.log(b);  // 30
// // What will be the output?

// // 8
// var x = 5;
// x = 10;
// var x = 15;
// x = 20;
// console.log(x);  // 20 
// // What will be the output?

// // 9
// const y = 100;
// y = 200;
// y = 300;
// console.log(y);  // type error
// // What will happen?

// // 10
// var z = 1;
// z = 2;
// let z = 3;   // syntex error
// z = 4;
// const z = 5
// console.log(z);  // syntex error 
// // What will happen?


// printing statement


// 1. console.log()

let b = 20

console.log(b);

console.log(50);



// 2. alert()
 
// let b1 = 50

// alert("hello team")



// 3. confirm()

// confirm("did you know js !")

// 4. prompt()

// prompt("what is your name :- ")

// 5. document.writeln()

// let c = 60

// document.writeln(c)



// i want to print (hello) in console side 

console.log("hello");


// i want show good morning to ui side .


document.writeln("good morning")


// i want to know user wish , the question :- is user like apple !

// let userWish = confirm("do you like apple ")

// console.log(userWish);


// i want to get user age

// const userAge = prompt("what is your age :- ")

// console.log("user age :- ",userAge);



// console method :- 

// 1. console.log()

  console.log(100);
  


// 2. console.warn()

  console.warn(100);



// 3. console.error()

  console.error(100)


// 4. console.clear()

console.clear()


// DataTypes 

// 1. primitive datatype 


//    types :-

// 1. string   - "hello"


   let b3 = "naveen"

   console.log((b3));
   


// 2. number

   let num = 123

   console.log(typeof(num));
   

// 3. boolean

   let boo  = true 

   console.log(typeof(boo));
   

// 4. undefined 

let d1;

console.log(d1);


// 5. null

// let d2 = prompt()

// console.log(d2);



// 2. non primitive datatype

// type 

console.log("non primitive datatype");


// array 

// []

let fruit = ["pineApple","apple","orange","banana","guava","cherry","banana"]

console.log(fruit);

console.log(fruit[0]);
console.log(fruit[3]);


// dynamically i manipulate array first value :- 

console.log(fruit[0]);


// dynamically i manipulate array last value :- 

console.log(fruit[fruit.length-1]);


fruit = ["pineApple", "apple", "orange", "banana", "guava", "cherry", "banana"];

// object 

// {}

let detialsFruit = {
   
    yellowFruit : ["pineApple","banana"],
    redFruit    : ["apple","cherry"],
    orangeFruit : "orange"

}


console.log(detialsFruit);

console.log(detialsFruit.orangeFruit);

console.log(detialsFruit.yellowFruit[1]);

console.log(detialsFruit.redFruit[0]);


console.clear()


//  operators 

// arithmetic operator

// addition (+)

console.log(1 + 2);

// subraction (-)

console.log(2-2);

// multiplication (*)

console.log( 10 * 10 );

// division  (/)

console.log((10/10));


// modulus    (%)

console.log(10%10);


// exponencial   (**)


console.log(2**3); // 2^3 = 2*2*2 = 8

console.clear();


// increament (++) = +1 

// type 

// 1. post increament    = var++

// 2. pre increament     = ++var



// decreament (--) = -1 

// type 

// 1. post decreament    = var--

// 2. pre decreament     = --var


// example 

let number = 10

number++


console.log(number);

// your searching element first find in varible side. you can calculate the value side till the varible.


let num1 = 2       // null

    num1 = ++num1  // num1 = ++2 = 3

    console.log(num1);


// your searching element first find in value side . you can calculate the full value side.


let num2 = 3

let num3 = num2++ 

console.log(num2); // num2 = 4
console.log(num3); // num3 = 3


let num4 = 2     // 

let num5 = --num4 // --num4 = --2 = 1

let num6 = num5++ //  num5 = 1


console.log("num4 : ", num4); // 1    2  // num4 = 1
console.log("num5 : ", num5); // 1  2 1  // num5 = 2
console.log("num6 : ", num6); // 1  2 1  // num6 = 1




    











// assignment operator

// comparision or relational operator

// logical operator

// ternary operator




// function 

// date





