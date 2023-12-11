/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arr=nums.sort((a,b)=>a-b)
    findItem = () =>{
        return arr.find((item)=>item!==arr[item])-1
    }

    if(arr[0]===1){
        return 0
    }
    else if(findItem()>0){
        return(findItem())
    }else{
        return arr[arr.length-1]+1
    }
    
};