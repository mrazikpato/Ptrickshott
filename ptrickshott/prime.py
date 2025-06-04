"""Prime number utilities for Ptrickshott."""

from math import isqrt


def is_prime(n: int) -> bool:
    """Return True if n is a prime number, else False.

    Parameters
    ----------
    n : int
        The number to check for primality. Must be >= 0.
    """
    if n < 2:
        return False
    if n in (2, 3):
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    limit = isqrt(n)
    i = 5
    step = 2
    while i <= limit:
        if n % i == 0:
            return False
        i += step
        step = 6 - step
    return True


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Check if a number is prime")
    parser.add_argument("number", type=int, help="The number to check")
    args = parser.parse_args()

    if is_prime(args.number):
        print(f"{args.number} is prime")
    else:
        print(f"{args.number} is not prime")
