//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.color = 'black'
stopwatch.cost = '$5'
stopwatch.weight = '2oz'
stopwatch.brand = 'broken'

stopwatch.describeColor = function(colorChoice){
    console.log(`The color is ${colorChoice}`)
}

stopwatch.fullDescription = function(desciption) {
    console.log(`This ${stopwatch.brand} stopwatch is ${stopwatch.color}, weighs ${stopwatch.weight} and costs ${stopwatch.cost}.`)
}

stopwatch.describeColor(stopwatch.color)
stopwatch.fullDescription(stopwatch)
