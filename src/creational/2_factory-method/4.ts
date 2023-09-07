/**
 * Общий интерфейс для всех создаваемых продуктов
 * Интерфейс Product объявляет операции, которые должны выполнять все конкретные продукты.
 */
interface Product {
  operation(): string;
}

/**
 * Класс Creator объявляет фабричный метод, который должен возвращать объект класса Product.
 * Подклассы Creator обычно предоставляют реализацию этого метода.
 * Суперкласс
 */
abstract class Creator {
  /**
   * Creator может также обеспечить реализацию фабричного метода по умолчанию.
   */
  public abstract factoryMethod(): Product;

  /**
   * Основная обязанность Creator не заключается в создании продуктов.
   * Обычно он содержит некоторую базовую бизнес-логику, которая основана на объектах Product, возвращаемых фабричным методом.
   * Подклассы могут косвенно изменять эту бизнес-логику, переопределяя фабричный метод и возвращая из него другой тип продукта.
   */
  public someOperation(): string {
    // Вызываем фабричный метод, чтобы получить объект-продукт.
    const product = this.factoryMethod();

    // Далее, работаем с этим продуктом.
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

/**
 * Конкретные Создатели переопределяют фабричный метод для того, чтобы изменить тип результирующего продукта.
 */
class ConcreteCreatorFirst extends Creator {
  /**
   * Сигнатура метода по-прежнему использует тип абстрактного продукта, хотя фактически из метода возвращается конкретный продукт.
   * Таким образом, Creator может оставаться независимым от конкретных классов продуктов.
   */
  public factoryMethod(): Product {
    return new ConcreteProductFirst();
  }
}

class ConcreteCreatorSecond extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductSecond();
  }
}

/**
 * Конкретные Продукты предоставляют различные реализации интерфейса Product.
 */
class ConcreteProductFirst implements Product {
  public operation(): string {
    return '{Result of the ConcreteProductFirst}';
  }
}

class ConcreteProductSecond implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}

/**
 * Клиентский код работает с экземпляром конкретного создателя, хотя и через его базовый интерфейс.
 * Пока клиент продолжает работать с создателем через базовый интерфейс, вы можете передать ему любой подкласс создателя.
 */
function clientCode(creator: Creator) {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
  // ...
}

/**
 * Приложение выбирает тип создателя в зависимости от конфигурации или среды.
 */
clientCode(new ConcreteCreatorFirst());
// Client: I'm not aware of the creator's class, but it still works.
// Creator: The same creator's code has just worked with {Result of the ConcreteProduct1}

clientCode(new ConcreteCreatorSecond());
// Client: I'm not aware of the creator's class, but it still works.
// Creator: The same creator's code has just worked with {Result of the ConcreteProduct2}
