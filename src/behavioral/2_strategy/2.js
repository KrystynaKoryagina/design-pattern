function baseStrategy(amount) {
  return amount;
};

function premiumStrategy(amount) {
  return amount * 0.85;
};

function platinumStrategy(amount) {
  return amount * 0.65;
};

class AutoCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
};

const base = new AutoCart(baseStrategy);
const premium = new AutoCart(premiumStrategy);
const platinum = new AutoCart(platinumStrategy);

base.setAmount(50000);
console.log(base.checkout()); // 50000

premium.setAmount(50000);
console.log(premium.checkout()); // 42500

platinum.setAmount(50000);
console.log(platinum.checkout()); // 32500
