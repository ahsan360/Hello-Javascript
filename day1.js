
//spread operator
{
    let ar = [1,2,4,]
    let br = [3,5]
    let conct = [...ar,...br]
    console.log(conct)
}

//rest operator
{
    function sum(...theArgs) {
        let total = 0;
        for (const arg of theArgs) {
          total += arg;
        }
        return total;
      }
      
      console.log(sum(1, 2, 3));
      // Expected output: 6
      
      console.log(sum(1, 2, 3, 4));
      // Expected output: 10
}