/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result=[]
    for (let i=1;i<=nums.length;i++){
        result.push(nums.slice(0,i).reduce((a,b)=>a+b,0))
    }
    return result
};