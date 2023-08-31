# Design Pattern

**Design patterns** are typical solutions to commonly occurring problems in software design. 

They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

The pattern is a general concept for solving a particular problem. You can follow the pattern details and implement a solution that suits the realities of your own program.

## Singleton

**Singleton** is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

All implementations of the Singleton have these two steps in common:

1. Make the default constructor private, to prevent other objects from using the new operator with the Singleton class.

2. Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

If your code has access to the Singleton class, then it’s able to call the Singleton’s static method. So whenever that method is called, the same object is always returned.

- Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.

The Singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created.

- Use the Singleton pattern when you need stricter control over global variables.

Unlike global variables, the Singleton pattern ensure that there’s just one instance of a class. Nothing, except for the Singleton class itself, can replace the cached instance.

#### Pros and Cons
"+" You can be sure that a class has only a single instance.

"+" You gain a global access point to that instance.

"+" The singleton object is initialized only when it’s requested for the first time.
  
"-" Violates the Single Responsibility Principle. The pattern solves two problems at the time.

"-" The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.
