# Runtime: 49 ms, faster than 83.71% of Python3 online submissions for Valid Palindrome.
# Memory Usage: 14.3 MB, less than 88.17% of Python3 online submissions for Valid Palindrome.

class Solution:
    def isPalindrome(self, s: str) -> bool:
        res = ""
        for char in s:
            if char.isalnum():
                res += char
        return res[::-1].casefold() == res.casefold()

print(Solution.isPalindrome(1, "A man, a plan, a canal: Panama"))
