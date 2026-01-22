ticket = 10
tickets_wanted = int(input("how many tickets do you want to buy: "))



if tickets_wanted < 5:
    print(ticket * tickets_wanted )
else:
    print(int(ticket * tickets_wanted * 0.7))