//Create a constructor with 4 properties and 3 methods

class MakePizza{
    constructor(size,toppings, crust, cheese){
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.cheese = cheese
    }
    estDeliveryTime(){
        console.log('Calculating...')
    }
    
    burnMouth() {
        console.log('ouch!')
    }
    
    frisbee() {
        console.log('Yeeeet!')
    }
} 

let pizza1 = new MakePizza('large', ['pepperoni', 'mushroom'],'thick','extra')

