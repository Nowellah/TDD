import factorial from '../factorial.js';
import assert from 'assert';
import { describe, it } from 'mocha';

describe("factorial", () => {
    it("should return 1 for 0! and 1!", () => {
        assert.strictEqual(factorial(0), 1);
        assert.strictEqual(factorial(1), 1);
    });

    it("should return the correct factorial for positive numbers", () => {
        assert.strictEqual(factorial(2), 2);
        assert.strictEqual(factorial(3), 6);
        assert.strictEqual(factorial(4), 24);
    });

    it("should return undefined for negative numbers", () => {
        assert.strictEqual(factorial(-1), undefined);
        assert.strictEqual(factorial(-5), undefined);
    });
});
