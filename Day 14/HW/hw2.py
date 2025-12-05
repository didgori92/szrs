i = 2
while i < 6:
    print(i)
    i+=1


age = int(input("whats your age? "))
while age < 17:
    print(age)
    age+=1


num = int(input("insert a number: "))
while num <= 30:
    if num % 5==0:
     print(num)
    num+=1


num2 = int(input("from what number do you want to print? "))
while num2 <= 90:
   print(num2)
   num2+=1


num3 = int(input("insert a number: "))
minus = int(input("how much do you wish to take off of it: "))
total = num3 - minus

while total < 60:
   print(total)
   total+=1
   