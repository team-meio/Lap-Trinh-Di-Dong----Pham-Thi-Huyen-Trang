class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed; // Speed in km/h
    }
  
    // Method to accelerate the car
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is now going at ${this.speed} km/h`);
    }
  
    // Method to brake the car
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is now going at ${this.speed} km/h`);
    }
  
    // Getter for speed in miles per hour
    get speedUS() {
      return this.speed / 1.6;
    }
  
    // Setter for speed in miles per hour
    set speedUS(speedInMiles) {
      this.speed = speedInMiles * 1.6;
    }
  }
  
  // Create a new CarCl object
  const car1 = new CarCl('Ford', 120);
  
  // Test accelerate and brake methods
  car1.accelerate(); // Ford is now going at 130 km/h
  car1.accelerate(); // Ford is now going at 140 km/h
  car1.brake();      // Ford is now going at 135 km/h
  car1.brake();      // Ford is now going at 130 km/h
  
  // Test the getter for speed in miles per hour
  console.log(`The speed in mph is ${car1.speedUS}`); // The speed in mph is 81.25
  
  // Test the setter for speed in miles per hour
  car1.speedUS = 60; // Sets the speed to 60 mph
  console.log(`${car1.make} is now going at ${car1.speed} km/h`); // Ford is now going at 96 km/h
  