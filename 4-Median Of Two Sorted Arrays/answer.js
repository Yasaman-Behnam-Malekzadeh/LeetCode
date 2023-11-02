/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let finalArr=nums1.concat(nums2).sort((a,b)=>a-b)
    if(finalArr.length%2===1){
        return Number(finalArr[(finalArr.length-1)/2]).toFixed(4)
    }else{
        return Number((finalArr[(finalArr.length)/2]+finalArr[(finalArr.length/2)-1])/2).toFixed(4)
    }
};