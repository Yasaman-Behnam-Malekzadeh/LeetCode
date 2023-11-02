/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let result= dividend/divisor
    let limit=2147483648
    if(result<=0){
        return Math.ceil(result)
    }else if(result>0 && result<limit){
        return Math.floor(result)
    }else{
        return limit-1
    }
};