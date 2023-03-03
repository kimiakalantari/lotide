const eqArrays = function(arr1, arr2) {
  //copy of eqArray fn
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

const eqObjects = function(object1, object2) {
  let result = true;
  //check if same lenght
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return result = false;
  }
  for (let item of Object.keys(object1)) {
    //check to see if if object 2 has the same key
    if (object2[item]) {
      //check to see if value is array
      if (Array.isArray(object1[item])) {
        result = eqArrays(object1[item], object2[item]);
      } else if (object1[item] !== object2[item]) {
        //check values of the key
        result = false;
      }
    } else {
      result = false;
    }
  }
  return result;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  let answer2 = eqObjects(actual,  expected);
  return (answer2 ? console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
};

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
assertObjectsEqual(ab,ba);

const cd = {c: '1', d: ['2','3']};
const dc = {d: ['2','3'], c:'1'};
assertObjectsEqual(cd,dc);

const cd2 = {c:'1', d: ['2', 3, 4]};
assertObjectsEqual(cd,cd2);