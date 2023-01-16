const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const asserObjectEqual = require('./assertObjectsEqual.js');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObject = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head   = require('./head');
const letterPosition = require('./letterPosition');
const map = require('./map');
const middle = require('./middle');
const tail   = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');



module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  asserObjectEqual: asserObjectEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObject: eqObject,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  head:   head,
  letterPosition: letterPosition,
  map: map,
  middle: middle,
  tail:   tail,
  takeUntil: takeUntil,
  without: without
};