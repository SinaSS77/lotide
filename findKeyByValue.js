
const findKeyByValue = function (anyObject, anyValue) {
  let result;
  for (let item in anyObject) {
    if (anyValue === anyObject[item]) {
      result = item;
    }
  }
  console.log(result);
  return result;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
