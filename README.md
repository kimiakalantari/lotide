# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kimiakalantari/lotide`

**Require it:**

`const _ = require('@kimiakalantari/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: comparing the actual and expected values, print out message to show if they are same or not
* `assertArraysEqal(arr1, arr2)`: comparing arr1 and arr2, print out message to show if they are same or not
* `assertObjectsEqual(object1, object2)`: comparing object1 and object2, print out message to show if they are same or not
* `eqArrays(actual, expected)`: returns true if arr1 has same elements as arr2, otherwise, return false
* `eqObjects(actual, expected)`: returns true if object1 has same properties as object2, otherwise, return false
* `countLetters(string)`: return an object with the occurance of each letter
* `countOnly(allItems, itemsToCount)`: returns an object that count the items from allItems if it exists in itemsToCount with a true value
* `findKey(object, callback)`: return the key that has a value satisfying the call back function
* `findKeyByValue(object, value)`: return the key by value
* `head(array)`: returns the head of array
* `middle(array)`: returns middle of array
* `tail(array)`: returns tail ofr array
* `flatten(array)`: returns the flattened the array
* `map(array, callback)`: returns an array that satisfies the callback function
* `letterPositions(string)`: returns an array of the position(s) of input letter(s)
* `takeUntil(array, callback)`: returns an array that contains all elements before the callback function is satisfied
* `without(source, itemToRemove)`: returns an array of source without the elements itemToRemove