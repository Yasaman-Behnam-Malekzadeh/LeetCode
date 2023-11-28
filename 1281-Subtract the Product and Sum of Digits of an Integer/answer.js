/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let digit=1
    let sum=0
    let arr=Array.from(String(n), Number)
   for(let i=0;i<arr.length;i++){
       digit=arr[i]*digit
       sum=sum+arr[i]
   }
   return digit-sum
    
};