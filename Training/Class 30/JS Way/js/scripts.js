// const aurora = {
//     name: "Aurora",
//     health: 150,
//     strength: 25,
//     xp: 0,
  
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points, ${this
//         .strength} as strength and ${this.xp} XP points`;
//     }
//   };
  
//   // Aurora is harmed by an arrow
//   aurora.health -= 20;
  
//   // Aurora gains a strength necklace
//   aurora.strength += 10;
  
//   // Aurora learns a new skill
//   aurora.xp += 15;
  
//   console.log(aurora.describe());


  class Character {
      constructor(name, health, strength) {
          this.name = name;
          this.health = health;
          this.strength = strength;
          this.xp = 0; //XP is always 0 for new characters
          this.gold = 10
          this.key = 1
      }
      //attack a target
      attack(target) {
          if (this.health > 0) {
              const damage = this.strength;
              console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
              target.health -= damage;
              if (target.health > 0) {
                  console.log(`${target.name} has ${target.health} health points left`);
              }else {
                  target.health = 0;
                  const bonusXP = 10;
                  console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`)
                  this.xp += bonusXP
                  this.gold += target.gold
                  this.key += target.key
              }
              }else {
                  console.log(`${this.name} can't attack (they have been eliminated)`)
              }
          }
      
      //return character description
      describe() {
          return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points. In ${this.name}'s inventory, there is ${this.gold} gold and ${this.key} key(s)`;
      }
  }

  const aurora = new Character('Aurora', 150, 25)
  const glacius = new Character('Glacius', 130, 30)

  console.log('Welcome to the adventure! Here are our heroes:');
  console.log(aurora.describe());
  console.log(glacius.describe())

  const monster = new Character('Spike', 40, 20);
  console.log(`A wild monster has appeared: It's name is ${monster.name}`);

  monster.attack(aurora);
  monster.attack(glacius);
  aurora.attack(monster);
  glacius.attack(monster);



    // // Aurora is harmed by an arrow
    // aurora.health -= 20;
  
    // // Aurora gains a strength necklace
    // aurora.strength += 10;
    
    // // Aurora learns a new skill
    // aurora.xp += 15;
    
    console.log(aurora.describe());
    console.log(glacius.describe());


//Time for dogs

class Dog {
    constructor(name,species, size){
        this.name = name
        this.species = species
        this.size = size
    }
    bark(){
        if(this.size > 60){
            return 'Grrr! Grrr!'
        }else{
            return 'Woof! Woof!'
        }
    }
}

const fang =new Dog('Fang', 'boarhound', 75)
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`)
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`)

const snowy =new Dog('Snowy', 'terrier', 22)
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`)
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`)


class BankAccount {
    constructor(name, balance, credit){
        this.name = name
        this.balance = balance
        this.credit = credit
    }
    describe(){
        return(`Owner: ${this.name}, Balance: $${this.balance}`)
    }
}

const sean = new BankAccount('Sean', 1000)
const brad = new BankAccount('Brad', 1000)
const george = new BankAccount('George', 1000)

console.log(sean.describe())
console.log(brad.describe())
console.log(george.describe())
