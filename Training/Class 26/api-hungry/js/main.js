//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // let choice = ''
  let choice = document.getElementById('mainIngredient').value
  console.log(choice)
  let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='+choice
  console.log(url)
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('meal').innerText = data.meals[0].strMeal
        document.querySelector('img').src = data.meals[0].strMealThumb
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}