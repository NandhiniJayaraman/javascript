a=[4,3,2,3,4]
// step 1 normal function
function print(e){
    return(e*2)
}
newa=a.map(print)
console.log(newa)
// anonymns function 
newa1=a.map(function(e){
    return(e*3)
})
console.log(newa1)
// arrow function
newa2=a.map(e=>{
    return(e*4)
})
console.log(newa2)
// assigning function
print=function(e){
    return(e*3)
}
console.log(a.map(print))
// add and even
a2=a.map(e=>{
    if(e%2==0){
        return e
    }
})
console.log(a2)