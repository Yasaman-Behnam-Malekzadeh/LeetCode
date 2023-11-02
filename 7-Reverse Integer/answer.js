/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative= (x>0)? false : true
    let arr= (Array.from(Math.abs(x).toString()).reverse()).map((e)=>Number(e)).toString().replaceAll(',','')
    arrToNum = (arr) => {
        if(Number(arr)<Math.pow(2,31)-1){
            return Number(arr)
        }else{
            return 0
        }
    }
    if (arr==0){
        return 0
    }else if(isNegative){
        return '-'+arrToNum(arr)
    }else{
        return arrToNum(arr)
    }
};