/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr=nums.sort()
    if(nums.length===1){
        return nums[0]
    }else{
        let i=0
        while(i<arr.length-1){
            if(arr[i]===arr[i+1]){
                i=i+2
            }
            else if(arr[i]!=arr[i+1]){
                return arr[i]
            }
        }
    }
    return arr[arr.length-1]
    
};