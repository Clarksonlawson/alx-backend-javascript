// Import the readline module to handle user input
const readline = require('readline');

// Create an interface to read from stdin and write to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for their name
console.log("Welcome to Holberton School, what is your name?");

// Listen for input from the user
rl.on('line', (input) => {
    // Output the user's name
    console.log(`Your name is: ${input}`);
    
    // Close the readline interface
    rl.close();
});

// Listen for the close event to display the closing message
rl.on('close', () => {
    console.log("This important software is now closing");
});
