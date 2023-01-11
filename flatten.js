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

const assertArraysEqual = (array1 , array2) => {
  (eqArrays(array1,array2)) ? console.log("Pass") : console.log("Fail");
};

const flatten = (array) => {
  let result = [];
  for (let item of array) {
    (Array.isArray(item))
      ? item.forEach((element) => {
        result.push(element);
      })
      : result.push(item);
  }
  console.log(result);
};


