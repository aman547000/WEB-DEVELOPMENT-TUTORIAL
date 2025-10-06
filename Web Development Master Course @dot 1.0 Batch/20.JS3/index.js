// console.log('Hello jee')

// let lastName = 'Aditya';   //primitive string


// let firstName = new String('Aman');   //object string

// // --------------------------------------------------------

// let message = 'This is my first message';

// let words = message.split(' ');

// // console.log(words);

// let updatedmessage = message.replace('first', 'second');

// console.log(updatedmessage);

// //--------------------------------------------------------

// let message2 = 
// `This
// is my
// first message`;

// console.log(message2);

// //---------------------------------------------------------

// let date = new Date();
// console.log(date);

// let date2 = new Date('June 20 1998 07:15');
// console.log(date2);

// let date3 = new Date(1998, 5, 20, 7);  // 0- Jan  , 1-Feb
// console.log(date3);

// date3.setFullYear(1947);
// console.log(date3);

// date3.getDay();
// console.log(date3);

//------------------------------------------------------------
//----------------------------ARRAY---------------------------

// let numbers = [1,4,5,7];

// // numbers.push(9);   //end

// // numbers.unshift(8);       //begin
// // console.log(numbers);

// // // numbers.splice(2,0, 'a', 'b', 'c');     //middle
// // // console.log(numbers);

// // // //searching
// // // console.log(numbers);
// // // console.log(numbers.indexOf(9));

// // // //we want to check if a number exist in an array
// // // if(numbers.indexOf(4) != -1)4
// // //     console.log("present");

// // // console.log(numbers.includes(4));

// console.log(numbers.indexOf(4, 2) );

// -------------------------------------------------------
// let courses = [
//     {no:1, naam:'Aman'},
//     {no:2, naam:'Aditya'}
// ];

// console.log(courses);

// console.log(courses.indexOf({no:1, naam:'Aman'}));    //in object indexof does not work
// console.log(courses.includes({no:1, naam:'Aman'}));  //in object includes does not work

// let course = courses.find(function(course)  //  find method
// {
//     return course.naam === 'Aman';
// })

// console.log(course);
// //---------------------same method in short form-------------------------
// let course2 = courses.find(course2 => course2.naam === 'Aditya');

// console.log(course2);

//---------------------------------------------------------------------------

// let numbers = [1,2,3,4,5,6,7];
// let numbers2 = numbers;

// numbers.pop();   //end
// numbers.shift(); //begining
// numbers.splice(2, 1);  //middle

// console.log(numbers);
// //----------------------------------------------------------------------------
// // numbers = []; //emptying an array , but not the best method

// numbers.length = 0;  //2nd method
// console.log(numbers);
// console.log(numbers2);

// numbers.splice(0, numbers.length);  //3rd method
// console.log(numbers);

// //-------------------------Combining and slicing Arrays------------------------------------------------

// let first  = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);

// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice();
// // let sliced = combined(2, 3); //it includes index-2 but excludes index-3
// let sliced2 = marks.slice(2);
// let sliced3 = marks.slice(2,6);
// console.log(sliced);
// console.log(sliced2);
// console.log(sliced3);

//---------------------------Spread Operator-------------------------

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a',...second,'b', true, false];
// console.log(combined);

// //copy kaise create karo
// let another = [...combined];
// console.log(another);

// //---------------Iterating an Array-----------------------------

// let arr = [10,20,30,40,50,];

// // for(let value of arr) {

// //     console.log(value);

// // }


// arr.forEach(function(number) {
//     console.log(number);
// });

//-----------------joining-----------------------------------------------------------


// let joined = combined.join("__");
// console.log(joined);


// let spilted = joined.split("__");
// console.log(spilted);

//-----------------------------------------------------------------------------------

// Sort 

// let numbers = [1,2,3,4,5,6,7];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

//------------------------------------------------------------------

// Filtering in Array  

// let numbers = [1,2,3,4,5,6,7,8,9,-5,-7,-4,-5];
// console.log(numbers);

// let filtered = numbers.filter(function(value) {
//     return value>=0;
// });
// console.log(filtered);

// let positive = numbers.filter(value => value >= 0);
// console.log(positive);

//-----------------------------------------------------------------------------------

// // Mapping Arrays 

// let item = [4,5,6,7,8,9,10,11,12,13,14];
// let itemSquare = item.map(value => value * value);
// console.log(itemSquare);

// let mapWithObject = item.map(value => {return{Number : value}});
// console.log(mapWithObject);

// let numbers = item.map(function(value){
//     return value;
// });
// console.log(numbers);


//--------------------------------------------------------------------------------------

// // Chaining 

// let chaining = item.filter(value => value&1).map(num => num*num);
// console.log(chaining);




