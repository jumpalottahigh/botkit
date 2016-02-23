var assert = require('assert');
var bothmath = require('../botmath.js');

describe('botmath', function() {
  describe('sum', function () {
    it('should return sum of 2 values', function () {
      assert.equal(-2, bothmath.sum(-2, 0));
	    assert.equal(1, bothmath.sum(-1, 2));
	    assert.equal(6.5, bothmath.sum(3.5, 3));
	    assert.equal(1337, bothmath.sum(1338.2, -1.2));
    });
	  it('should return NaN if both values are not numeric', function () {
		  assert.ok(isNaN(bothmath.sum(1335, 'a')));
	  });
  });

  describe('calculateFibonacciUpto', function () {
    it('should return an array of fibonacci numbers', function () {
      assert.deepEqual([1,1,2,3,5,8], bothmath.calculateFibonacciUpto(7));
      assert.deepEqual([1,1], bothmath.calculateFibonacciUpto(-2));
    });
    it('should return NaN if parameter is a string', function () {
      assert.ok(isNaN(bothmath.calculateFibonacciUpto('a')));
	  });
  });

  describe('isPrime', function () {
    it('should return true if number is prime', function () {
      assert.equal(true, bothmath.isPrime(7));
	     assert.equal(false, bothmath.isPrime(-1));
    });
	  it('should return false if parameter is a string', function () {
		  assert.equal(false, (bothmath.isPrime('a')));
	  });
  });

});
