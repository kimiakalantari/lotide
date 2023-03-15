const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function(arr) {
  let answer = [];
  if (arr.length < 3) { //for arrays with no middle
    return answer;
  } else if (arr.length % 2 !== 0) {
    answer.push(arr[Math.floor(arr.length / 2)]); //to find the middle of arrays with odd length
  } else if (arr.length % 2 === 0) {
    answer.push(arr[(arr.length / 2) - 1], arr[arr.length / 2]); //to find middle of arrays with even length
  }
  return answer;
};

module.exports = middle;