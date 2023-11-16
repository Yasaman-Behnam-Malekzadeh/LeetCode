/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return ((Array.from(Number(n).toString(2)).filter((item)=>item==1)).length)
};