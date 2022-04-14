# Runtime: 120 ms, faster than 99.75% of Python3 online submissions for Two Sum II - Input Array Is Sorted.
# Memory Usage: 15.1 MB, less than 7.75% of Python3 online submissions for Two Sum II - Input Array Is Sorted.

class Solution:
    def twoSum(self, numbers , target: int):
        checked = {numbers[0]: 1}
        for i in range(1, len(numbers)):
            if (target - numbers[i]) in checked:
                return [checked[target - numbers[i]], i + 1]
            else:
                checked[numbers[i]] = i + 1

print(Solution.twoSum(1, [2,7,11,15], 9))
