const eqArrays = require('./eqArrays');

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

module.exports = assertArraysEqual;