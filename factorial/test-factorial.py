from factorial import factorial
import unittest

def test_factorial_positive():
    assert factorial(5) == 120
    assert factorial(3) == 6

def test_factorial_zero():
    assert factorial(0) == 1

def test_factorial_one():
    assert factorial(1) == 1

def test_factorial_negative():
    try:
        factorial(-1)
    except ValueError as e:
        assert str(e) == "Factorial is not defined for negative numbers."
    else:
        assert False, "Expected ValueError for negative input"

