/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let devis=[]
    let notDevis=[]

    const devisibility = (num) =>(num%m==0)? true : false
    const reduceArr = (arr) => arr.reduce((a,b)=>a+b,0)
    
    for(let i=1;i<=n;i++){
        devisibility(i) ? devis.push(i) : notDevis.push(i)
    }
    return reduceArr(notDevis) - reduceArr(devis)
};