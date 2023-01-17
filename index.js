const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const asserObjectEqual = require('./assertObjectsEqual.js');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObject = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head   = require('./head');
const letterPosition = require('./letterPosition');
const map = require('./map');
const middle = require('./middle');
const tail   = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');



module.exports = {
  assertArraysEqual,
  assertEqual,
  asserObjectEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObject,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPosition,
  map,
  middle,
  tail,
  takeUntil,
  without
};

// * `function1(assertArraysEqual)`: to compare two arrays for equality based on the eqArrays.js
// * `function2(assertEqual)`: only a function to compare equality
// * `function3(asserObjectEqual)`: to compare two objects for equality
// * `function3(countLetters)`: A function that counts all the letters in a text
// * `function3(countOnly)`: take in a collection of items and return counts for a specific subset of those items
// * `function3(eqArrays)`: To compare the equality of two arrays based on the correctness required in the function
// * `function3(eqObject)`: to compare two objects for equality
// * `function3(findKey)`: return the first key with the requested value
// * `function3(findKeyByValue)`: it will find a key in an object by iterating through values
// * `function3(flatten)`: for getting an Array include different datas and output a flat Array
// * `function3(head)`: a function to return the very first item of an array
// * `function3(letterPosition)`: it will return an object includs array of positions of letters in a sentence
// * `function3(map)`: only like map
// * `function3(middle)`: to return best middle item(s) of an array
// * `function3(tail)`: a function to return all items in an array but the very first one
// * `function3(takeUntil)`: it will return a part af Array from first to what is asked for
// * `function3(without)`: will compare two arrays and return a subArray
