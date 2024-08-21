// Step 1: Define the Car constructor function
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // Step 2: Implement the accelerate method
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
  };
  
  // Step 3: Implement the brake method
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h`);
  };
  
  // Step 4: Create two Car objects
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);
  
  // Test accelerate and brake methods
  car1.accelerate(); // BMW is now going at 130 km/h
  car1.accelerate(); // BMW is now going at 140 km/h
  car1.brake();      // BMW is now going at 135 km/h
  car1.brake();      // BMW is now going at 130 km/h
  
  car2.accelerate(); // Mercedes is now going at 105 km/h
  car2.brake();      // Mercedes is now going at 100 km/h
  car2.brake();      // Mercedes is now going at 95 km/h
  