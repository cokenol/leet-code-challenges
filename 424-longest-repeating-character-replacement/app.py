# Runtime: 127 ms, faster than 86.32% of Python3 online submissions for Longest Repeating Character Replacement.
# Memory Usage: 14 MB, less than 60.99% of Python3 online submissions for Longest Repeating Character Replacement.

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        checking = ""
        count = {}
        longest = 0
        for char in s:
            if char not in count:
                count[char] = 1
            else:
                count[char] += 1
            checking += char
            if len(checking) - max(count.values()) > k:
                count[checking[0]] -= 1
                checking = checking[1:]
            if longest < len(checking):
                longest = len(checking)
            print(char, checking, count, longest)
        return longest



words = [["ABAB", 2],["AABABBA", 1],["ABAA", 0]]
for word in words:
    print(Solution.characterReplacement(1, word[0], word[1]))
