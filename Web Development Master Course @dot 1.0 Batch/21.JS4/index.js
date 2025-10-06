// // Function 
// run();

// function run()
// {
//     console.log("Function running");
// }

// // Function Assignment 
// let stand = function walk(){
//     console.log("Walking");
// }

// stand();

// // Anonymous Function 
// let sit = function()
// {
//     console.log("Sitting");
// }

// sit();


// let x = 0;
// console.log(x);

// x='a';
// console.log(x);

// function add(a,b)
// {
//     let sum = 0;
//     // console.log(arguments);
//     for(let value of arguments)sum+=value;
//     return sum;
// }

// // console.log(add(1,2)); // 1 + 2 = 3
// // console.log(add(1)); // 1 + Undefined = NaN
// // console.log(add()); // Undefined + Undefined = NaN
// console.log(add(1,2,3,4,5,6,7,8)) // 1 + 2 = 3 [Rest 3 5 8] in Argunment 


// // Rest Operator 

// function sum(...args){
//     let sum = 0;
//     for(let i of args)
//     sum += i;
    
//     return sum;
// }

// console.log(sum(1,2,3,4,5,6,7,8));

//Default Parameters
// function interest(p,r=6,y=9) {
//     return p*r*y/100;
// }

// console.log(interest(10));

// //GETTER SETTER

//getter -> access properties
//setter -> change or mutate properties


// let person = {
//     fName : 'Aman',
//     lName : 'Aditya',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// console.log(person.fullName);

// person.fullName = 'Rahul Kumar';
// console.log(person.fullName);



// Try Catch 

// try{
//     person.fullName = true;
// }
// catch(err){
//     alert(err);
// }


// {
//     var a = 5;
// }
// console.log(a);

// function walk() {
//     var a = 5;
// }

// console.log(a);

// for(var i = 0; i<10; i++) {

// }

// console.log(i);

// if(true) {
//     var a = 5;
// }

// console.log(a);

// function a() {
//     const ab  = 5;
// }
// const ab = 5;

// function b() {
//     const ab = 5;
// }

//sorting 

// let a = [10,5,4,25];

// a.sort(function(a,b) {
//     return a-b;
// });

// console.log(a);

let arr = [-1,-2,-3,-4];
// let total = 0;

// for(let value of arr) 
//     total = total + value;

// console.log(total);


let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,0);

console.log("PRINTING TOTAL SUM:")
console.log(totalSum);