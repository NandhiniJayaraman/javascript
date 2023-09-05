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