# Runtime: 256 ms, faster than 26.38% of Python3 online submissions for Longest Repeating Character Replacement.
# Memory Usage: 13.8 MB, less than 94.48% of Python3 online submissions for Longest Repeating Character Replacement.

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
            if len(count.values()) > 1:
                while sum(sorted(count.values())[:-1]) > k:
                    if longest < len(checking) - 1:
                        longest = len(checking) - 1
                    count[checking[0]] -= 1
                    checking = checking[1:]
            # print(char, checking, count, longest)
        countTotal = sum(count.values())
        if longest < countTotal:
            return countTotal
        else:
            return longest



words = [["ABAB", 2],["AABABBA", 1],["ABAA", 0]]
for word in words:
    print(Solution.characterReplacement(1, word[0], word[1]))
