import pprint
def fizzBuzz(n):
    result = []
    for i in range(1, n+1):
        result.append("")
        if i % 3 != 0 and i % 5 != 0:
            result[i - 1] = i
        else:
            if i % 3 == 0:
                result[i - 1] += "Fizz"
            if i % 5 == 0:
                result[i - 1] += "Buzz"
    return result

pprint.pprint(fizzBuzz(15))
