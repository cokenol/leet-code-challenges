class Solution:
    def twoSum(self, nums, target: int):
        seen = {}

        for i in range(len(nums)):
            if (target - nums[i]) in seen:
                return [seen[target - nums[i]], i]
            else:
                seen[nums[i]] = i


print(Solution.twoSum("", [2,7,11,15], 9))
# print(Solution.twoSum("", [3,3], 6))
