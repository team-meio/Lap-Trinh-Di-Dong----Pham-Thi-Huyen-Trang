// Function to convert underscore_case to camelCase
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
}

// Function to process the textarea input and log the results
function processInput() {
    // Get the textarea value and split it by newlines
    const textarea = document.getElementById('textarea');
    const input = textarea.value.trim();
    const variables = input.split('\n');

    // Process each variable name
    variables.forEach((variable, index) => {
        // Remove leading and trailing whitespace
        variable = variable.trim();

        // Convert to camelCase
        const camelCaseVariable = toCamelCase(variable);

        // Create the success symbols
        const successSymbols = '✅'.repeat(index + 1);

        // Log the result
        console.log(`${camelCaseVariable} ${successSymbols}`);
    });
}

// Attach event listener to the button
document.getElementById('convertBtn').addEventListener('click', processInput);
