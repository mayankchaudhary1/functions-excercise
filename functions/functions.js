/**
 * Author: Mayank Chaudhary
 * Date: June 17, 2020
 */

// This function returns a random number between (and including both) minimum and maximum
function getRandomInteger(minimum, maximum) {
  minimum = Math.ceil(minimum); // minimum is inclusive
  maximum = Math.floor(maximum + 1); // maximum is exclusive so we add one
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

// Povided Arrays
const nouns = [
  "cheese", "strawberry", "chocolate", "honey", "milk", "chips", "jam", "cereal", "mustard", "ketchup",
];

const verbs = ["walked", "ran", "jumped", "played", "fly", "worked", "tried", "felt", "asked", "took"];

const adverbs = ["menacingly", "intentionally", "never", "often", "usually", "generally", "away", "always", "later", "there"];

const adjectives = ["wild", "slippery", "acidic", "adorable", "amused", "dull", "ecstatic", "elated", "cruel", "bored"];

const proNouns = ["they", "we", "you", "he", "she", "I", "it"];

const openings = ["Once upon a time", "I watched", "One night", "One morning", "One afternoon", "One evening", "I ate", "I was eating", "One day", "On a sunny afternoon"];

const closings = ["with extra cheese", "the end", "at last", "before going home", "before going outside", "before leaving for vacations", "before going to play soccer", "before playing games", "with extra ketchup", "with extra spices"];

function createRandomSentence() {
  const randomSentence =
    openings[getRandomInteger(0, openings.length - 1)] +
    " " +
    adjectives[getRandomInteger(0, adjectives.length - 1)] +
    " " +
    nouns[getRandomInteger(0, adjectives.length - 1)] +
    " " +
    proNouns[getRandomInteger(0, adjectives.length - 1)] +
    " " +
    verbs[getRandomInteger(0, adjectives.length - 1)] +
    " " +
    adverbs[getRandomInteger(0, adjectives.length - 1)] +
    ", " +
    closings[getRandomInteger(0, adjectives.length - 1)] +
    ".";

  return randomSentence;
}

function outputSentence(sentence) {
  console.log("\n");
  console.log(sentence);
  console.log("\n");
}

const numberOfSentences = 10;

for (let i = 0; i < numberOfSentences; i++) {
  let randomSentence = createRandomSentence();
  outputSentence(randomSentence);
}