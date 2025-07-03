
print("Hello, World!")


# variables
print("example of variables")
kuldeep="engineer"  
print(kuldeep)

# data types
print("example of data types")
# int   
a=10
print(a)
# float
print("example of float")
b=10.5
print(b)
# string
print("example of string")
c="kuldeep"
print(c)
# list
print("example of list")
d=[1,2,3,4,5]
print(d)
# dictionary
print("example of dictionary")
f={"name":"kuldeep","age":20}
print(f)
# tuple
print("example of tuple")
e=(1,2,3,4,5)
print(e)
# boolean
print("example of boolean")
e=True
print(e)
#f-string
print("example of f-string")
name="kuldeep"
age=20
print(f"my name is {name} and my age is {age}")

# comments
# single line comment
# multi line comment
"""
this is a multi line comment
ashjdlhajklshdkljhaklsjd
ajklshdkjhasjklhljk
"""

# operators
# arithmetic operators
print("example of arithmetic operators")
a=10
b=20
print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a%b)
print(a**b)
print(a//b)

# assignment operators
# comparison operators
print("example of comparison operators")
a=10
b=20
print(a==b)
print(a!=b)
print(a>b)
print(a<b)
print(a>=b)
print(a<=b)

# logical operators
print("example of logical operators")
a=True
b=False
print(a and b) # &
print(a or b) # ||
print(not a) # ~

# control flow
# if statement
if a>b:
    print("a is greater than b")
elif a==b:
    print("a is equal to b")
else:
    print("b is greater than a")

# for loop
print("example of for loop")

"""
for(i=0;i<10;i++){
    print(i)
}
"""
for i in range(10):
    print(i)

# while loop
print("example of while loop")
while a<b:
    print(a)
    a+=1
# functions
print("example of functions")
def add(a,b):
    return a+b
print(add(10,20))

# classes
class Person:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def display(self):
        print(f"my name is {self.name} and my age is {self.age}")

person=Person("kuldeep",20)
person.display()