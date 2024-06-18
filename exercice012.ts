class Vehicle {
  protected make: string;
  protected model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  toString() {
    console.log(`Vehicle: ${this.make} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model);
  }

  toString() {
    console.log(`Car: ${this.make} ${this.model}`);
  }
}

class SportsCar extends Car {
  constructor(make: string, model: string) {
    super(make, model);
  }

  toString() {
    console.log(`SportCar: ${this.make} ${this.model}`);
  }
}

const vehicule = new Vehicle("France", "Ford");
vehicule.toString();
const car = new Car("France", "Ford");
car.toString();
const sportCar = new SportsCar("France", "Ford");
sportCar.toString();
