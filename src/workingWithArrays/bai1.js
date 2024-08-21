function checkDogs(dogsJulia, dogsKate) {
    // Step 1: Create a shallow copy of Julia's array and remove the cat ages
    const correctedJulia = dogsJulia.slice(); // Create a shallow copy of Julia's array
    correctedJulia.splice(0, 2); // Remove the first two elements
    correctedJulia.splice(-2); // Remove the last two elements
    
    // Step 2: Combine the corrected Julia's data with Kate's data
    const allDogs = correctedJulia.concat(dogsKate);
    
    // Step 3: Iterate over the combined array to log the results
    allDogs.forEach((age, index) => {
        if (age >= 3) {
            console.log(`Dog number ${index + 1} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${index + 1} is still a puppy 🐶`);
        }
    });
}

// Test data
const data1Julia = [3, 5, 2, 12, 7];
const data1Kate = [4, 1, 15, 8, 3];
const data2Julia = [9, 16, 6, 8, 3];
const data2Kate = [10, 5, 6, 1, 4];

// Run the function with test data
console.log('Test Data 1:');
checkDogs(data1Julia, data1Kate);

console.log('\nTest Data 2:');
checkDogs(data2Julia, data2Kate);
