a=[9,4,5,6,8]
temp=[]
k=0
for(i=a.length-1;i>=0;i--){
    // console.log(a[i])
    temp[k]=a[i]
    k++
}
console.log('reverse order',temp)