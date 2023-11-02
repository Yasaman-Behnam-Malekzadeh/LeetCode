/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arrOfx = x.toString().split('')
    let arrOfxReverse=arrOfx
    
    return (arrOfx.toString()===(arrOfxReverse.reverse()).toString() ? true : false)
};