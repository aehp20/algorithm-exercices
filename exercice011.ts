class Shape {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  public draw() {
    console.log(`The shape is being drawn - color: ${this.color}`);
  }
}

class Circle extends Shape {
  constructor(color: string) {
    super(color);
  }
  public draw() {
    console.log(`The circle is being drawn - color: ${this.color}`);
  }
}

const circle = new Circle("red");
circle.draw();
