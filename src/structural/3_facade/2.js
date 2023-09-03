class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiceComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

class ComplaintFacade {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === 'service') {
      complaint = new ServiceComplaints();
    } 
    
    if (type === 'product') {
      complaint = new ProductComplaints();
    }

    return complaint.add({id, customer, details});
  }
}

const registry = new ComplaintFacade();

console.log(registry.register('Krystyna', 'service', 'Unavailable'));
console.log(registry.register('Elena', 'product', 'Error'));
