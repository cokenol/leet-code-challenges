class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        half = 1
        print("nums:", nums, "target", target)
        if len(nums) == 1:
            if nums[0] == target:
                return 0
            else:
                return -1
        else:
            half = len(nums)//2

        if target == nums[half]:
            return (half)

        if target < nums[half]:
            answer = Solution.search(self, nums[:half], target)
        else:
            answer = Solution.search(self, nums[-half:], target)

        if answer < 0:
            return -1

        if target < nums[half]:
            return answer
        else:
            return half + (len(nums) % 2) + answer


nums = [-1,0,3,5,9,12]
target = 9
print(nums, Solution.search(1, nums, target), "\n")

nums = [-1,0,3,5,9,12]
target = 2
print(nums, Solution.search(1, nums, target), "\n")
nums = [5]
target = 5
print(nums, Solution.search(1, nums, target), "\n")

nums = [-1,0,5]
target = 5
print(nums, Solution.search(1, nums, target), "\n")
