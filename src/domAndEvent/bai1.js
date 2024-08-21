// Assume these variables are already declared in your existing code
let score = 20; // Initial score
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate a random number

document.querySelector('.again').addEventListener('click', function() {

    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    // 3. Restore the initial conditions of the message, number, score, and guess input fields
    document.querySelector('.message').textContent = 'Start guessing...'; // Reset message
    document.querySelector('.score').textContent = score; // Reset score display
    document.querySelector('.number').textContent = '?'; // Reset the number display
    document.querySelector('.guess').value = ''; // Clear the input field

    // 4. Restore the original background color and number width
    document.querySelector('body').style.backgroundColor = '#222'; // Reset background color
    document.querySelector('.number').style.width = '15rem'; // Reset number width
});

