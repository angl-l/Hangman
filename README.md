# Hangman

Hangman is a hangman game website where the user can attempt to guess a secret word. This is a Spanish-speaking countries edition. So the word is a Spanish-speaking country. The user has 6 attempts at guessing the letters. If a letter is entered twice, the user will have another chance to enter a different letter. If the user guesses correctly, a popup will confirm this and they will be able to restart the game. If the user loses, a popup will reveal the correct answer and they will be able to restart the game.

## Installation
1. Clone the repository into your local computer
2. Unzip folder and extract files
3. Make sure your local machine has the latest version of node.js, for more information click <a href="https://nodejs.org/en/download/">here</a>
3. Open your command line and follow the steps below:

```command line
cd [directory] 
npm start
```

## Usage

```javascript
//generates random word from country word array for user to guess
let selectedWord = words[Math.floor(Math.random() * words.length)];

```
