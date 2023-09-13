class Club {
  speed = 0.5;
  damage = 20;
  attack (monster) {
    return this.damage * this.speed - monster.armor;
  }
}

class Sword {
  speed = 1;
  damage = 15;
  attack (monster) {
    return this.damage * this.speed - monster.armor;
  }
}

class MagicWand {
  speed = 2;
  damage = 8;
  attack (monster) {
    return this.damage * this.speed - monster.armor;
  }
}

class Hero {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  hit (monster) {
    return this.weapon.attack(monster);
  }
}

class Monster {
  constructor(armor = 0) {
    this.armor = armor;
  }
}

const club = new Club();
const hero = new Hero('Barbarian', club);

const monster1 = new Monster(4);
const monster2 = new Monster(8);

console.log(hero.hit(monster1)); // 6
console.log(hero.hit(monster2)); // 2
