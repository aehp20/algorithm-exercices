class Student2 {
  private name: string;
  private rollNumber?: number;

  constructor(name: string, rollNumber?: number) {
    this.name = name;
    this.rollNumber = rollNumber ?? undefined;
  }

  toString() {
    console.log(`My name is ${this.name} and my roll is ${this.rollNumber}`);
  }
}

const student2 = new Student2("Fanny", 1000);
student2.toString();
const student3 = new Student2("Fanny");
student3.toString();
