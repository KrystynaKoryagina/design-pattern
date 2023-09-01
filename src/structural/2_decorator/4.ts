interface IUSerService {
  users: number;
  getUsersCount: () => number;
}

class UserService implements IUSerService {
  users: number = 1000;

  getUsersCount = () => this.users;
}

function nullUser(obj: IUSerService) {
  obj.users = 0;

  return obj;
}

function logUser(obj: IUSerService) {
  console.log('Users', obj.users);

  return obj;
}

console.log(new UserService().getUsersCount());

console.log(nullUser(new UserService()).getUsersCount());

console.log(logUser(nullUser(new UserService())).getUsersCount());
