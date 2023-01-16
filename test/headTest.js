// const assertEqual = require('../assertEqual');
const head = require("../head");
const assert = require("chai").assert;

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 5);
describe("return the very first element of any array file", function () {
  let array1 = [5, 6, 7];
  let array2 = ["Hello", "Lighthouse", "Labs"];
  let array3 = [];
  it(`should return " 5 " for this `, () => {
    assert.strictEqual(head(array1), 5);
  });
  
  it(`should return " 3 " for this `, () => {
    assert.strictEqual(head([3]), 3);
  });

  it(`should return "Hello" for this`, () => {
    assert.strictEqual(head(array2), "Hello");
  });

  it(`should return "undefined" for this`, () => {
    assert.strictEqual(head(array3), undefined);
  });
});
