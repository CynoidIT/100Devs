class Animal{
    constructor(name, sound, breed){
        this._name = name
        this._sound = sound
        this._breed = breed
    }
    get name(){
        return this._name
    }
    get sound(){
        return this._sound
    }
    get breed() {
        return this._breed
    }
    speak(){
        console.log(`${this._name} goes ${this._sound}`)
    }


}

class Dog extends Animal{
    constructor(name, sound, breed){
        super(name, sound, breed)
    }
}

class Cat extends Animal{
    constructor(name, sound, breed){
        super(name, sound, breed)
    }
}

const spike = new Dog('Spike', 'Woof!', 'Husky')
const fluffy = new Cat('Fluffy', 'Meow!', 'Persian')

let farm = [spike, fluffy]

for (a of farm){
    a.speak()
}
























// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }    
// }
// class Cat extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }    
// }

// class Cow extends Animal{
//     constructor(name, breed){
//         super(name)
//         this._breed = breed
//     }
//     speak(){
//         console.log(`${this.name} moos`)
//     }
// }

// let bessy = new Cow('Bessy', 'Herereford')

// let simba = new Dog('Simba','Shepard')
// let machi = new Dog('The Machine','Pitbull')
// let salem = new Cat('Salem', 'American Shorthair')

// let farm = [simba,machi,salem, bessy]

// for( a of farm ){
//     a.speak()
// }

