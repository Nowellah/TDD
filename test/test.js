import assert from 'assert';
import { describe, it } from 'mocha';
import multiply from './multiply.js';

describe('multiply', () => {
    it('should return 1 when multiplying 1 and 1', () => {
        assert.strictEqual(multiply(1,1), 1);
    });
});

//test 2
describe('multiply function', () => {
    it('should return 4 when multiplying 2 and 2', () => {
        assert.strictEqual(multiply(2,2),4);
    });
});

//test 3
describe('multiply function', () => {
    it('should return 9 when multiplying 3 and 3', () => {
        assert.strictEqual(multiply(3, 3), 9);
    });
});

//test 4
describe('multiply function', () => {
    it('should return 16 when multiplying 4 and 4', () => {
        assert.strictEqual(multiply(4, 4), 16);
    });
});

//test 5
describe('multiply function', () => {
    it('should return 1035 when multiplying 23 and 45', () => {
        assert.strictEqual(multiply(23, 45), 1035);
    });
});