# for i in range(1, 13+1):
#     if i % 2 != 0:
#         print("{0:^15s}".format("*" * i))
   

def draw(i, n):
    print("{0:^45s}".format("*" * i))
    if i >= n:
        return
    draw(i + 2, n)
    print("{0:^45s}".format("*" * i))
    
draw(1, 20)
