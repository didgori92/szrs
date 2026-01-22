name = input("insert your name: ")
age = input("insert your age: ")
future = input("how many years into the future would you like to go: ")
future_age = int(age) + int(future)

print("you would meet " + str(future_age) + " year old " + name)