/**
 * Returns a new string with the characters of `word` shuffled.
 * Example: "hello" → "lohel" (any permutation except identical)
 * @param {string} word
 * @returns {string}
 */
function scrambleWord(word) {
  /** Fisher–Yates shuffle */
  const chars = [...word];
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  const scrambled = chars.join("");
  // Ensure it isn't identical (will crash if words are repeated)
  return scrambled === word ? scrambleWord(word) : scrambled;
}

/**
 * Checks if `guess` matches the original `word` (case‑insensitive).
 * @param {string} word
 * @param {string} guess
 * @returns {boolean}
 */
function isCorrect(word, guess) {
  return word.trim().toLowerCase() === guess.trim().toLowerCase();
}

module.exports = { scrambleWord, isCorrect };
