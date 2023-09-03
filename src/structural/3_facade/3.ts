class Notify {
  send(template: string, to: string) {
    console.log(`Send ${template} to ${to}`);
  }
}

class Logger {
  lod(message: string) {
    console.log(message);
  }
}

interface ITemplate {
  name: string;
  template: string;
}

class Template {
  private tepmlates: ITemplate[] = [
    { name: 'other', template: '<h1>Template other</h1>' },
  ];

  getTemplateByName(name: string): ITemplate | undefined {
    return this.tepmlates.find((t) => t.name === name);
  }
}

class NotificationFacade {
  private notify: Notify;
  private logger: Logger;
  private template: Template;

  constructor() {
    this.notify = new Notify();
    this.logger = new Logger();
    this.template = new Template();
  }

  sendNotification(to: string, templateName: string) {
    const data: ITemplate | undefined =
      this.template.getTemplateByName(templateName);

    if (!data) {
      this.logger.lod('Template not found');

      return;
    }

    this.notify.send(data.template, to);
    this.logger.lod(`Template has been sent`);
  }
}

const notiification = new NotificationFacade();
notiification.sendNotification('mail@gmail.com', 'other');
