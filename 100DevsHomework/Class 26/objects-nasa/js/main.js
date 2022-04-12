//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPOD);

async function getPOD(){
    const q = document.querySelector('input').value;

    const response = await fetch(`https://epic.gsfc.nasa.gov/api/natural/all`)

    // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`);

    const data = await response.json();

    // document.querySelector('h2').innerText = data.collection.items[0].data[0].description
    // document.querySelector('img').src = data.url
    // document.querySelector('h3').innerText = data.explanation
    console.log(data[0]);

}