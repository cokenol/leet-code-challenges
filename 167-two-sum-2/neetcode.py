# Runtime: 136 ms, faster than 87.45% of Python3 online submissions for Two Sum II - Input Array Is Sorted.
# Memory Usage: 14.8 MB, less than 91.22% of Python3 online submissions for Two Sum II - Input Array Is Sorted.

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
