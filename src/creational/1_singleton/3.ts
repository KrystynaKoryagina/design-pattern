/*
  1. Add a private static field to the class for storing the singleton instance.
  2. Make the constructor of the class private. The static method of the class will still be able to call the constructor, but not the other objects.
  3. Declare a public static creation method for getting the singleton instance. 
     Implement “lazy initialization” inside the static method. 
     It should create a new object on its first call and put it into the static field. 
     The method should always return that instance on all subsequent calls.
*/

class MyMap {
  /* 1 */
  private static instance: MyMap;

  map: Map<number, string> = new Map();

  /* 2 */
  private constructor() {}

  /* 3 */
  public static getInstance(): MyMap {
    if (!MyMap.instance) {
      return (MyMap.instance = new MyMap());
    }

    return MyMap.instance;
  }

  public clear(): void {
    this.map.clear();
  }
}

class Service1 {
  addMap(key: number, value: string): void {
    const myMap = MyMap.getInstance();
    myMap.map.set(key, value);
  }
}

class Service2 {
  getKeyValue(key: number): void {
    const myMap = MyMap.getInstance();

    console.log(myMap.map.get(key));
    myMap.clear();
    console.log(myMap.map.get(key));
  }
}

const service1 = new Service1();
service1.addMap(1, 'first');

const service2 = new Service2();
service2.getKeyValue(1);
