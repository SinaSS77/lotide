

const letterPositions = function(anyString) {
  let arrayString = anyString.split("");
  let resultObject = {};
  for (let letter of anyString) {
    if (!resultObject.hasOwnProperty(letter) && letter !== " ") {
      let container = [];
      // arrayString.forEach((element) => {
      for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i] === letter) {
          container.push(i);
        }
      }
      resultObject[letter] = container;
    }
  }
  console.log(resultObject);
  return resultObject;
};


module.exports = letterPositions;

// let test = letterPositions("lighthouse in the house");

// let expected = {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12],
// };

// console.log(eqArrays(expected.h , test.h));
