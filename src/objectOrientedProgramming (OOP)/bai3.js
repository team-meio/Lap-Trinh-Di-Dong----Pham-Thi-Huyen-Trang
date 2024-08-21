class Car {
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
  }
  
  class ElectricCar extends Car {
    constructor(make, speed, charge) {
      super(make, speed); // Call the parent class constructor
      this.charge = charge; // Battery charge in percentage
    }
  
    // Method to charge the battery
    chargeBattery(chargeTo) {
      this.charge = chargeTo;
      console.log(`${this.make} battery charged to ${this.charge}%`);
    }
  
    // Override the accelerate method
    accelerate() {
      this.speed += 20;
      this.charge -= 1; // Decrease battery charge by 1%
      console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
  }
  
  // Create an ElectricCar object
  const tesla = new ElectricCar('Tesla', 120, 23);
  
  // Test the methods
  tesla.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
  tesla.accelerate(); // Tesla going at 160 km/h, with a charge of 21%
  tesla.brake();      // Tesla is now going at 155 km/h
  
  // Charge the battery
  tesla.chargeBattery(90); // Tesla battery charged to 90%
  