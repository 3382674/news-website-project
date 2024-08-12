// const marks =89;
// if(marks>90){
//     console.log("cong you got A+");

// } 

// else if(marks<=90 && marks>=80) {
//     console.log("you got A");  
// }
// else if(marks<=80 && marks>=70) {
//     console.log("you got B+");  
// }
// else if(marks<=70 && marks>=60) {
//     console.log("you got B");  
// }
// else if(marks<=60 && marks>=50) {
//     console.log("you got C+");  
// }
// else("you failed")
// 
// const marks=56;
// const result=(marks>=40)? "pass" : "fail";
// console.log(result);
// let step=0;
// while(step<5){
//     console.log(step);  
//     step++;
// }  
// let step=0;
// do{
//     console.log(step);
//     step++;
// }while(step<5)
// let step=0;
// while(step<5){
//     step++;
//     if(step==3){
//         continue;
//      }
//      console.log(step);  
// }
// const name = ["juhi", "ritu", "survi",1,true];
// console.log(name.length);
// const numbers=[1,2,3,4,0,5,6,8,6,8];
// console.log(numbers.slice(2,5));
// console.log(numbers);
// function sum(a,b){
//     const sum=a+b;
//     console.log("the sum is",sum);
// }
// const a=89;
// const b=56;
// sum(a,b);
// const square=function(num){
//     return num*num;
// }
// console.log(square(5));
// function addsquare(a, b) {
//     const sa = square(a);
//     const sb = square(b);
//      function square(num){
//         return num * num;
//     }
//     return sa + sb;
// }

// console.log(addsquare(2, 3));
//arrow function////
// const greet=(count)=>{
//     for(let i=0;i<=count;i++)
//     console.log("hello");
// }
// greet(5);
// const square=(num)=>num*num;
// console.log(square(5));
// const calculate=(a,b,callback)=>{
//     return callback(a,b);
// }
// const result=calculate(3,4,function(num1,num2){
//     return num1+num2;
// })
// console.log(result);
// const subtraction=(a,b)=>a-b;
// const subres=calculate(12,14,subtraction);
// console.log(subres);
// function multiply(a,b){
//     return a*b;
// }
// const mulres=calculate(2,3,multiply);
// console.log(mulres);
//array callback function
// const arr=[1,0,-1,2,-7,-9,7,65,6,5];
// function firstneg(num){
//     return num<0
// }
// result= arr.findIndex(firstneg);
// console.log(result);
// arr.forEach((num,i)=>{
//      console.log("the array",num,i );
// })
// console.log("hello");
// setTimeout(function(){ 
//     console.log("hello juhi i will showen later");
// },3000)

// function getcheese(callback){
//     setTimeout(() => {
//         const cheese="🧀";
//          console.log("here is cheese",cheese);
//          callback(cheese);
//     }, 2000);

// }
// function makedough(cheese,callback){
//     setTimeout(() => {
//         const dough="🫓"+cheese;
//          console.log("here is dough",dough);
//          callback(dough);
//     }, 2000);

// }
// function bakepizza(dough,callback){
//     setTimeout(() => {
//         const pizza="🍕"+dough;
//          console.log("here is pizza",pizza);
//          callback(pizza);
//     }, 2000);

// }

// getcheese((cheese)=>{
//   makedough(cheese,(dough)=>{
//     bakepizza(dough,(pizza)=>{
//         console.log("got the pizza",pizza);
//         });
//      console.log("got the dough ",dough);
//   });
//   console.log("got the cheese ",cheese);
// });

// function addnums(a, b,callback){
//     callback(a,b);
// }
// function add(a, b) {
//     console.log(a + b);
// }
// addnums(3, 4, add);  

//  function mul(a,b,callback){
//     callback(a,b);
//  }
// const mulresult=(a,b)=> {
//     console.log(a*b);
// }   
// mul(3,4,mulresult);
// function multiply(a, b, callback) {
//     callback();
// }
// multiply(3, 4, () => {
//     console.log(3 * 4);
// });
// let a=7;
// let b=6;
// result=a+b;
// console.log(result);
// const add=(a,b)=>a+b;
// console.log( add(8,78));
// function getcheese(callback) {
//     setTimeout(() => {
//         const cheese = "🧀";
//         console.log("here is cheese", cheese);
//         callback(cheese);
//     }, 3000);
// }
// function makedough(cheese, callback) {
//     setTimeout(() => {
//         const dough = "🍞"
//         console.log("here is dough", dough);
//         callback(cheese, dough);

//     }, 2000)
// }
// function makepizza( dough, callback) {
//     setTimeout(() => {
//         const pizza = "🍕";
//         console.log("here is pizza", pizza);
//         callback(cheese, dough, pizza);

//     }, 2000);
// }
// getcheese((cheese) => {
//     makedough((cheese, dough) => {
//         makepizza((dough, pizza) => {
//             console.log("pizza is ready", cheese, dough, pizza);
//         });

//     });
// });
// const ticket = new Promise(function (resolve, reject) {
//     const isboarded = false;
//     if (isboarded) {()
//         resolve("you are boarded");
//     }
//     else {
//         reject("you are not boarded");
//     }

// })
// ticket
//     .then((data) => {
//         console.log("wohoo", data);
//     })
//     .catch((data) => {
//         console.log("oh no", data);
//     })
//     .finally((data)=>{
//        console.log("i will always executed");
//     })
// function getcheese() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const cheese = "🧀";
//             resolve(cheese);
//             // reject("no cheese");
//         }, 2000);
//     });
// }
// function makedough(cheese) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dough = cheese + "🍞";
//             resolve(dough);
//         }, 2000);
//     });
// }
// function bakepizza(dough) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pizza =  dough + "🍕";
//             resolve(pizza);
//         }, 2000);
//     });
// }
// async function orderpizza(){
//     try{
//     const cheese = await getcheese();
//     console.log("here is the cheese", cheese);
//     const dough=await makedough(cheese);
//     console.log("here is the dough", dough);
//     const pizza = await bakepizza(dough);
//     console.log("here is the pizzaa", pizza);
// }
// catch(err){
//     console.log("error occured",err);
// }
// }
// orderpizza();
// // getcheese()
// //     .then((cheese) => {
// //         console.log("here is the cheese", cheese);
// //         return makedough(cheese);
// //     })
// //     .then((dough) => {
// //        console.log("here is the dough", dough);
// //         return bakepizza(dough);
// //     })
// //     .then((pizza) => {
// //         console.log("here is the pizza", pizza);
// //     })