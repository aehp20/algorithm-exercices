class Animal {
  protected name: string;
  protected specie: string;

  constructor(name: string, specie: string) {
    this.name = name;
    this.specie = specie;
  }

  toString() {
    console.log(this.name, this.specie);
  }
}

class Tiger extends Animal {
  constructor(name: string, specie: string) {
    super(name, specie);
  }
  public roar() {
    console.log(`The tiger ${this.name} is roaring`);
  }
}

const tiger = new Tiger("tigrillo", "mamifer");
tiger.roar();
