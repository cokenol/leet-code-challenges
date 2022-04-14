# Runtime: 125 ms, faster than 97.01% of Python3 online submissions for Two Sum II - Input Array Is Sorted.
# Memory Usage: 15 MB, less than 45.80% of Python3 online submissions for Two Sum II - Input Array Is Sorted.

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers) - 1

        while l < r:
            curSum = numbers[l] + numbers[r]

            if curSum > target:
                r -= 1
            elif curSum < target:
                l += 1
            else:
                return [l + 1, r + 1]
