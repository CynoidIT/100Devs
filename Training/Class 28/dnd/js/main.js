//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)
getSpells()
function getSpells(){
    const url = `https://www.dnd5eapi.co/api/spells/`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
     console.log(data)    
     
     data.results.forEach(el => {
         const option = document.createElement('option')
         option.textContent = el.index
         document.querySelector('select').appendChild(option)
     })
})}

function getFetch(){
  const choice = document.querySelector('select').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`
        document.querySelector('h4').innerText = ''

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)

       document.querySelector('h3').innerHTML = data.classes[0].name

        data.subclasses.forEach(el => {
            console.log(el.name)
            const li = document.createElement('li')
            li.textContent = el.name
            document.querySelector('ul').appendChild(li)
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

