// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  let answer = true;
  if (arr1.length !== arr2.length) {
    answer = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      answer = false;
    }
  }
  return answer;
};

const assertArraysEqual = function(arr1, arr2) {
  let answer2 = eqArrays(arr1,arr2);
  return (answer2 ? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`));
};

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

// TEST CODE
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);