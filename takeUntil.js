const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) { //loop through each item of array
    if (callback(item) === false) {
      results.push(item); //let callback fn perform on each item and push the result in a new array
    } else {
      break;
    }
  }
  return results;
};

//eqarray fn and assertarrayeq functions:

const eqArrays = function(arr1, arr2) {
  //function to compare if 2 arrays are the same
  let answer = true;
  //check lengths
  if (arr1.length !== arr2.length) {
    answer = false;
  }
  //compare each value by looping
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      answer = false;
    }
  }
  return answer;
};


const assertArraysEqual = function(arr1, arr2) {
  let answer2 = eqArrays(arr1,arr2);
  //function to return a message depending on whether the result of eqarray is true or false
  return (answer2 ? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`));
};


//TEST AND IMPLEMENT:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);