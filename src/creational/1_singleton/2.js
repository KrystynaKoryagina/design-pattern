class Database {
  static #instance;
  #data = '';

  constructor(data) {
    if (Database.#instance) {
      return Database.#instance;
    }
  
    Database.#instance = this;
    this.#data = data;
  }

  get data() {
    return this.#data;
  }
}

const mongo = new Database('MongoDB')
console.log(mongo.data) // 'MongoDB'

const mysql = new Database('MySQL')
console.log(mysql.data) // 'MongoDB'