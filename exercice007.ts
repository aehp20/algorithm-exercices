class Shape {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  toString() {
    console.log(`The shape color is ${this.color}`);
  }
}
// const shape = new Shape("red");
// shape.toString();
class Circle extends Shape {
  private radius: number;

  constructor(radius: number, color: string) {
    super(color);
    this.radius = radius;
  }

  toString() {
    console.log(`Radius is: ${this.radius}`);
    console.log(`Color is : ${this.color}`);
  }
}
const circle = new Circle(10, "blue");
circle.toString();
