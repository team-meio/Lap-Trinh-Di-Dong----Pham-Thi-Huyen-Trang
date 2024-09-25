class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed; // Speed in km/h
    }
  
    // Method to accelerate the car
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is now going at ${this.speed} km/h`);
      return this; // For method chaining
    }
  
    // Method to brake the car
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is now going at ${this.speed} km/h`);
      return this; // For method chaining
    }
  }
  
  class EVCl extends CarCl {
    #charge; // Private property
  
    constructor(make, speed, charge) {
      super(make, speed); // Call the parent class constructor
      this.#charge = charge; // Initialize the private charge property
    }
  
    // Method to charge the battery
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`${this.make} battery charged to ${this.#charge}%`);
      return this; // For method chaining
    }
  
    // Override the accelerate method
    accelerate() {
      this.speed += 20;
      this.#charge -= 1; // Decrease battery charge by 1%
      console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
      return this; // For method chaining
    }
  }
  
  // Create an EVCl object
  const rivian = new EVCl('Rivian', 120, 23);
  
  // Test the methods with chaining
  rivian
    .accelerate()       // Rivian going at 140 km/h, with a charge of 22%
    .accelerate()       // Rivian going at 160 km/h, with a charge of 21%
    .brake()            // Rivian is now going at 155 km/h
    .chargeBattery(90); // Rivian battery charged to 90%
  