a=[2,3,4,5]
// normal function 
function even(e){
    if(e%2==0){
        return e
    }
}
a1=a.filter(even)
console.log(a1)
// anoynoms function
a2=a.filter(function(e){
    if(e%2==0){
        return e
    }
})
console.log(a2)
// even or odd arrow function
a3=a.filter(e=>e%2==0)
console.log(a3)
// assinging value
print=function(e){
    if(e%2==0){
        return e
    }
}
a4=a.filter(print)
console.log(a4)
// user={'id':1,'name':'nandhini','age':23,'sal':28000}
// function myfun({sal,name,age}){
//     console.log(sal,name,age)
// }
// myfun(user)

//  array of object
    users=[{'empid':1,
        'name':'nandhini',
        'age':22,
        'gender':'female',
        'sal':15000
    },
    {'empid':2,
        'name':'suriya',
        'age':21,
        'gender':'female',
        'sal':16000
    },
    {'empid':3,
        'name':'uma',
        'age':25,
        'gender':'female',
        'sal':45000
    },
    {'empid':4,
        'name':'kumar',
        'age':25,
        'gender':'male',
        'sal':35000
    },
    {'empid':5,
        'name':'dennis',
        'age':23,
        'gender':'male',
        'sal':25000
    }
]
a=users.reduce((a,{sal})=>a+sal,0)
console.log(a)
a=users.reduce((a,b)=>{
    return a+b.sal

},0)
console.log(a)
b=users.reduce((a,b)=>{
    if(b.gender=='female'){
    return a+b.sal
}

},0)
console.log(b)

