//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // let choice = ''
  let choice = document.getElementById('participants').value

  const url = 'https://www.boredapi.com/api/activity?participants='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('activity').innerText = data.activity
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}