class Student {
  age: number;
  name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getAge() {
    if (this.age < 18) {
      return `${this.name}, you are not allowed to view this content with age : ${this.age}`;
    }
    return `${this.name}, just logged in to Sexy nudity city`;
  }
  setName(person: string) {
    this.name = person;
  }
}

let student = new Student(31, 'Yaw');
student.setName('Franklin');
console.log(student.getAge());
