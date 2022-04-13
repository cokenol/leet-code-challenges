# Runtime: 55 ms, faster than 76.29% of Python3 online submissions for Valid Anagram.
# Memory Usage: 14.4 MB, less than 97.36% of Python3 online submissions for Valid Anagram.


def validAnagram(n):
    if len(n[0]) != len(n[1]):
        return False
    obj = {}
    for letter in n[0]:
        if letter in obj:
            obj[letter] += 1
        else:
            obj[letter] = 1
    for letter in n[1]:
        if letter in obj:
            obj[letter] -= 1
            if obj[letter] < 0:
                return False
        else:
            return False
    return True

arr = [
    ["anagram", "nagaram"],
    ["cat", "car"],
    ["aacc","ccac"]
    ]

for a in arr:
    print(a, validAnagram(a))
