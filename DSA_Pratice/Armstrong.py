n = int(input())
Num = n
total = 0 
nod = len(str(n))
while(Num > 0):
    rem = Num % 10
    total = total + rem ** nod
    Num = Num // 10

if(total == n):
    print("Armstrong Number")
else:
    print("Not an Armstrong Number")