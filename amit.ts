// Import the fs module to work with the file system
import * as fs from 'fs';

// Function to count occurrences of the word "AMIT" in a file
function countWordInFile(filePath: string, word: string): void {
    // Read the file content as a string
    fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string | undefined) => {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }

        // Use a regular expression to find all occurrences of the word "AMIT"
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        const matches = data?.match(regex);

        // Count the number of occurrences
        const count = matches ? matches.length : 0;

        // Output the result
        console.log(`The word "${word}" occurs ${count} times in the file.`);
    });
}

// Call the function and provide the path to your file and the word to search for
const filePath = 'amit.txt';  // Replace with the path to your text file
const wordToSearch = 'AMIT';  // The word you want to count
countWordInFile(filePath, wordToSearch);
