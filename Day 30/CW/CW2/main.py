def number():
    num = int(input("Insert a number: "))
    if num > 10:
        print ("This number is bigger than 10")
    elif num == 10:
        print ("This number is equal to 10")
    else:
        print ("This number is less than 10")

number()