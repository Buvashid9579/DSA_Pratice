# counting the number of digits in a number

# num = int(input("Enter a number: "))
# while(num > 0):
#     count += 1 
#    num = num // 10 

#print("Number of digits: ", count)

from math import *

def countDigits(n):
    return int(log10(n) + 1)

n = int(input("Enter a number: "))
print("Number of digits: ", countDigits(n))
