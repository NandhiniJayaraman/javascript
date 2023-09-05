a=[{'quan':3,'price':200},
{'quan':5,'price':500},
{'quan':6,'price':100},
{'quan':4,'price':800},
]
b=a.reduce((acc,{quan,price})=>{
    return acc+quan*price
},0)
console.log(b)