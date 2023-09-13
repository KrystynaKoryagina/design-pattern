# Design Pattern

**Design patterns** are typical solutions to commonly occurring problems in software design.

They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

The pattern is a general concept for solving a particular problem. You can follow the pattern details and implement a solution that suits the realities of your own program.

## Creational Design Patterns

Creational design patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

- Singleton
- Factory Method

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

### Factory Method

**Factory Method** is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

- Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with.

The Factory Method separates product construction code from the code that actually uses the product. Therefore it’s easier to extend the product construction code independently from the rest of the code.

For example, to add a new product type to the app, you’ll only need to create a new creator subclass and override the factory method in it.

#### Pros and Cons

"+" You avoid tight coupling between the creator and the concrete products.

"+" Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.

"+" Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.

"-" The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.

## Structural Design Patterns

Structural design patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.

- Adapter
- Decorator
- Facade
- Flyweight

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

### Facade

**Facade** is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about.

- Use the Facade pattern when you need to have a limited but straightforward interface to a complex subsystem.

Often, subsystems get more complex over time. Even applying design patterns typically leads to creating more classes. A subsystem may become more flexible and easier to reuse in various contexts, but the amount of configuration and boilerplate code it demands from a client grows ever larger. The Facade attempts to fix this problem by providing a shortcut to the most-used features of the subsystem which fit most client requirements.

#### Pros and Cons

"+" You can isolate your code from the complexity of a subsystem.

"-" A facade can become a god object coupled to all classes of an app.

### Flyweight

**Flyweight** is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

The Flyweight pattern suggests that you stop storing the extrinsic state inside the object. Instead, you should pass this state to specific methods which rely on it. Only the intrinsic state stays within the object, letting you reuse it in different contexts. As a result, you’d need fewer of these objects since they only differ in the intrinsic state, which has much fewer variations than the extrinsic.

Since the same flyweight object can be used in different contexts, you have to make sure that its state can’t be modified. A flyweight should initialize its state just once, via constructor parameters. It shouldn’t expose any setters or public fields to other objects.

- Use the Flyweight pattern only when your program must support a huge number of objects which barely fit into available RAM.

#### Pros and Cons

"+" You can save lots of RAM, assuming your program has tons of similar objects.

"-" You might be trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method.

"-" The code becomes much more complicated. New team members will always be wondering why the state of an entity was separated in such a way.

## Behavioral Design Patterns

Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

- Template Method
- Strategy

### Template Method

**Template Method** is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

The Template Method pattern suggests that you break down an algorithm into a series of steps, turn these steps into methods, and put a series of calls to these methods inside a single template method.

The steps may either be abstract, or have some default implementation. To use the algorithm, the client is supposed to provide its own subclass, implement all abstract steps, and override some of the optional ones if needed (but not the template method itself).

- Use the Template Method pattern when you want to let clients extend only particular steps of an algorithm, but not the whole algorithm or its structure.

The Template Method lets you turn a monolithic algorithm into a series of individual steps which can be easily extended by subclasses while keeping intact the structure defined in a superclass.

- Use the pattern when you have several classes that contain almost identical algorithms with some minor differences. As a result, you might need to modify all classes when the algorithm changes.

When you turn such an algorithm into a template method, you can also pull up the steps with similar implementations into a superclass, eliminating code duplication. Code that varies between subclasses can remain in subclasses.

#### Pros and Cons

"+" You can let clients override only certain parts of a large algorithm, making them less affected by changes that happen to other parts of the algorithm.

"+" You can pull the duplicate code into a superclass.

"-" Some clients may be limited by the provided skeleton of an algorithm.

"-" You might violate the Liskov Substitution Principle by suppressing a default step implementation via a subclass.

"-" Template methods tend to be harder to maintain the more steps they have.

### Strategy

**Strategy** is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called strategies.

The original class, called context, must have a field for storing a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on its own.

The context isn’t responsible for selecting an appropriate algorithm for the job. Instead, the client passes the desired strategy to the context.

In fact, the context doesn’t know much about strategies. It works with all strategies through the same generic interface, which only exposes a single method for triggering the algorithm encapsulated within the selected strategy.

This way the context becomes independent of concrete strategies, so you can add new algorithms or modify existing ones without changing the code of the context or other strategies.

- Use the Strategy pattern when you want to use different variants of an algorithm within an object and be able to switch from one algorithm to another during runtime.

- Use the Strategy when you have a lot of similar classes that only differ in the way they execute some behavior.

- Use the pattern to isolate the business logic of a class from the implementation details of algorithms that may not be as important in the context of that logic.

- Use the pattern when your class has a massive conditional statement that switches between different variants of the same algorithm.

#### Pros and Cons

"+" You can swap algorithms used inside an object at runtime.

"+" You can isolate the implementation details of an algorithm from the code that uses it.

"+" You can replace inheritance with composition.

"+" Open/Closed Principle. You can introduce new strategies without having to change the context.

"-" If you only have a couple of algorithms and they rarely change, there’s no real reason to overcomplicate the program with new classes and interfaces that come along with the pattern.

"-" Clients must be aware of the differences between strategies to be able to select a proper one.
