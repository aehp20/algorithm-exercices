class Student {
  private name: string;
  private className: string;

  constructor(name: string, className: string) {
    this.name = name;
    this.className = className;
  }

  toString() {
    console.log(`My name is ${this.name} and I am in ${this.className}`);
  }
}

const student = new Student("Fanny", "PS1");
student.toString();
