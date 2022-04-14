class Solution:
    def climbStairs(self, n: int) -> int:
        one, two = 1, 1

        for i in range(n + 1):
            print(i, "one={:^4}".format(one), "two={:^4}".format(two))
            temp = one
            one = one + two
            two = temp

        return one

print(Solution.climbStairs(1, 15))
