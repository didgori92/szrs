password = "password123" 
guess = input("guess the password: ")

while guess != password:
    input("guess again: ")
    if guess == "password123":
        print("correct!")