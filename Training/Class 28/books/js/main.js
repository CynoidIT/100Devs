document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h1').innerText = localStorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`
  let books = ''
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        console.log(data.title)

        if(localStorage.getItem('books')){
                  books = localStorage.getItem('books') + " ; " + data.title
        } else books = data.title

        localStorage.setItem('books',books)

        document.querySelector('h1').innerText = localStorage.getItem('books')

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

