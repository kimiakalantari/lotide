const assertArraysEqual = function(arr1, arr2){
  let answer = true
  if (arr1.length !== arr2.length) {
    answer = false 
  } 
  for (let i = 0; i<arr1.length ; i++){
    if (arr1[i] !== arr2[i]){
      answer = false
    }
  }
    return (answer ? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`))

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
}

//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])