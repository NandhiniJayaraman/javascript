a='nandhinijayaraman'
result=''
for(i=0;i<a.length;i++){
    if(i%2==1){
        result=result+'Z'
    }
    else{
        result=result+a[i]
    }
}
console.log(result)
// using foreac
a='nandhinijayaram'
charArray=a.split("")
charArray.forEach((e,index)=>{
    if(index %2==1){
        charArray[index]='Z'
    }
})
str=charArray.join("")
console.log(str)