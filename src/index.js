#!/usr/bin/env node
const inquirer = require("@inquirer/prompts");
const { scrambleWord, isCorrect } = require("./scramble");
const WORDS = [
  "javascript",
  "node",
  "react",
  "async",
  "promise",
  "callback",
  "jest",
  "github",
];

async function playRound(word) {
  const scrambled = scrambleWord(word);
  const guess = await inquirer.input({
    message: `Unscramble → ${scrambled}`,
  });
  const correct = isCorrect(word, guess);
  console.log(correct ? "✅  Correct!" : `❌  Oops! The word was \"${word}\"`);
  return correct;
}

async function main() {
  console.clear();
  console.log("✨  Welcome to **Word Scramble CLI**!  ✨");
  let score = 0;
  const rounds = 5;
  for (let i = 0; i < rounds; i++) {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    if (await playRound(word)) score++;
  }
  console.log(`🏁  Game over! You scored ${score}/${rounds}.`);
}

// Start the game
main();
