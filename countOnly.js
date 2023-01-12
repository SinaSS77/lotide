const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//takes in two arrays and returns true or false, based on a perfect match.
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
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

/***************** */
//will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = (array1, array2) => {
  eqArrays(array1, array2) ? console.log("Pass") : console.log("Fail");
};

/***************** */
//will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
const flatten = (array) => {
  let result = [];
  for (let item of array) {
    Array.isArray(item)
      ? item.forEach((element) => {
          result.push(element);
        })
      : result.push(item);
  }
  console.log(result);
};
//flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

/***************** */
// will take in an array and return the middle-most element(s) of the given array.
const middle = (array) => {
  let result = [];

  if (array.length > 2 && array.length % 2 === 0)
    result.push(array[array.length / 2 - 1], array[array.length / 2]);
  else if (array.length > 2 && array.length % 2 !== 0)
    result.push(array[(array.length - 1) / 2]);
  console.log(result);
};
// middle([1]);
// middle([1, 2]);
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]


/***************** */
//take in a collection of items and return counts for a specific subset of those items.

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let resultObject = {};
  // first we need to itarate in Object
  for (let item in itemsToCount) {
    let container = 0;
    // if value of key's are true it must go to check array to count them
    if (itemsToCount[item] === true) {
      //now, lets iterate on our array to count similar items and save them in a container
      allItems.forEach((element) => {
        if (element === item) {
          container++;
        }
      });
    }
    //if container is grater than 0 means we have it in the array and will push it in our object
    if (container > 0) {
      resultObject[item] = container;
    }
  }
  return resultObject;
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);