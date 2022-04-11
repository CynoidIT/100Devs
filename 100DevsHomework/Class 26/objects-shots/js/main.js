document.getElementById('submit').addEventListener('click', makeCatalog)
document.getElementById('left').addEventListener('click', scrollLeft)
document.getElementById('right').addEventListener('click', scrollRight)

let catalog = [['Drink Name','','Instructions']]
let index = 0

function makeCatalog(){
    importDrinks()
    updateDOM()
}

async function importDrinks(){
    let drink = document.querySelector('input').value
    console.log('drink',drink)

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);

    const data = await response.json();
    
    //console.log(data)
    console.log('data length', data.drinks.length)
        
    for (i=0;i<data.drinks.length;i++){
        catalog[i] = [data.drinks[i].strDrink,data.drinks[i].strDrinkThumb,data.drinks[i].strInstructions]
    }
}

function scrollLeft(){
    index --
    if (index < 0){
        index = catalog.length - 1
    }
    updateDOM()
}

function scrollRight(){
    index ++
    if (index > catalog.length - 1){
        index = 0
    }
    updateDOM()
}


function updateDOM(){
    console.log('index',index)
    // console.log(catalog)
    console.log('length',catalog.length)
    //console.log(catalog[0])
    console.log('error',catalog[index])
    document.getElementById('name').innerText = catalog[index][0]
    document.getElementById('picture').src = catalog[index][1]
    document.getElementById('instructions').innerText = catalog[index][2]
    document.getElementById('index').innerText = `Drink ${index +1} of ${catalog.length}`
}