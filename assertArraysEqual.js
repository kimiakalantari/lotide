const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let answer2 = eqArrays(arr1,arr2);
  //function to return a message depending on whether the result of eqarray is true or false
  return (answer2 ? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`));
};

module.exports = assertArraysEqual;