/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result=0
    for (let i=0;i<operations.length;i++){
        switch(operations[i]){
            case "--X":
            result=result-1
            break;
            case "X--":
            result=result-1
            break;
            case "X++":
            result=result+1
            break;
            case "++X":
            result=result+1
            break;
        }
    }
    return result
};