// Import the Fibonacci function from the source file
import fibonacci from '../fibonacci.js';

// Use Node's built-in assertion library for test validation
import assert from 'assert';

// Import Mocha's test structure helpers
import { describe, it } from 'mocha';

// Group all Fibonacci-related tests under one suite
describe("fibonacci", () => {

  // Test base case: F(0) should return 0
  it("should return 0 for fibonacci(0)", () => {
    assert.strictEqual(fibonacci(0), 0);
  });

  // Test base case: F(1) should return 1
  it("should return 1 for fibonacci(1)", () => {
    assert.strictEqual(fibonacci(1), 1);
  });

  // Test correctness for small positive integers
  it("should return correct values for small positive numbers", () => {
    assert.strictEqual(fibonacci(2), 1); // F(2) = 1
    assert.strictEqual(fibonacci(3), 2); // F(3) = 2
    assert.strictEqual(fibonacci(4), 3); // F(4) = 3
    assert.strictEqual(fibonacci(5), 5); // F(5) = 5
    assert.strictEqual(fibonacci(6), 8); // F(6) = 8
  });

  // Test edge case: negative input should return undefined
  it("should return undefined for negative input", () => {
    assert.strictEqual(fibonacci(-1), undefined);
    assert.strictEqual(fibonacci(-10), undefined);
  });
});