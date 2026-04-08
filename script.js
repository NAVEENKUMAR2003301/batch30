// // // variable - 3 types


// // // var , let , const

// // // var - function scope , global scope

// // // let - block scope 

// // // const - block scope

// // // rules 

// // // var :- 

// // // declration  // intialization

// // var a = 12;

// // // reuse      // reIntialiazation

// //     a = 15

// // // reDeclration

// // var a = 16


// // console.log(a);

// // // let 

// // let b = 20

// //     b = 36

// // // let b = 50 not accept reDeclration

// // console.log(b)


// // // const - constant


// // const c = 50

// //     //   c = 55  not accept reuse, reDeclration

// // // const c  = 60 not accept reDeclration

// // console.log(c);


// // // console.log(a+b);

// // // 1
// // var a = 12;
// // a = 15;
// // var a = 16;
// // console.log(a);    // 16
// // // What will be the output?

// // // 2
// // let b = 20;
// // b = 36;
// // console.log(b); //   36 
// // // What will be the output?

// // // 3
// // let b = 20;
// // let b = 50;
// // console.log(b); // syntex error
// // // What will happen?

// // // 4
// // const c = 50;
// // c = 55;
// // console.log(c); // Type error
// // // What will happen?

// // // 5
// // const c = 50;
// // const c = 60;
// // console.log(c); // syntex error
// // // What will happen?

// // // 6
// // var a = 12;
// // var a = 30;
// // a = 40;
// // console.log(a); // 40
// // // What will be the output?

// // // 7
// // let b = 10;
// // b = 20;
// // b = 30;
// // console.log(b);  // 30
// // // What will be the output?

// // // 8
// // var x = 5;
// // x = 10;
// // var x = 15;
// // x = 20;
// // console.log(x);  // 20 
// // // What will be the output?

// // // 9
// // const y = 100;
// // y = 200;
// // y = 300;
// // console.log(y);  // type error
// // // What will happen?

// // // 10
// // var z = 1;
// // z = 2;
// // let z = 3;   // syntex error
// // z = 4;
// // const z = 5
// // console.log(z);  // syntex error 
// // // What will happen?


// // printing statement


// // 1. console.log()

// let b = 20

// console.log(b);

// console.log(50);



// // 2. alert()
 
// // let b1 = 50

// // alert("hello team")



// // 3. confirm()

// // confirm("did you know js !")

// // 4. prompt()

// // prompt("what is your name :- ")

// // 5. document.writeln()

// // let c = 60

// // document.writeln(c)



// // i want to print (hello) in console side 

// console.log("hello");


// // i want show good morning to ui side .


// document.writeln("good morning")


// // i want to know user wish , the question :- is user like apple !

// // let userWish = confirm("do you like apple ")

// // console.log(userWish);


// // i want to get user age

// // const userAge = prompt("what is your age :- ")

// // console.log("user age :- ",userAge);



// // console method :- 

// // 1. console.log()

//   console.log(100);
  


// // 2. console.warn()

//   console.warn(100);



// // 3. console.error()

//   console.error(100)


// // 4. console.clear()

// console.clear()


// // DataTypes 

// // 1. primitive datatype 


// //    types :-

// // 1. string   - "hello"


//    let b3 = "naveen"

//    console.log((b3));
   


// // 2. number

//    let num = 123

//    console.log(typeof(num));
   

// // 3. boolean

//    let boo  = true 

//    console.log(typeof(boo));
   

// // 4. undefined 

// let d1;

// console.log(d1);


// // 5. null

// // let d2 = prompt()

// // console.log(d2);



// // 2. non primitive datatype

// // type 

// console.log("non primitive datatype");


// // array 

// // []

// let fruit = ["pineApple","apple","orange","banana","guava","cherry","banana"]

// console.log(fruit);

// console.log(fruit[0]);
// console.log(fruit[3]);


// // dynamically i manipulate array first value :- 

// console.log(fruit[0]);


// // dynamically i manipulate array last value :- 

// console.log(fruit[fruit.length-1]);


// fruit = ["pineApple", "apple", "orange", "banana", "guava", "cherry", "banana"];

// // object 

// // {}

// let detialsFruit = {
   
//     yellowFruit : ["pineApple","banana"],
//     redFruit    : ["apple","cherry"],
//     orangeFruit : "orange"

// }


// console.log(detialsFruit);

// console.log(detialsFruit.orangeFruit);

// console.log(detialsFruit.yellowFruit[1]);

// console.log(detialsFruit.redFruit[0]);


// console.clear()


// //  operators 

// // arithmetic operator

// // addition (+)

// console.log(1 + 2);

// // subraction (-)

// console.log(2-2);

// // multiplication (*)

// console.log( 10 * 10 );

// // division  (/)

// console.log((10/10));


// // modulus    (%)

// console.log(10%10);


// // exponencial   (**)


// console.log(2**3); // 2^3 = 2*2*2 = 8

// console.clear();


// // increament (++) = +1 

// // type 

// // 1. post increament    = var++

// // 2. pre increament     = ++var



// // decreament (--) = -1 

// // type 

// // 1. post decreament    = var--

// // 2. pre decreament     = --var


// // example 

// let number = 10

// number++


// console.log(number);

// // your searching element first find in varible side. you can calculate the value side till the varible.


// let num1 = 2       // null

//     num1 = ++num1  // num1 = ++2 = 3

//     console.log(num1);


// // your searching element first find in value side . you can calculate the full value side.


// let num2 = 3

// let num3 = num2++ 

// console.log(num2); // num2 = 4
// console.log(num3); // num3 = 3


// let num4 = 2     // 

// let num5 = --num4 // --num4 = --2 = 1

// let num6 = num5++ //  num5 = 1


// console.log("num4 : ", num4); // 1    2  // num4 = 1
// console.log("num5 : ", num5); // 1  2 1  // num5 = 2
// console.log("num6 : ", num6); // 1  2 1  // num6 = 1



// console.clear()

// // assignment operator


// let number1 = 10

// let additionalVal = 110

//     // number1 = number1 + additionalVal

//     number1 += additionalVal
//     number1 -= additionalVal
//     number1 *= additionalVal
//     number1 /= additionalVal
//     number1 %= additionalVal
//     // number1 **= additionalVal
   
    
//     console.log(number1);



//   console.clear()

// // comparision or relational operator


// // syntex 



// // meaning             symbol            example                result

// // lessThen               <                5 < 8                 true

// // greaterThen            >                5 > 9                 false

// // lessThenEq             <=               6 <= 5                false

// // greaterThenEq          >=               7 >= 8                false

// // loosyTypeEq            ==               6 == "6"              true

// // loosyNotEq             !=               6 !="6"               false

// // strictlyTypeEq         ===              5 === "5"             false

// // strictlyNotEq          !==              5 !== "6"             true




// // 1
// console.log(10 < 15);   // true

// // 2
// console.log(20 > 25);   // false 

// // 3
// console.log(12 <= 12);  // true

// // 4
// console.log(9 >= 11);   // false 

// // 5
// console.log(7 == "7");  // true 

// // 6
// console.log(8 != "8");  // false 

// // 7
// console.log(10 === "10");  // false 

// // 8
// console.log(15 !== "15"); // true 

// // 9
// let a3 = 5;
// let b33 = "5";
// console.log(a3 == b33); // true 

// // 10
// let x = 18;
// let y = 18;
// console.log(x === y);  // true 

// console.clear();



// // logical operator


// // AND      - &&

// // true && true && true = true
// // true && false && true = false

// // OR       - ||

// // true || true || true = true 
// // false || false || true = true
// // false || false || false = false

// // NOT      - !

// // !(true) = false 
// // !(false) = true


// // example 


// // 1
// console.log(5 > 2 && 10 > 3);   // true 

// //  true && true = true

// // 2
// console.log(8 < 4 || 6 > 2); // true 

// //   false || true   = true 

// // 3
// console.log(3 > 7 || 1 > 9); // false 

// //    false  || false = false

// // 4
// console.log(!(10 > 5));  // false

// // !(true)  = false

// // 5
// console.log(!(2 < 1 && 4 > 2)); // true

// // !(false && true) = !(false) = true .


// // ternary operator


// // syntex 

// // condition ? statement : statement ; 


// 5==="5" ? console.log("hello") : console.log("error hello");




// // concatination  - (+)

// let str1 = "hello"

// let str2 = "world"

// let str3 = "javascript"

// let str4 = 100





// // template string

// console.log(`${str1} ${str3} ${str2}`);

// console.log(str1+" "+str3+" "+str2 + str4 );
// console.clear();


// // typeConversion 

// // implicit type conversion 


// let str = "1"
// let num11 = 1

// console.log(typeof(str + num11));


// // string 

// // string anything is string


// console.log(("1" + "1"));
// console.log(("1" +  1));
// console.log(("1" +  true));
// console.log(("1" +  undefined));
// console.log(("1" +  null));
// console.log(("1" +  [1,2,3]));
// console.log(("1" + {k:1}));

// console.clear();

// // number 

// console.log(typeof(1 + "1"));
// console.log(typeof(1 + 1));
// console.log(typeof(1 + true));
// console.log(typeof(1 + undefined));
// console.log(typeof(1 + null));
// console.log(typeof(1 + [1,2,3]));
// console.log(typeof(1 + {j:6}));


// // boolean 

// console.clear();

// console.log(typeof(true + "1"));
// console.log(typeof(true + 1));
// console.log(typeof(true + true));
// console.log(typeof(true + undefined));
// console.log(typeof(true + null));
// console.log(typeof(true + [1,2,3]));
// console.log(typeof(true + {l:4}));




// console.clear();


// // explicit type conversion 

// // constractor 

// // number constractor - Number()


// console.log(10 + Number("10"));
// console.log(Number());
// console.log(Number(" "));
// console.log(Number("1234"));
// console.log(Number("abc"));
// console.log(Number(true));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number([123,56,78]));
// console.log(Number({k:9}));



// // boolean constractore - Boolean()


// console.log(Boolean());
// console.log(Boolean(" "));
// console.log(Boolean("1234"));
// console.log(Boolean("-23"));
// console.log(Boolean("0"));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean("abc"));
// console.log(Boolean([7,8]));
// console.log(Boolean({k:89}));


// console.clear();


// // flow control statement 


// // conditional statement 

// // if statement 

// // if(conditon){// statement}

// // condition true = {allow}

// // example 


// if(5==50){
//   console.log("hi");
  
// }

// //  if else statement 

// // if (condition){//statement}else{//statement}

// // condition true = if inside allow , false = else inside allow

// // example 

// if(9==6){
//   console.log("condition true");
  
// }else{ 
//   console.log("condition false");
  
// }


// // else if statement 


// // let hour = prompt("enter the time use 24h format")

// // if(hour >= 1 && hour <= 12){
// //    alert("good morning");
   
// // }else if(hour >= 13 && hour <= 16){
// //   alert("good afternoon");
  
// // }else if(hour >= 17 && hour <= 19){
// //   alert("good evening");
  
// // }else{
// //   alert("good night");
  
// // }


// // nested if statement


// // let age =prompt("enter your age")
// // let height =prompt("enter your height cm")
// // let weight =prompt("enter your weight kg")

// // if(age >= 18){

// //   if(height >= 165){

// //     if(weight >= 65){
// //        alert("congradulation you are selected⭐⭐⭐");
       
// //     }else{
// //       alert("sorry you not eligible bcz your weight"+" "+weight+"kg");
      
// //     }

// //   }else{
// //     alert("sorry you not eligible bcz your height"+" "+height+cm);
    
// //   }

// // }else{
// //   alert("sorry you not eligible bcz your age"+" "+age+"old");
  
// // }


// // switch statement


// // switch(condition ){
// //   case "value" : "statement"; break;
// //   case "value" : "statement"; break;
// //   case "value" : "statement"; break;
// //   case "value" : "statement"; break;
// //   case "value" : "statement"; break;
// //   case "value" : "statement"; break;
// // }




// let trafficLight = "vilot"

// switch(trafficLight){
//   case "red" : console.log("vechile stop");
//    ; break;
//   case "yellow" : console.log("vechile start");
//    ; break;
//   case "green" : console.log("vechile go");
//    ; break;
//    default : console.log("safe ride");
   
// }








// console.clear();

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


// // looping statement

// // for loop

// // syntex

// // for(intialiazation ; condition ; iteration){
// //   statement
// // }

// for(let a = 1 ; a<=5 ; a++ ){
//   console.log(a); // 1 2 3 4 5
  
// }

// // flow :- 

// //  a = 1  ; 1 <= 5 = true ; 1++ = 2
// //  a = 2  ; 2 <= 5 = true ; 2++ = 3
// //  a = 3  ; 3 <= 5 = true ; 3++ = 4
// //  a = 4  ; 4 <= 5 = true ; 4++ = 5
// //  a = 5  ; 5 <= 5 = true ; 5++ = 6
// //  a = 6  ; 6 <= 5 = false.



// for(let a=1 ; a<=3 ; a++){
//   for(let b=1; b<=2 ;b++){
//     console.log(a,b);
    
//   }
// }



// for(let a = 1 ; a<=10 ; a++){
//    if(a%2==1){
//     console.log("odd :", a);
    
//    }else{
//     console.log("even :",a);
    
//    }
// }



// console.clear();


// // while loop 

// // syntex 

// // intialization 

// // while(condition){
// //   satement

// //   iteration
// // }


// let val = 10

// while(val >= 20){
//   console.log(val);

//   val--
  
// }



// // do while loop 

// // syntex

// // intialization 

// // do {
// //   statement 

// //   iteration
// // }

// // while(condition)



// let val1 = 10

// do {
//   console.log(val1);
//   val1--;
// } 

// while (val1 >= 0);

// console.clear();


// // for of loop :-  string , array , function

// let str11 = "javascript"
// let arr   = [1,2,3,4,5,6,7,8] 

// // for(declration typeName  variableName){
// //   statement 
// // }


// for(let a of arr){
//   console.log(a);
  
// }

// // for in loop :- object 

// let sample = {
//   name : "navi",
//   role : "developer",
//   salary : 100000
// }


// for(let a in sample){
//   console.log(a , sample[a]);
  
// }


// console.clear();



// // function 

// // code reuse       /

// // block of code     /

// // call the func     /

// // build logic      /

// // clean code , easy debug , organize   /

// // easy to manage   /

// // async 

// // return val       /

// // parameter         /



// // syntex :- 


// // function one(parameter){
// //   statment
// //   return
// //   yield
// // }

// // one(argument)


// // example :


// function one(){
//   console.log("hello");
  
// }






// function blockOfCode(){


//   console.log("for loop");

//   for(let i=1 ; i <= 5 ; i++){
//     console.log("for loop val :",i);
    
//   }


//   console.log("condition statement");

//   if(true){
//     console.log("condition true");
    
//   }  
  
// }




// function codeReuse(name,age){

//   console.log("company name  :-  stackly");

//   console.log("employee Name :",name);
//   console.log("employee Age :",age);
  
// }






// // price we know and we add discount also.

// function shopping(product,price){

//   console.log(product);
//   console.log(price);


//   let discount = (price*50) / 100  

//   console.log("discount price :", price - discount);
  
  
  

// }

// // reusable value - return 


// function returnVal(l, b){
//    return (l*b)
// }

// let rectangularForm = returnVal(100,200)

// // console.log(rectangularForm);



// function newRec(){
//   console.log(1000 + rectangularForm);
  
// }





// // manufactring 
// // phone 
// // display
// // battery
// // charger


// function phoneFac(product){
//   return product
// }

// let product1 = phoneFac("phone")


// function batteryFac(product){
//   return product
// }

// let product2 = batteryFac("battery")


// function chargerFac(product){
//   return product
// }

// let product3 = chargerFac("charger")


// function userBox(){
//    console.log("box kit :- "+product1+" "+product2+" " +product3);
   
// }






// // scope 

// function scopeCheck(){
//   if(true){
//     var z1 = "global scope and function scope";
//      let z2 = "block scope"
//      const z3 = "block scope"
//      console.log(z2);
//      console.log(z3);
//     }
    
//     console.log(z1);
    
// }


// scopeCheck()


// // hoisting 

// console.log(y1);
// var y1 = 10






// let y2 = 20
// console.log(y2);




// const y3 = 30
// console.log(y3);



// // types of function :

// // named function 

// named("named function")
// function named(parameter){
//   console.log(parameter);
  
// }



// // annonymous function 

// const annonymous = function(parameter){
//   console.log(parameter);
  
// }
// annonymous("annonymous function")


// // arrow function

// var arrow = (parameter)=>{
  
//   console.log(parameter);
  
  
// }
// arrow("arrow function")


// console.clear();


// // IIFE - self invoke function 


// // (function(parameter){
// //   statement
// // })("arguments")


// (function(product,price){
//   alert(`hello all , now sale is ongoing . best price ${product} discount price ${price}.`)
// })("shirt",1500)


// higher order function and callback function 

let function1 = function(){
  console.log("higher order function");
  
}

let function2 = function(){
  console.log("callback function");
  
}

function1(function2())


// example


let add = function(call,a,b){ //callback = sub , a = 20 , b = 40
  console.log(a+b);         // 20 + 40 = 60
  
  call(20,20)           // sub(20,20)
}



let sub = function(num1,num2){ // n1 = 20 , n2 = 20
  console.log(num1+num2);// 20 + 20 = 40
  
}


add(sub,20,40)


// 60 , 40



// generator function 


function* gen(){
  yield "10% flat off"
  yield "50% flat off"
  yield "try again"
  yield "cashback 50 rs"
}


let allVal = gen()


// console.log(allVal.next().value);
// console.log(allVal.next().value);
// console.log(allVal.next())
// console.log(allVal.next())
// console.log(allVal.next())

// if(allVal.next().done){
//   console.log("now all off expired");
  
// }

for(let all of allVal){
  console.log(all);
  
}



// default parameter


let collegeForm = (name,age,department = "not enter")=>{

  console.log("name :",name);
  console.log("age :",age);
  console.log("department :",department);
  

}

collegeForm("dhilipan",28,"ECE")
collegeForm("john",28,"EEE")




// currying stracture


function a(a){
  return function b(b){
    return function c(c){
      console.log(a + b + c);
      
    }
  }
}

a(10)(20)(30)









// // date





