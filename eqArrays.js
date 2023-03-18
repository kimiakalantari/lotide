const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
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

module.exports = eqArrays;
