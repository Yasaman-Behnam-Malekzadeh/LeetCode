/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arrayOfs=[...s]
    let result=0
    
    function letterToNum(letter){
        switch(letter){
            case 'I':
                return 1
            case 'V':
                return 5
            case 'X':
                return 10
            case "L":
                return 50
            case 'C':
                return 100
            case 'D':
                return 500
            case 'M':
                return 1000
        }
    }
     let i=0
    while(i<arrayOfs.length){
        if(letterToNum(arrayOfs[i+1])>0 && letterToNum(arrayOfs[i])<letterToNum(arrayOfs[i+1])){
            result+=(letterToNum(arrayOfs[i+1])-letterToNum(arrayOfs[i]))
            i=i+2
            
        }else{
            result+=letterToNum(arrayOfs[i])
            i++
        }
    }
    return (result)
};