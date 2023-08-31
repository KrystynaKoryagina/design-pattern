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