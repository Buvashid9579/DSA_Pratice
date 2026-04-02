Num = int(input("Enter a number:"))
result = []
for i in range(1, Num + 1):
    if Num % i == 0:
        result.append(i)

    print (result)