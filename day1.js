//template literal
let name = "ahsan"
//console.log(`this is my name ${name}`)

//Destructuring Assignment:
let a = [1,2,3,4,5,6]
const [c,d] = a
obj = {
    id : 1,
    s : 'ahsan',
    first : {d : 1,c : 5}
}
const {first : {c : k}} = obj
console.log(k)