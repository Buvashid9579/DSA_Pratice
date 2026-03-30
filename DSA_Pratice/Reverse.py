Num = int(input("Enter a number:")) 
while (Num > 0):
    last_digit = Num % 10
    print(last_digit)
    Num = Num // 10     