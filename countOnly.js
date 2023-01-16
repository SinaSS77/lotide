
/***************** */
//take in a collection of items and return counts for a specific subset of those items.

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
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

module.exports = countOnly;
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