/*
  Imagine that in the application you are developing there is a need to dynamically input" el-ts of different types: "text", "number", "email", etc.
  Moreover, this list may be expanded in the future, so you do not want to directly depend on the classes of the corresponding items: TextInput, NumberInput, EmailInput.
  To get rid of the direct dependency of components on classes, you decided to use the "Factory Method" pattern.
  Please implement the logic to add the type of the incitement in the classes TextInput, NumberInput, EmailInput by extending the behavior of the method create in these subclasses:

    this.element.type = 'text';

  Also implement the logic of the inputFactory function, which, depending on the incoming argument, type, will create an instance of the corresponding type.
*/

class Input {
  element = {};
  create () {
    // Abstract method
  }
}

export class TextInput extends Input {
  create () {
    super.create();
    this.element.type = 'text';
  }
}

export class NumberInput extends Input {
  create () {
    super.create();
    this.element.type = 'number';
  }
}

export class EmailInput extends Input {
  create () {
    super.create();
    this.element.type = 'email';
  }
}

export const inputFactory = (type = '') => {
  switch (type) {
  case 'text':
    return new TextInput();
  case 'number':
    return new NumberInput();
  case 'email':
    return new EmailInput();
  default:
    throw new Error('Unknown type');
  }
};

// export const inputFactory = (type = '') => {
//   const inputs = {
//     text: TextInput,
//     number: NumberInput,
//     email: EmailInput,
//   }

//   return new inputs[type]
// };
