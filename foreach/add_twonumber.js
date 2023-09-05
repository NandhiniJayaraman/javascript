a=[2,3,4,5]
b=[2,3,4,5]
let sum1=0
let sum2=0
sum_a=a.forEach(function add(n){
    sum1=sum1+n
})
sum_b=b.forEach(function add1(n1){
    sum2=sum2+n1
})
c=sum1+sum2
console.log('two array are added:',c)


