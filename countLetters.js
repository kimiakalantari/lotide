const assertEqual = function(actual, expected) {
  //copy of assertEqual fn
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  let result = {};
  const wordNoSpace = word.replaceAll(' ', ''); //remove space

  for (let letter of wordNoSpace) {
    if (result[letter]) { //add one to the value of the key of that letter
      result[letter] += 1;
    } else { //create the key of that letter
      result[letter] = 1;
    }
  }
  return result;
};

const test = 'lighthouse in the house';
console.log(countLetters(test));