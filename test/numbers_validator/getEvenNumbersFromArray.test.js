/* eslint-disable max-len */
const NumbersValidator = require('../../app/numbers_validator');

describe(`getEvenNumbersFromArray`, function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  test(`should return an array of even numbers when provided with proper data`, function() {
    const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).toEqual([2, 12, 32, 10]);
  });
});
