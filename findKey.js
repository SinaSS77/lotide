
// a function that will be passed an object and a function. so will go to iterate through the object and will return the first key with the wanted value.

const findKey = (obj, callback) => {
  for (let item in obj)
    if (callback(obj[item]))
      return item;
};

module.exports = findKey;

// let output = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ); // => "noma"

// assertEquals(output, "noma");
