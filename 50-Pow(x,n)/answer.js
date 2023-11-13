/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let i=1
    let result=1

    if(n===0){
        return 1
    }else if(x===1){
        return 1
    }else if(x===-1){
       if(n%2===0){return 1} else return -1
    }else if(n<0){
        x=1/x  
        while(i<=Math.abs(n)){
            result=result*x
            i++
        } 
    }else{
        while(i<=Math.abs(n)){
            result=result*x
            i++
        }
    }
    return result 
};