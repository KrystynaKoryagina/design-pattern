/*
  Imagine that you are designing a computer game where the hero, going on on an adventure must fight monsters in different game locations.
  Your work is in its final stages, the classes Location are ready, Hero and Monster.

  All that's left is to create objects of the corresponding classes:

    this.hero = new Hero('Barbarian');
    this.location = new Location('darkForest');

    this.location.addMonster(new Monster('demon'));
    this.location.addMonster(new Monster('demon'));
    this.location.addMonster(new Monster('undead'));

  In order to simplify the initialization of the game, you decide to create another class `Game` to put all the logic responsible for game initialization.
  Please implement the `start` method of the `Game` class to start the game.
*/

class Game {
  start () {
    this.hero = new Hero('Barbarian');
    this.location = new Location('darkForest');

    this.location.addMonster(new Monster('demon'));
    this.location.addMonster(new Monster('demon'));
    this.location.addMonster(new Monster('undead'));
  }
}

class Location {
  monsters = [];

  constructor(name = '') {
    this.name = name;
  }

  addMonster (monster = {}) {
    this.monsters.push(monster);
  }
}

class Hero {
  constructor(name = '') {
    this.name = name;
  }
}

class Monster {
  constructor(type = '') {
    this.type = type;
  }
}

const game = new Game();
game.start();

console.log(`Hero name: ${game.hero.name}`); // Hero name: Barbarian
console.log(`Location: ${game.location.name}`); // Location: darkForest
console.log(`Monsters: ${game.location.monsters.length}`); // Monsters: 3
console.log(`Demons: ${game.location.monsters.filter(monster => monster.type === 'demon').length}`); // Demons: 2
console.log(`Undead: ${game.location.monsters.filter(monster => monster.type === 'undead').length}`); // Undead: 1
