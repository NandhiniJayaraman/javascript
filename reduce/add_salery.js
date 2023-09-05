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
sal1=users.reduce((a,b)=>{
    // console.log(a)
    return a+b.sal
    
},0)
console.log(sal1)
