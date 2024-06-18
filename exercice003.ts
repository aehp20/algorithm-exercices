class Car1 {
  private make: string;
  private model: string;
  private year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  show() {
    console.log(`This cars is ${this.make} ${this.model} ${this.year}`);
  }
}

class SUV1 extends Car1 {
  private isOffRoadDriving: boolean;

  constructor(
    make: string,
    model: string,
    year: number,
    isOffRoadDriving: boolean
  ) {
    super(make, model, year);

    this.isOffRoadDriving = isOffRoadDriving;
  }

  toggleOffRoadCapability() {
    this.isOffRoadDriving = !this.isOffRoadDriving;
  }

  show() {
    super.show();
    console.log(
      `This car is suitable for off-road driving? ${this.isOffRoadDriving}`
    );
  }
}

const suv1 = new SUV1("France", "Renault", 2024, true);
suv1.show();
suv1.toggleOffRoadCapability();
suv1.show();
