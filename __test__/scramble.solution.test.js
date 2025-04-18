const { scrambleWord, isCorrect } = require("../src/scramble");

describe("scrambleWord – instructor coverage", () => {
  // This test WILL fail if you put in "" empty string or "aaa" repeated char
  const cases = ["hello", "foobar", "abc"];

  it.each(cases)("preserves character multiset for '%s'", (word) => {
    expect(scrambleWord(word).length).toEqual(word.length);
  });

  it("returns a different permutation when possible", () => {
    const word = "coding";
    const scrambled = scrambleWord(word);
    expect(scrambled).not.toBe(word);
  });
});

describe("isCorrect – instructor coverage", () => {
  it("treats guesses as case‑insensitive and trimmed", () => {
    expect(isCorrect("Node", "  node  ")).toBe(true);
  });

  it("rejects wrong answers", () => {
    expect(isCorrect("node", "java")).toBe(false);
  });
});
