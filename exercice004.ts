class Engine {
  private horsePower: number;
  private fuelType: string;

  constructor(horsePower: number, fuelType: string) {
    this.horsePower = horsePower;
    this.fuelType = fuelType;
  }

  toString() {
    console.log(`Engine horsePower: ${this.horsePower}`);
    console.log(`Engine fuelType  : ${this.fuelType}`);
  }
}

class Car2 {
  private make: string;
  private model: string;
  private year: number;
  private engine: Engine;

  constructor(make: string, model: string, year: number, engine: Engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = engine;
  }

  show() {
    console.log(`This cars is ${this.make} ${this.model} ${this.year}`);
  }

  printCarDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    this.engine.toString();
  }
}

const engine = new Engine(10, "Gasoline");
const car2 = new Car2("France", "Renault", 2024, engine);
car2.printCarDetails();
