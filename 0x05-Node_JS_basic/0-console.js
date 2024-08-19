// 0-console.js

// Function to print a string using STDOUT

function displayMessage(helloMessage) {
    process.stdout.write(helloMessage +'\n');    
}

// Export the function
module.exports = displayMessage;