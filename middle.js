const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

/***************** */
// will take in an array and return the middle-most element(s) of the given array.
const middle = function (arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    return [arr[Math.floor(arr.length / 2)]];
  } else {
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  }
};

module.exports = middle;
