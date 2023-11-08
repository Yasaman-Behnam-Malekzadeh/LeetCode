/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let numsSort=(nums.filter(item=>item>0)).sort((a,b)=>a-b)
    if(numsSort[0]===1){
        for(let i=0;i<nums.length;i++){
            if(numsSort[i]+1!=numsSort[i+1] && numsSort[i]!=numsSort[i+1] && numsSort[i]>0 ){
                return numsSort[i]+1
            }
        }
    }else{
        return 1
    }
};