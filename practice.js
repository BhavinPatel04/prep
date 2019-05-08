/*
 * Find 1st non-repeating word in a stream
 *  - Conditions: fileSize
 */

function generateDict(string, wordDict) {
  const words = string.split(" ");
  words.forEach((word, index) => {
    const wordPosition = wordDict.size + index + 1;
    const wordInfo = wordDict.get(word);
    if(wordInfo) {
      wordInfo[1]++;
    } else {
      wordDict.set(word, [wordPosition, 1]);
    }
  });
  return wordDict;
}

function filterWordDict(wordDict) {
  for(const [word, info] of wordDict) {
    if(info[1] > 1) wordDict.delete(word);
  }
  return wordDict;
};

function sortWordDict(wordDict) {
  return new Map([...wordDict.entries()].sort((a, b) => a[1][1] - b[1][1]));
};

function findFirstNotRepeatedWord(string) {
  let wordDict = new Map();
  wordDict = generateDict(string, wordDict);
  wordDict = filterWordDict(wordDict);
  wordDict = sortWordDict(wordDict);
  return wordDict.keys().next().value;
}

const string = "blah blah blah cool";
console.log("First word is", findFirstNotRepeatedWord(string));
