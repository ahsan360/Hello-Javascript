margsort = (arr) =>{
    if(arr.length<=1)return arr
    let mid = Math.floor(arr.length/2);
    let l = arr.slice(0,mid);
    let r = arr.slice(mid)
    return merg(margsort(l),margsort(r))
}
merg = (left,right)=>{
    let idl = 0
    let idr = 0
    let res = []
    while(idl<left.length && idr<right.length){
        if(left[idl]<right[idr])res.push(left[idl++]);
        else res.push(right[idr++])
    }
    return res.concat(left.slice(idl)).concat(right.slice(idr))
} 
arr = [5,9,2,5,7,2,1,6]
console.log(margsort(arr))



/**
Explain the difference between primitive and non-primitive data types in JavaScript
Ans : primitive means aged data type like string ,variable ,number etc and non primitve means
Object like array type ;

What is the difference between == and === operators in JavaScript?
Ans : == means in condition statment both argument are not same thats it change the type then
ex '5'==5 check
but in === if both argument are same then check like number and number 5===5
What are the benefits of using closures in JavaScript?
Ans : if we called a function in javascript then after calling it its die we are not able to 
access any property of this function so if we use concept of clouser we can use all parent 
functions property .

What is the event loop in JavaScript responsible for? 
Briefly explain the difference between forEach, map, and filter methods for arrays.
 foreach and map loop trough over the array and exicute desired function given to it .but filet 
 just filter out the element which meet the given condition

*/