//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(shirtColor,weaponType,maleFemale,hairColor ){
    this.outfitColor = shirtColor
    this.weapon = weaponType
    this.sex = maleFemale
    this.hair = hairColor
    this.attackSound = function(){
        console.log('pow')
    }
    this.jump = function(){
        console.log('jump')
    }
    this.block = function(){
        console.log('block')
    }
}

