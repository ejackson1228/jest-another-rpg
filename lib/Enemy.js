const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character{
  constructor(name, weapon) {
    // call parent constructor
    super(name);

    this.weapon = weapon;
  
    this.potion = new Potion();
  }
  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };

};
// inherit prototype methods from character:
Enemy.prototype = Object.create(Character.prototype);


// Enemy.prototype.getHealth = function() {
//     return `The ${this.name}'s health is now ${this.health}!`;
//   };
  
// Enemy.prototype.isAlive = function() {
//     if (this.health === 0) {
//       return false;
//     }
//     return true;
//   };
  
// Enemy.prototype.getAttackValue = function() {
//     const min = this.strength - 5;
//     const max = this.strength + 5;
  
//     return Math.floor(Math.random() * (max - min) + min);
//   };
  
// Enemy.prototype.reduceHealth = function(health) {
//     this.health -= health;
  
//     if (this.health < 0) {
//       this.health = 0;
//     }
//   };
  



module.exports = Enemy;