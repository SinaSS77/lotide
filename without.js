// to compare two arrays for equality
const eqArrays = (array1, array2) => {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// to log in console after comparing
const assertArraysEqual = (array1, array2) => {
  eqArrays(array1, array2) ? console.log("Pass") : console.log("Fail");
};

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

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
