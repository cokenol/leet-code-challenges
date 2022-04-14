# Runtime: 50 ms, faster than 98.26% of Python3 online submissions for Longest Substring Without Repeating Characters.
# Memory Usage: 14.1 MB, less than 53.86% of Python3 online submissions for Longest Substring Without Repeating Characters.
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # res = []
        checking = ""
        longest = 0
        for char in s:
            if char in checking:
                # res.append(checking)
                checking = checking[1:]
                while(char in checking):
                    checking = checking[1:]
            checking += char
            if longest < len(checking):
                longest = len(checking)
        return longest
arr = ["abcabcbb", "bbbbb", "pwwkew", "sadfsadfsadfsafdfdsasdfr"]
for s in arr:
    print(Solution.lengthOfLongestSubstring(1, s))
