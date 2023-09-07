enum DEVELOP_SPECIALTY {
  JS = 'js',
  IOS = 'ios',
}

interface Developer {
  writeCode: () => void;
}

interface DeveloperFactory {
  createDeveloper: () => Developer;
}

class JavaScriptDeveloper implements Developer {
  writeCode(): void {
    console.log('JavaScript Developer writes JS code');
  }
}

class JavaScriptDeveloperFactory implements DeveloperFactory {
  createDeveloper(): Developer {
    return new JavaScriptDeveloper();
  }
}

class IosDeveloper implements Developer {
  writeCode(): void {
    console.log('OIS Developer writes swift code');
  }
}

class IosDeveloperFactory implements DeveloperFactory {
  createDeveloper(): Developer {
    return new IosDeveloper();
  }
}

class ClientProgramm {
  specialty: DEVELOP_SPECIALTY;

  constructor(specialty: DEVELOP_SPECIALTY) {
    this.specialty = specialty;
  }

  static createDeveloperFactory(
    specialty: DEVELOP_SPECIALTY
  ): DeveloperFactory | null {
    if (specialty === DEVELOP_SPECIALTY.IOS) {
      return new IosDeveloperFactory();
    }

    if (specialty === DEVELOP_SPECIALTY.JS) {
      return new JavaScriptDeveloperFactory();
    }

    return null;
  }

  main(): void {
    const developerFactoty = ClientProgramm.createDeveloperFactory(
      this.specialty
    );
    const developer = developerFactoty?.createDeveloper();

    developer?.writeCode();
  }
}

const js = new ClientProgramm(DEVELOP_SPECIALTY.JS);
js.main();

const ois = new ClientProgramm(DEVELOP_SPECIALTY.IOS);
ois.main();
