/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let tempNum=0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                tempNum=nums[i]
                nums[i]=nums[j]
                nums[j]=tempNum 
            }
        }
    }
    return nums
};