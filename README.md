# Amit-Detector

## About This Project
Amit-Detector is a TypeScript tool that detects how many times the word **AMIT** is mentioned in TikTok comments. This tool is built to help identify and filter out spammy comments that excessively use the word "AMIT".

## Features
- **Word Detection**: Automatically detects the number of times the word "AMIT" is mentioned in a given comment.
- **Spam Filter**: Flags comments that contain the word "AMIT" more than a predefined threshold.
- **TikTok Integration**: Integrates with TikTok to automatically filter spam comments.
- **Frequency Count**: Displays how many times the word "AMIT" appears in a comment.

## Project Structure
```
📂 amit-detector  
 ┣ 📂 src  
 ┃ ┣ 📜 detector.ts  # Main file for processing TikTok comments  
 ┃ ┣ 📜 utils.ts  # Helper functions for detecting the word "AMIT"  
 ┣ 📜 package.json  # Project dependencies  
 ┣ 📜 tsconfig.json  # TypeScript configuration  
```
```

## How to Run
1. Clone this repository:
   ```
   git clone <REPO_URL>
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Compile TypeScript files:
   ```
   npx tsc
   ```
4. Run the detector:
   ```
   node dist/detector.js
   ```

## Technologies Used
- **TypeScript**
- **Regular Expressions** (for word detection)
- **TikTok API** (for comment integration, if available)

## Usage Example
- Input: `"This is an AMIT comment. AMIT is everywhere, AMIT!"`  
- Output: `The word "AMIT" appeared 4 times in this comment.`

Let's clean up TikTok comments and reduce the spam! 🚫🎮
