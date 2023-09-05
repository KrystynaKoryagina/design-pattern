class Form {
  constructor(public name: string) {}
}

abstract class SaveForm<T> {
  public save(form: Form): void {
    const res = this.fill(form);

    this.log(res);
    this.send(res);
  }

  protected abstract fill(form: Form): T;
  protected abstract send(data: T): void;

  protected log(data: T): void {
    console.log(data);
  }
}

class FirstAPI extends SaveForm<string> {
  protected fill(form: Form): string {
    return form.name;
  }

  protected send(data: string): void {
    console.log(`${data} is being sending...`);
  }
}

class SecondAPI extends SaveForm<{ fullname: string }> {
  protected fill(form: Form): { fullname: string } {
    return { fullname: form.name };
  }

  protected send(data: { fullname: string }): void {
    console.log(`${data} is being sending via Second API...`);
  }
}

const form1 = new FirstAPI();
form1.save(new Form('Kristina'));

const form2 = new SecondAPI();
form2.save(new Form('Kristina'));
