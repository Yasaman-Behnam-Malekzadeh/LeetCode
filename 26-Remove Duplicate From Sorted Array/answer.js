/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let space=[]
    let i=0
    
    while(i<nums.length){
        if(nums[i]===nums[i+1]){ 
            nums.splice(i,1)
            space.push(' ')
        }else{
            i++
        }
    }
    let numsLength=nums.length
    nums=nums.concat(space)
    console.log(nums)
    return numsLength
};