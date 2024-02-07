fun = (val) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`data ${val}`)
            resolve()
        },3000)
    })
}
 
async function d (){
    await fun(1);
    await fun(2);
    await fun(3);
}
d()