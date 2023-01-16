// const assertArraysEqual = require('../assertArraysEqual');
const middle = require("../middle");
const assert = require("chai").assert;

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

describe("returning the best middle element(s) of an array with more than 2 elements", () => {
  it(`should return an empty array for this`, () => {
    assert.deepEqual(middle([1]), []);
  });
  it(`should return an empty array for this`, () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it(`should return an empty array for this`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it(`should return an empty array for this`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it(`should return an empty array for this`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`should return an empty array for this`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  // it(`should return "undefined" for this`, () => {
  //   assert.strictEqual(middle([]), undefined);
  // });
});
