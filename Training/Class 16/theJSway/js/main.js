// 3,2,1 Code

// console.log('Baptiste');
// console.log(40)

// console.log(6+3);
// console.log(6-3);
// console.log(6*3);
// console.log(6/3);

// console.log(4 + 5); //9
// console.log("4 + 5"); //4 + 5
// console.log("4" + "5");//45

// //Play with variables

// let firstName = prompt('What is your first name? ')
// let lastName = prompt('What is your last name? ')
// alert('Your name is ' + firstName + ' ' + lastName)

// let a = 2; // a = 2
// a -= 1; // a = 1
// a++; // a = 2
// let b = 8; // b = 8
// b += 2; // b = 10
// const c = a + b * b; // c = 120
// const d = a * b + b; // d = 30
// const e = a * (b + b); // e = 40
// const f = a * b / a; // f = 10
// const g = b / a * a; // g = 10
// console.log(a, b, c, d, e, f, g); // 2, 10, 102, 30, 40, 10, 10

// let priceInput = prompt('Enter price: ')
// console.log(priceInput * .206)

// let celTemp = prompt('What is the temperature in Celsius? ')
// console.log((celTemp * (9 / 5)) + 32);

// let number1 = 5;
// let number2 = 3;

// // TODO: type your code here (and nowhere else!)
// let tempNum = number1
// number1 = number2
// number2 = tempNum

// console.log(number1); // Should show 3
// console.log(number2); // Should show 5



// Add Conditions

// let daysOfTheWeek = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// let askDay = prompt('Enter a day of the week: ')
// let message = 'Try again'
// for (i=0;i<=daysOfTheWeek.length;i++) {
//     if (askDay.toLowerCase() == daysOfTheWeek[i]) {
//         message = ('The next day would be ' + daysOfTheWeek[i+1])
//     }        
// }
// alert(message)

// let firstNum = prompt('Enter a number: ')
// let secondNum = prompt('Enter a number: ')
// if (firstNum == secondNum){ 
//     console.log('They are equal');
// } else if (firstNum > secondNum) {
//     console.log(firstNum + ' is greater than ' + secondNum);
// } else if (firstNum < secondNum) {
//     console.log(firstNum + ' is less than ' + secondNum);
// }

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3); 

// nb1=nb2=nb3=4 		0 4 12	
// nb1=4,nb2=3,nb3=2 	4 3 2		
// nb1=2,nb2=4,nb3=0    3 4 0

// let monthNum = prompt('Enter a month number: ')
// let daysInMonth
// if(monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12) {
//     daysInMonth = 31
//     } else if(monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11) {
//     daysInMonth = 30
//     } else if (monthNum == 2) {
//     daysInMonth = 28
//     } else {
//         daysInMonth = 'Try again!'
//     }
// console.log(daysInMonth);

let askHours='XX'
let askMinutes='XX'
let askSeconds='XX'

let askTime = prompt('Enter a time using XXhXXmXXs')
if (!(askTime.length == 9)) {
    alert('Try Again!')
} else {
    askHours = askTime.slice(0,2)
    askMinutes = askTime.slice(3,5)
    askSeconds = askTime.slice(6,8)
    askSeconds++
    if (askSeconds == 60) {
        askSeconds = '00'
        askMinutes++
        if (askMinutes == 60) {
            askMinutes = '00'
            askHours++
            if (askHours == 24) {
                askHours = '00'
            }
        }
    }
} 
let tellTime = askHours+'h'+askMinutes+'m'+askSeconds+'s'
console.log(tellTime)


// 14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s (midnight)
