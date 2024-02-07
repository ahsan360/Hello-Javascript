getNum = (id,nxtNum)=>{
    setTimeout(() => {
        console.log(` ${id}`)
        if(nxtNum) {
            nxtNum()
        }
    
    }, 2000)
   
}

getNum("hey mushahid", ()=>{
    getNum("tell me about your trusty",()=>{
        getNum("are you going to marry her",()=>{
            getNum("if yes then okey we are going to arrange it thank you")
        })
    })
})