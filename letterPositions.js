const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(arr1, arr2){
  let answer = true
  if (arr1.length !== arr2.length) {
    answer = false 
  } 
  for (let i = 0; i<arr1.length ; i++){
    if (arr1[i] !== arr2[i]){
      answer = false
    }
  }
    return (answer ? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`))
}

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let letter of sentence){
    if (results[letter]){
      results[letter].push(sentence.indexOf(letter));
    }
    else {
      results[letter] = [sentence.indexOf(letter)];
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);