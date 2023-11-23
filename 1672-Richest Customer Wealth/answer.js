/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result=[]
    for (let i=0; i<accounts.length ; i++){
        result.push(accounts[i].reduce((a,b)=>a+b))
    }
    return Math.max(...result)
};