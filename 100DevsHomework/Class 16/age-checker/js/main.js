//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
document.querySelector('h1').addEventListener('click', check)

function check() {
let x = document.querySelector('#danceDanceRevolution').value
let answer = ""
if (x < 16){
    answer = "Can't drive "
}
else if (x < 18){
    answer = "No clubbing "
}
else if (x < 21){
    answer = "Can't drink "
}
else if (x < 25){
    answer = "Can't rent cars affordibly "
}
else if (x < 30){
    answer = "Can't rent facy cars affordibly " 
}
else if (x >=30) {
    answer = "You have nothing left"
}
alert('At the age of ' + x + ' ' + answer)
}
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
