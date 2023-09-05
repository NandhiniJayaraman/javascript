a=[2,3,4,5,6,7]
total=a.reduce((m,n)=>{
    // console.log(m)
    // console.log(n)
    return m+n
})
console.log(total)
// anoynoms function
t=a.reduce(function(n,m){
    return n+m}
)