// const assertEquals = require('./assertEqual');

const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let item in object1) {
    if (Array.isArray(object1[item])) {
      let equality = eqArrays(object1[item], object2[item]);
      if (!equality) {
        return false;
      }
    } else {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

// // FUNCTION IMPLEMENTATION
// const assertObjectsEqual = function (actual, expected) {
//   const inspect = require('util').inspect;
//   // console.log(`Example label: ${inspect(actual)}`);
//   if (eqObjects(actual, expected)) {
//     console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
//   }
// };

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
