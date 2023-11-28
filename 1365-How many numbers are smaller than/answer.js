/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result=[]
    for(let i=0;i<nums.length;i++){
        result.push(nums.filter((item)=>item<nums[i]).length)
    }
    return result
};