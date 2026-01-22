def password():
    user_password = input("Make a password ")
    length = len(user_password)
    if length == 8:
        print("the registration is finished!")
    else:
        user_password = input("Make a password ")

password()