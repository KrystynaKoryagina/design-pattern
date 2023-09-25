/* 
  Please implement methods subscribe of class NewsChannel which will allow all users to subscribe to the news and the notify method which will send those messages to all subscribers.

  Also implement the receiveMessage method of the User class to get messages and write them into the messageHistory field.
*/

export class NewsChannel {
  users = [];

  subscribe (user) {
    this.users.push(user);
  }

  notify (message = '') {
    this.users.forEach(user => user.receiveMessage(message));
  }
}

export class User {
  messagesHistory = [];

  constructor(name) {
    this.name = name;
  }

  receiveMessage (message = '') {
    this.messagesHistory.push(message);
  }
}
