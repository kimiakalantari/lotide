// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  /*
  if (arr1.length === arr2.length){
    if (!arr1.length){
      return true
    } else {
      for (i = 0; i<arr1.length ; i++){
        if (arr1[i] !== arr2[i]) {
          return false
        }
      }
      return true
    }
  }
  */

  let answer = true;
  if (arr1.length !== arr2.length) { //compare lengths
    answer = false;
  }
  for (let i = 0; i < arr1.length; i++) { //compare each member
    if (arr1[i] !== arr2[i]) {
      answer = false;
    }
  }
  return answer;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL