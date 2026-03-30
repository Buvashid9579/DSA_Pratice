N = int(input())
num = N 
result = 0 

while(num > 0):
    last_digit = num % 10
    result = result * 10 + last_digit 
    num = num // 10 

if (N == result):
    print("Palindrome")
else:
    print("Not a Palindrome")