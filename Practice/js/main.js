// function camelize(str) {
//     return str
//         .split('-')
//         .map((word, pos) => pos == 0 ? word : word[0].toUpperCase() + word.slice(1))
//         .join('')
//   }
//   console.log(camelize('the-quick'))

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// function filterRange(arr,a,b) {
//     return arr.filter(x => x >= a && x <= b)
// }

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)


// function filterRangeInPlace(arr,a,b) {
//    let newArr = arr.filter(x => x >= a && x <= b)
//    alert(newArr)
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

//alert( newArr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

// alert( arr.sort((a,b) => b-a ) ); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// function copySorted(arr){
//     return arr
//         .slice()
//         .sort()
// }

//alert( sorted ); // CSS, HTML, JavaScript
//alert( arr ); // HTML, JavaScript, CSS (no changes)

// function Calculator() {

//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
  
//     this.calculate = function(str) {
  
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2];
  
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
  
//       return this.methods[op](a, b);
//     };
  
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }

//   let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name);

// alert( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

//alert( usersMapped[0].id ) // 1
//alert( usersMapped[0].fullName ) // John Smith

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }

  