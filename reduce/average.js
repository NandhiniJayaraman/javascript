c=[3,4,5,6,7]
b=c.reduce((arr,e)=>{
    // c=a+e
    console.log(arr)
    console.log(e)
    return arr+e/c.length;
    // console.log(c)
    // console.log(avg)
},0);
console.log(b)
