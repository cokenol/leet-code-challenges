# Runtime: 82 ms, faster than 99.40% of Python3 online submissions for Longest Repeating Character Replacement.
# Memory Usage: 14 MB, less than 60.99% of Python3 online submissions for Longest Repeating Character Replacement.

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        checking = 0
        count = {}
        longest = 0
        maxf = 0
        l = 0
        for char in s:
            count[char] = 1 + count.get(char, 0)
            maxf = max(maxf, count[char])
            checking += 1
            if checking - maxf > k:
                count[s[l]] -= 1
                l += 1
                checking -= 1
            if longest < checking:
                longest = checking
        return longest



words = [["ABAB", 2],["AABABBA", 1],["ABAA", 0]]
for word in words:
    print(Solution.characterReplacement(1, word[0], word[1]))
