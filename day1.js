fun = (val)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Data ${val}`)
            resolve("success")
        }, 2000);
    })
}
fun(1).then((res)=>{
   return fun(2)
}).then((res)=>{
    console.log(res)
})