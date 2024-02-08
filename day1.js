const fun = (val, fn) => {
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log(`im id number ${val}`)
                resolve("success")
                if (fn) fn()
                
            }, 2000)
          
        })
    
}

(async function x (){
    await fun(1)
    await fun(3)
})()