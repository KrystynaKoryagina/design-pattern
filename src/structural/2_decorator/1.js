/* 
  It is necessary to implement the decorators Milk and Sugar which will changes in the calculation of the cost of coffee.
  In each of the Milk and Sugar classes you need to declare a getPrice method, which will adjust the total cost of the drink.
*/

class Milk {
  price = 2;

  constructor(drink) {
    this.drink = drink;
  }

  getPrice () {
    return this.drink.getPrice() + this.price;
  }
}

class Sugar {
  price = 1;

  constructor(drink) {
    this.drink = drink;
  }

  getPrice () {
    return this.drink.getPrice() + this.price;
  }
}

class Coffee {
  price = 5;

  getPrice () {
    return this.price;
  }
}

const coffee = new Coffee();
console.log(coffee.getPrice()); // 5

const coffeeWithSugar = new Sugar(coffee);
console.log(coffeeWithSugar.getPrice()); // 6

const coffeeWithMilk = new Milk(new Coffee());
console.log(coffeeWithMilk.getPrice()); // 7
