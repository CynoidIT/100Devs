
    // Create an empty object user.
    let user = {}
    // Add the property name with the value John.
    user.name = 'John'
    // Add the property surname with the value Smith.
    user.surname = 'Smith'
    // Change the value of the name to Pete.
    user.name = 'Pete'
    // Remove the property name from the object.
    delete user.name
    console.table(user)

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let answer = 0
// for (key in salaries) {
//     answer += salaries[key]
// }
// console.log(answer)

// before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);
  
// function multiplyNumeric(obj) {
//     for (key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2
//         }
//     }
// }
// console.table(menu)

// function camelize(str) {
//     return str
//     .split('-')
//     .map(
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }

// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))

// function filterRange(arr, a, b){
//     return arr.filter(x => x >= a && x <= b) 
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modifi

// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
//         if (val < a || val > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
  
//   }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3,1]

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b)=> b-a)

// alert( arr ); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// function copySorted(arr) {
//     return arr.slice().sort()
// }


// function calculate(str){
//     return eval(str)
// }
// alert(calculate("3 + 7") ); // 10
// alert(calculate("2 ** 3")) // 8

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name)

// alert( names ); // John, Pete, Mar

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
//   }
  
//   let john = { name: "John", age: 25 };
//   let pete = { name: "Pete", age: 30 };
//   let mary = { name: "Mary", age: 28 };
  
//   let arr = [ pete, john, mary ];
  
//   sortByAge(arr);
  
//   // now sorted is: [john, mary, pete]
//   alert(arr[0].name); // John
//   alert(arr[1].name); // Mary
//   alert(arr[2].name); // Pete













