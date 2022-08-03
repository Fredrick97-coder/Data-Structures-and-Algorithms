var Student = /** @class */ (function () {
    function Student(age, name) {
        this.age = age;
        this.name = name;
    }
    Student.prototype.getAge = function () {
        if (this.age < 18) {
            return "".concat(this.name, ", you are not allowed to view this content with age : ").concat(this.age);
        }
        return "".concat(this.name, ", just logged in to Sexy nudity city");
    };
    Student.prototype.setName = function (person) {
        this.name = person;
    };
    return Student;
}());
var student = new Student(31, 'Yaw');
student.setName(7);
console.log(student.getAge());
