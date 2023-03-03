const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
const findKeyByValue = function(obj, name) {
  for (let key in obj) {
    if (obj[key] === name) {
      return key;
    }
  }
  return undefined;
};
*/

const findKeyByValue = function(obj, name) {
  for (let key of Object.keys(obj)) { //check to see if the given obj has the given key
    if (obj[key] === name) {
      return key;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");