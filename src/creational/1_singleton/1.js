/*
  Please implement the logic of the class constructor so that when creating objects with this class, 
  a reference to the same object, or, in other words, that an object with this class was created only once.

  console.log(new Singleton() === new Singleton()); // true
*/

class Singleton {
  static #instance;

  constructor() {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }

    return Singleton.#instance = this;
  }
}

console.log(new Singleton() === new Singleton()); // true