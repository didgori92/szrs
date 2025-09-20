number = int(input("insert a number: "))
number2 = int(input("insert another number: "))
action = input("what action you want to perform: ")

if action == "plus":
    print(number + number2)
elif action == "minus":
    print(number - number2)
elif action == "multiply":
    print(number * number2)
elif action == "divide":
    print(number // number2)