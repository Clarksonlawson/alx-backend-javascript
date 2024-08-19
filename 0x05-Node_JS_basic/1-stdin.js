// Display the initial prompt
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle incoming data from stdin
process.stdin.on('data', (data) => {
    // Output the user's name
    process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
});

// Handle the end of stdin stream
process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
