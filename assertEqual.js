// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //check to see if two values are the same
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
