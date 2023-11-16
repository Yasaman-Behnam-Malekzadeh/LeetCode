/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // let (nums.findIndex((item)=>item==target))!=null ? (nums.findIndex((item)=>item==target)):-1 -->>O(n)
    let low=0
    let high=nums.length-1
    if(!nums) return 0
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        console.log(mid,low,high)
        if(nums[mid]===target){
            
            return mid
        }else if(nums[mid]<target){
            low=mid+1
        }else if(nums[mid]>target){
            high=mid-1
        }
    }
    return -1
    //O(logn)
};