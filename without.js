
// a function to return a subset of a given array, removing unwanted elements.
const without = (array1, array2) => {
  let resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      resultArray.push(array1[i]);
    }
  }
  return resultArray;
};

module.exports = without;
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
