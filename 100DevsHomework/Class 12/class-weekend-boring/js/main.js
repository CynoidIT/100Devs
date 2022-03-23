document.querySelector('#check').addEventListener('click', check)
document.querySelector("#whatDay").addEventListener("submit", check) 


function check(e) {
  e.preventDefault()
  
  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here

  if (day == "sunday" || day == "saturday") {
    document.querySelector('#placeToSee').innerText = "It's the weekend!!"
  }
  else if (day == "monday" || day == "wednesday" || day == "friday") {
    document.querySelector('#placeToSee').innerText = "Is that even a real day??"
  }
  else if (day == "tuesday" || day == "thursday") {
    document.querySelector('#placeToSee').innerText = "Bangers only!!"
  }
  else {
    document.querySelector('#placeToSee').innerText = "Check your spelling, fool!!"
   
  } document.getElementById('whatDay').reset()
}
