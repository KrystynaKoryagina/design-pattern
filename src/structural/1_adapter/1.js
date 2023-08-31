/*
  The getArea function calculates the area by multiplying the width and height properties of an object created by rectangle` class.
  Please construct a class Adapter that allows you to use the getArea function to calculate the area of the object created by the class Square.

  getArea(new Adapter(new Square(10))); // 100
  getArea(new Rectangle(2, 3)); // 6
*/

export const getArea = shape => {
  return shape.width * shape.height;
};

export class Square {
  constructor(size) {
    this.size = size;
  }
}

export class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

export class Adapter {
  constructor(shape) {
    this.width = shape.size;
    this.height = shape.size;
  }
}