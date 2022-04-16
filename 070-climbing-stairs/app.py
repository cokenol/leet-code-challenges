class Solution:
    def climbStairs(self, n: int) -> int:

        return climbStairsRecur(n)

count = {0: 1, 1: 1, 2: 2, 3: 3}

def climbStairsRecur(n):
    if n in count:
        return count[n]

    value = climbStairsRecur(n - 2) + climbStairsRecur(n - 1)
    count[n] = value
    return value
