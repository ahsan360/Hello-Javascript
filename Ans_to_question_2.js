const fs = require('fs');
const jsonString = fs.readFileSync('q2.json', 'utf-8');

const obj = JSON.parse(jsonString);

try {

  let  recusive = (data)=> {
    let ans = 0;
    //console.log(data)
    for (const key in data) {
      if (typeof data[key] === "object" && data[key] !== null) {
        if(key=='children')
        {
           let sum = 0
           for(i of data[key])
           {
              console.log(i)
              sum+=i.age
           }
           return sum
        }
        else ans += recusive(data[key]);
      } 
   
    }
    console.log(ans)
    return ans
  }
  let cur = obj;
  let ans = recusive(cur)
  console.log(ans)

}
catch (e) {
  console.log(e)
}