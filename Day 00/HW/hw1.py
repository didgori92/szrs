from turtle import *


#we want to paint a house

#step 1 draw a square

speed(30)
width(7)
color("purple")
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)

# end of square

# drawing a door

forward(70)
color("yellow")
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)


# roof

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


# windows
penup()
goto(20, 50)
pendown()
left(210)
width("3")
color("black")
forward(60)
right(90)
forward(30)
right(90)
forward(60)
right(90)
forward(30)

penup()
goto(180, 50)
pendown()
forward(30)
right(90)
forward(60)
right(90)
forward(30)
right(90)
forward(60)
right(90)




exitonclick()