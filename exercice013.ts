abstract class Shape2 {
  protected color: string;
  constructor(color: string) {
    this.color = color;
  }
  public abstract getPerimeter(): void;
}

class Circle2 extends Shape2 {
  constructor(color: string) {
    super(color);
  }
  public getPerimeter() {
    console.log("Circle perimeter");
  }
}

class Rectangle extends Shape2 {
  constructor(color: string) {
    super(color);
  }
  public getPerimeter() {
    console.log("Rectangle perimeter");
  }
}

const circle1 = new Circle2("red");
circle1.getPerimeter();
const rectangle = new Rectangle("blue");
rectangle.getPerimeter();
