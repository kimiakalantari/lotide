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

  /* AN OLDER OR WORSE VERSION
   let answer = false
    if (arr1.length === arr2.length){
      if (!arr1.length){
        answer = true
      } else {
        for (i = 0; i<arr1.length ; i++){
          if (arr1[i] !== arr2[i]) {
            answer = false
          } else {
            answer = true
          }
        }
      }
    }
    return (answer ? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`))
    */
};

//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);