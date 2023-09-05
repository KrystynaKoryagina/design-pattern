/* You need to implement the class HotDrinksPot which will be extended by classes TeaPot and CoffeePot.
   And also implement the HotDrinksPot class using the Template Method pattern.
*/ 

class HotDrinksPot {
  algorithmSteps = {};

  constructor() {
    this.prepareRecipe();
  }

  prepareRecipe () {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater () {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brew () {
    this.algorithmSteps.brew = 'Brewing';
  }

  pourInCup () {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addCondiments () {
    this.algorithmSteps.addCondiments = 'Adding condiment';
  }
}

class TeaPot extends HotDrinksPot {
  brew () {
    this.algorithmSteps.brew = 'Steeping the tea';
  }

  addCondiments () {
    this.algorithmSteps.addCondiments = 'Adding Lemon';
  }
}

class CoffeePot extends HotDrinksPot {
  brew () {
    this.algorithmSteps.brew = 'Dripping Coffee through filter';
  }

  addCondiments () {
    this.algorithmSteps.addCondiments = 'Adding Sugar and Milk';
  }
}

const tea = new TeaPot();
console.log(tea.algorithmSteps.addCondiments); // 'Adding Lemon'
console.log(tea.algorithmSteps.brew); // 'Steeping the tea'

const coffee = new CoffeePot();
console.log(coffee.algorithmSteps.addCondiments); // 'Adding Sugar and Milk'
console.log(coffee.algorithmSteps.brew); // 'Dripping Coffee through filter'
