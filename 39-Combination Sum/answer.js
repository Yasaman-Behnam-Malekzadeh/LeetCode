/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result=[]
    let tempArr=[]
    let index=0

    function recSum(index,target,tempArr){
        if (target===0){
            result.push([...tempArr])
            return
        }else if(target<0){
            return
        }
        for(let i=index;i<candidates.length;i++){ 
            tempArr.push(candidates[i])
            recSum(i,target-candidates[i],tempArr) 
            tempArr.pop() 
        }
    }
    recSum(index,target,tempArr)
    return result
};