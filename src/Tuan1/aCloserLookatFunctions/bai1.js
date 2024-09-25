// Poll object definition
const poll = {
    question: 'What is your favourite programming language?',
    options: ['JavaScript', 'Python', 'Rust', 'C++'],
    answers: [0, 0, 0, 0],

    // Method to register a new answer
    registerNewAnswer: function() {
        // Display the prompt
        const input = prompt(`${this.question}\n${this.options.map((opt, i) => `${i}: ${opt}`).join('\n')}\n(Write option number)`);

        // Validate and update the answers array
        const answer = Number(input);
        if (typeof answer === 'number' && answer >= 0 && answer < this.answers.length) {
            this.answers[answer]++;
            // Display the results after updating
            this.displayResults();
        } else {
            console.log('Invalid input, please enter a valid option number.');
        }
    },

    // Method to display results
    displayResults: function(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        } else {
            console.log('Invalid type. Use "array" or "string".');
        }
    }
};

// Add event listener to the button
document.getElementById('answerPoll').addEventListener('click', () => poll.registerNewAnswer());

// Bonus: Display test data
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

// Display bonus test data
poll.displayResults.call({ answers: testData1 }, 'array'); // Using the 'array' type
poll.displayResults.call({ answers: testData2 }, 'string'); // Using the 'string' type
