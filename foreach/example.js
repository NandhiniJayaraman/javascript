a=[2,3,4,5,6]
// step 1
function print(e){
    console.log(e)
}
//  step2
console.log(a.forEach(print))
// step 3 anonyms function
a.forEach(function(e){
    console.log(e)
})
// step 4 arrow function
a.forEach(e=>console.log(e))
//  step 5
print=function(e){
    console.log(e)
}
a.forEach(print)