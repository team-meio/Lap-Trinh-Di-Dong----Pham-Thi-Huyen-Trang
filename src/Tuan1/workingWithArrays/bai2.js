function calcAverageHumanAge(ages) {
    // Step 1: Convert dog ages to human ages
    const humanAges = ages.map(dogAge => {
        if (dogAge <= 2) {
            return 2 * dogAge;
        } else {
            return 16 + dogAge * 4;
        }
    });

    // Step 2: Exclude all dogs that are less than 18 human years old
    const adultHumanAges = humanAges.filter(age => age >= 18);

    // Step 3: Calculate the average human age
    if (adultHumanAges.length > 0) {
        const totalAge = adultHumanAges.reduce((acc, age) => acc + age, 0);
        const averageAge = totalAge / adultHumanAges.length;
        return averageAge;
    } else {
        return 0; // Return 0 if no dogs are 18 or older
    }
}

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Run the function with test data
console.log('Average Human Age for Data 1:', calcAverageHumanAge(data1)); // Example output
console.log('Average Human Age for Data 2:', calcAverageHumanAge(data2)); // Example output
