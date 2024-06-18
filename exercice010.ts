class Person {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  private employeeId: number;

  constructor(name: string, age: number, employeeId: number) {
    super(name, age);
    this.employeeId = employeeId;
  }

  toString() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Id: ${this.employeeId}`);
  }
}

const employee = new Employee("John", 24, 1000);
employee.toString();
