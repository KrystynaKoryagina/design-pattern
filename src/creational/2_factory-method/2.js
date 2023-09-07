class Subscription {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }

  selectSubscription = () => {}
}

class FreeSubscription extends Subscription {
  constructor(name, cost) {
    super(name, cost);

    this.cost = 0;
  }

  selectSubscription = () => {
    console.log(`Free subscription`);
  }
}

class StandardSubscription extends Subscription {
  constructor(name, cost) {
    super(name, cost);

    this.cost = 100;
  }

  selectSubscription = () => {
    console.log(`${this.name}, Subscription standard - price ${this.cost}`);
  }
}

class ProSubscripription extends Subscription {
  constructor(name, cost) {
    super(name, cost);

    this.cost = 500;
  }

  selectSubscription = () => {
    console.log(`Subscription Pro - price ${this.cost}`);
  }
}

class MemberFactory {
  static list = {
    free: FreeSubscription,
    standard: StandardSubscription,
    pro: ProSubscripription
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.free;
    const member = new Membership(name);

    member.type = type;

    member.define = () => {
      console.log(`${member.name} (${member.type}): ${member.cost}`)
    }

    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create('Krystyna', 'free'),
  factory.create('Vlad', 'pro'),
  factory.create('Alex', 'standard')
];

members.forEach(m => m.define());
members.forEach(m => m.selectSubscription());
