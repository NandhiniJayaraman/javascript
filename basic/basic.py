a=[2,3,4,5]
b=[5,6,7,8]
temp=[]
for i in range(0,len(a)):
    c=a[i]+b[i]
    temp.append(c)
print(temp)
# check the letter y
a='nandhini my friend'
found=False
for i in a:
    if(i=='y'):
        found=True
if(found==False):
    print('No')
else:
    print('Yes')  
    # password generete
n=8188
for i in range(0,4):
    n1=int(input('enter the 4 digit number:'))
    if(n==n1):
        print('the pin is correct')
        break
    else:
        print('the pin is incorrect')
else:
    print('your chance is finish') 
    # palindrome
a=input('enter the string')
b=''
for i in range(len(a)-1,-1,-1):
    b=b+a[i]
if(a==b):
    print('palindrome')
else:
    print('not a palindrome')               