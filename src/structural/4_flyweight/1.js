class Flyweight {
  constructor(info = {}) {
    this.info = info;
  }
}

class ProductsStore {
  flyweights = {};
  products = [];

  addProduct (productData = {}) {
    const productFlyweight = this.getOrCreateFlyweight(productData.info);

    const product = {
      model: productData.model,
      info: productFlyweight.info
    };

    this.products.push(product);
  }

  getOrCreateFlyweight (info = {}) {
    const key = `${info.name}-${info.color}`;

    if (this.flyweights[key]) {
      return this.flyweights[key];
    }

    this.flyweights[key] = new Flyweight(info);

    return this.flyweights[key];
  }
}