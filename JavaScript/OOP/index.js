class Bike {
  constructor(size) {
    this.size = size;
    this.mode = 'original';
  }
}

class SpecialBike extends Bike {
  constructor(size) {
    super(size);
    this.type = 'BMX RoadWorks';
  }
  race() {
    console.log(`Our ${this.type} of size ${this.size} has a good feeling `);
  }
}

const specialty = new SpecialBike('medium');
specialty.race();
