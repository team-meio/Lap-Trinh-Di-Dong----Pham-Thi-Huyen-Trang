const calcAverageHumanAge = ages =>
    ages
        .map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4) // Convert dog ages to human ages
        .filter(humanAge => humanAge >= 18) // Filter out ages less than 18
        .reduce((acc, age, _, array) => acc + age / array.length, 0); // Calculate average

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Run the function with test data
console.log('Average Human Age for Data 1:', calcAverageHumanAge(data1)); // Example output
console.log('Average Human Age for Data 2:', calcAverageHumanAge(data2)); // Example output
