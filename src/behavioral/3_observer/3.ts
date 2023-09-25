interface Observer {
  update(lead: Lead): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

class Lead {
  constructor(public name: string, public phone: string) {}
}

class NewLead implements Subject {
  private observers: Observer[] = [];
  state: Lead;

  subscribe(observer: Observer): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer: Observer): void {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.state);
    }
  }
}

class NotificationService implements Observer {
  update(lead: Lead): void {
    console.log('NotificationService received the notification', lead);
  }
}

class LeadService implements Observer {
  update(lead: Lead): void {
    console.log('LeadService received the notification', lead);
  }
}

const subject = new NewLead();
subject.state = new Lead('Krystyna', '1234-000');

const s1 = new NotificationService();
const s2 = new LeadService();

subject.subscribe(s1);
subject.subscribe(s2);

subject.notify();

subject.unsubscribe(s1);

subject.notify();
