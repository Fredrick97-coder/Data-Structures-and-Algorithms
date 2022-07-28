var Numbers = /** @class */ (function () {
    function Numbers(age, name) {
        this.age = age;
        this.name = name;
    }
    Numbers.prototype.getAge = function () {
        if (this.age < 18) {
            return "".concat(this.name, ", you are not allowed to view this content with age : ").concat(this.age);
        }
        return "".concat(this.name, ", just logged in to Sexy nudity city");
    };
    return Numbers;
}());
var numbers = new Numbers(31, 'Yaw');
console.log(numbers.getAge());
