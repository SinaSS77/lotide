

const map = function (array, callback) {
  const result = [];
  
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, (word) => word[0]);
// console.log(results1);

// const expectedLetters = ['g', 'c', 't', 'm', 't'];

// const numbers = [1,2,3,4,5];
// const expectedNumbers = [2,4,6,8,10];
// const results2 = map(numbers, (number) => number * 2);

// assertArraysEqual(results1, expectedLetters);
// assertArraysEqual(results2, expectedNumbers);
