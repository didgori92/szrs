price = int(input("how much does the thing you want to buy cost? "))
budget = int(input("what is your budget? "))

if budget >= price:
    print("you have enough money")
else:
    print("yuo dont have enough money")