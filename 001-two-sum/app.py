# Runtime: 1009 ms, faster than 33.00% of Python3 online submissions for Two Sum.
# Memory Usage: 15 MB, less than 77.57% of Python3 online submissions for Two Sum.

class Solution:
    def twoSum(self, nums, target: int):
        for i in range(0,len(nums) - 1):
            find = target - nums[i]
            if find in nums:
                first = i
                for j in range(1,len(nums)):
                    if find == nums[-j]:
                        second = len(nums) - j
                        if first != second:
                            return [first, second]

print(Solution.twoSum("", [2,7,11,15], 9))
print(Solution.twoSum("", [3,3], 6))
