const eqArrays = require('./eqArrays');
// const assertEquals = require('./assertEqual');
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

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject, anotherShirtObject); // => true
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEquals(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = {
//   size: "medium",
//   color: "red",
//   sleeveLength: "long",
// };
// eqObjects(shirtObject, longSleeveShirtObject); // => false
// assertEquals(eqObjects(shirtObject, longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
// assertEquals(
//   eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
//   true
// ); // => true

// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };
// eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
