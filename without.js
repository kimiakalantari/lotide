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

const without = function(source, itemsToRemove) {
  let arr = [];
  for (let i = 0; i < source.length; i++) {
    arr.push(source[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (arr[i] === itemsToRemove[j]) { //compare each member of arr1 with every member of arr2
        arr.splice(i,1);
      }
    }
  }
  return arr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

module.exports = without;