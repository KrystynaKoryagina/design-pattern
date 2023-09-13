class User {
  githubToken: string;
  jwtToken: string;
}

interface AuthStrategy {
  auth(user: User): boolean;
}

class Auth {
  constructor(private strategy: AuthStrategy) {}

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  authUser(user: User): boolean {
    return this.strategy.auth(user);
  }
}

class JWTToken implements AuthStrategy {
  auth(user: User): boolean {
    // some code
    return !!user.jwtToken;
  }
}

class GithubToken implements AuthStrategy {
  auth(user: User): boolean {
    // some code
    return !!user.githubToken;
  }
}

const user = new User();
user.jwtToken = 'token';

const auth = new Auth(new JWTToken());
console.log(auth.authUser(user)); // true - user has jwt token

auth.setStrategy(new GithubToken());
console.log(auth.authUser(user)); // false - user doesn't have github token
