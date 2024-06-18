class Student3 {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age > 0 ? age : 0;
  }

  toString() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
}

const student01 = new Student3("Germain", 3);
student01.toString();
