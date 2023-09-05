a=[4,5,6,7,8]
b=[3,4,5,6,7]
temp=[]
k=0
if(a.length==b.length){
    for(i=0;i<a.length;i++){
        c=a[i]+b[i]
        temp[k]=c
        k++
    }
}
console.log('added two array:',temp)
// using foreach
sumarray=[]
a.forEach((e,index)=>{
    a=e+b[index]
    sumarray.push(a)
})
console.log(sumarray)