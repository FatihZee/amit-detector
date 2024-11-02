"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the fs module to work with the file system
var fs = require("fs");
// Function to count occurrences of the word "AMIT" in a file
function countWordInFile(filePath, word) {
    // Read the file content as a string
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }
        // Use a regular expression to find all occurrences of the word "AMIT"
        var regex = new RegExp("\\b".concat(word, "\\b"), 'g');
        var matches = data === null || data === void 0 ? void 0 : data.match(regex);
        // Count the number of occurrences
        var count = matches ? matches.length : 0;
        // Output the result
        console.log("The word \"".concat(word, "\" occurs ").concat(count, " times in the file."));
    });
}
// Call the function and provide the path to your file and the word to search for
var filePath = 'amit.txt'; // Replace with the path to your text file
var wordToSearch = 'AMIT'; // The word you want to count
countWordInFile(filePath, wordToSearch);
