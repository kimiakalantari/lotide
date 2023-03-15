const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;