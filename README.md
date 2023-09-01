# Design Pattern

**Design patterns** are typical solutions to commonly occurring problems in software design. 

They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

The pattern is a general concept for solving a particular problem. You can follow the pattern details and implement a solution that suits the realities of your own program.

## Creational Design Patterns
Creational design patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.
- Singleton

### Singleton

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

## Structural Design Patterns
Structural design patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.
- Adapter
- Decorator

### Adapter

**Adapter** is a structural design pattern that allows objects with incompatible interfaces to collaborate.

- Use the Adapter class when you want to use some existing class, but its interface isn’t compatible with the rest of your code.

The Adapter pattern lets you create a middle-layer class that serves as a translator between your code and a legacy class, a 3rd-party class or any other class with a weird interface

- Use the pattern when you want to reuse several existing subclasses that lack some common functionality that can’t be added to the superclass.

You could extend each subclass and put the missing functionality into new child classes. 
However, you’ll need to duplicate the code across all of these new classes, which smells really bad.

#### Pros and Cons
"+" Single Responsibility Principle. You can separate the interface or data conversion code from the primary business logic of the program.

"+" Open/Closed Principle. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.

"-" The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. 
Sometimes it’s simpler just to change the service class so that it matches the rest of your code.

### Decorator
**Decorator** is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

“Wrapper” is the alternative nickname for the Decorator pattern that clearly expresses the main idea of the pattern. A wrapper is an object that can be linked with some target object. The wrapper contains the same set of methods as the target and delegates to it all requests it receives. However, the wrapper may alter the result by doing something either before or after it passes the request to the target.

- Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.

The Decorator lets you structure your business logic into layers, create a decorator for each layer and compose objects with various combinations of this logic at runtime. The client code can treat all these objects in the same way, since they all follow a common interface.

- Use the pattern when it’s awkward or not possible to extend an object’s behavior using inheritance.

#### Pros and Cons
"+" You can extend an object’s behavior without making a new subclass.

"+" You can add or remove responsibilities from an object at runtime.

"+" You can combine several behaviors by wrapping an object into multiple decorators.

"+" Single Responsibility Principle. You can divide a monolithic class that implements many possible variants of behavior into several smaller classes.

"-" It’s hard to remove a specific wrapper from the wrappers stack.

"-" It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorators stack.
The initial configuration code of layers might look pretty ugly.
