import sys
from pathlib import Path

# Ensure the package can be imported when running tests from the ``tests``
# directory.
sys.path.append(str(Path(__file__).resolve().parents[1]))

from ptrickshott.prime import is_prime


def test_small_primes():
    for p in [2, 3, 5, 7, 11]:
        assert is_prime(p)


def test_small_composites():
    for n in [0, 1, 4, 6, 8, 9, 10, 12]:
        assert not is_prime(n)


def test_large_prime():
    assert is_prime(101)


def test_large_composite():
    assert not is_prime(102)
