abstract class Animal2 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  protected abstract makeSound(): void;
}

class Tiger2 extends Animal2 {
  public makeSound() {
    console.log(`Sound of the Tiger ${this.name}`);
  }
}

class Lion2 extends Animal2 {
  public makeSound() {
    console.log(`Sound of the Lion ${this.name}`);
  }
}

const tiger2 = new Tiger2("tiguillo");
tiger2.makeSound();
const lion2 = new Lion2("lionoooo");
lion2.makeSound();
