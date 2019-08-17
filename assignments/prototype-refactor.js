/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


class GameObject {
    constructor(attr){
      this.createdAt = attr.createdAt;
      this.name = attr.name;
      this.dimensions = attr.dimensions; 
   }
   destroy(){
     return `${this.name} was removed from the game.`;
   }
  }

  class CharacterStats extends GameObject{
    constructor(stats){
      super(stats);
      this.healthPoints = stats.healthPoints;
    }
    takeDamage(){
      return `${this.name} took damage.`;
    }
  }


  class Humanoid extends CharacterStats{ 
    constructor(char){
        super(char);
        this.team = char.team;
        this.weapons = char.weapons;
        this.language = char.language;
    }
    greet(){
      return `${this.name} offers a greeting in ${this.language}.`;
    }
  }


 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function. 


  class Hero extends Humanoid{
    constructor(param){
    super(param);
    this.name = param.name;
    this.team = param.team;
    this.weapons = param.weapons;
    this.healthPoints = param.healthPoints;
    this.attackPoints = param.attackPoints
    }
    intro(){
      return `The hero of the ${this.team}, ${this.name} has entered the battlefield`;
    }
    items(){
      return `Available weapons: ${this.weapons} Health Points: ${this.healthPoints}`;
    }
    heroAttack(){
      const damage = this.healthPoints - iceKing.attackPoints;
      return `${this.name} was ambushed by ${iceKing.name} and recieved damage that reduced Health Points to ${damage}`;
    }
    win(){
      return `${this.name} wins`;
    }
  }


  class Villain extends Humanoid{
    constructor(param){
      super(param)
      this.name = param.name;
      this.team = param.team;
      this.healthPoints = param.healthPoints;
      this.attackPoints = param.attackPoints
      this.damage = param.damage;
      }
    intro(){
      return `The ${this.name} of the ${this.team}, has entered the battlefield`;
    }
    items(){
      return `Available weapons: ${this.weapons} Health Points: ${this.healthPoints}`;
    }
    attack(){
      for (let i = 20; i >= 0; i= i - finn.attackPoints){
      this.damage = i;
      if (this.damage >= 4 && this.damage < 20){
        console.log (`The ${this.name} was attacked by ${finn.name} and recieved damage that reduced Health Points to ${this.damage}`);
      }else if (this.damage === 0){
        console.log (`${finn.name} does final attack and reduces ${this.name} health to ${this.damage} points. ${this.name} loses crown during fight, turns into ${simon.name}`);
        };
      };
    }
  }


  Villain.prototype.attack = function(){
    for (let i = 20; i >= 0; i= i - finn.attackPoints){
      this.damage = i;
      if (this.damage >= 4 && this.damage < 20){
        console.log (`The ${this.name} was attacked by ${finn.name} and recieved damage that reduced Health Points to ${this.damage}`);
      }else if (this.damage === 0){
        console.log (`${finn.name} does final attack and reduces ${this.name} health to ${this.damage} points. ${this.name} loses crown during fight, turns into ${simon.name}`);
      };
    };
  };


  const iceKing = new Villain({
    createdAt: new Date(),
        dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 20,
    attackPoints: 3,
    damage: 0,
    name: 'Ice King',
    team: 'Ice Kingdom',
    weapons: [
      'Ice Crown',
      'Penguins'
    ],
    language: 'English'

  });

  const finn = new Hero({
    createdAt: new Date(),
        dimensions: {
      length: 2,
      width: 2,
      height: 3,
    },
    healthPoints: 20,
    attackPoints: 4,
    name: 'Finn the Human',
    team: 'Land of Ooo',
    weapons: [
      'Finn Sword',
      'Grass Sword',
    ],
    language: 'English',
  });

  const simon = new Hero({
    createdAt: new Date(),
        dimensions: {
      length: 2,
      width: 2,
      height: 3,
    },
    healthPoints: 12,
    attackPoints: 8,
    name: 'Simon Petrikov',
    team: 'Land of Ooo',
    weapons: "Smart",
    language: 'English',
  });

  
  console.log(finn.intro());
  console.log(finn.items());
  console.log(iceKing.intro());
  console.log(iceKing.items());
  console.log(finn.heroAttack());
  console.log(iceKing.attack());
  console.log(finn.win());

  
