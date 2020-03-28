const NumbersValidator = require('../../app/numbers_validator');

describe(`isNumberEven positive scenarios`, function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  test('should return true if number is even', function() {
    expect(validator.isNumberEven(4)).toBeTruthy();
  });

  test('should return false if number is even', function() {
    expect(validator.isNumberEven(5)).toBeFalsy();
  });
});
