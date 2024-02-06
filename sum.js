let text = "hello from sum"
 let k  = (...a)=>{
    let sum = 0
    for(let i of a)sum+=i
    return sum
}
let settxt = (val)=>{
    return text = val
}

export {k,text,settxt}