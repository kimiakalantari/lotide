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

const flatten = function(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        answer.push(arr[i][j]);
      }
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));