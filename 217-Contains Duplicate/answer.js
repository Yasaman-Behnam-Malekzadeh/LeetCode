// 217. Contains Duplicate

// first Solotion:
    let duplicate=false
    for(let i=0; i<nums.length; i++){
         for(let j=i+1;j<nums.length;j++){
             if(nums[j]===nums[i]){
                 duplicate=true
                  break
             }
         }
     }
    return duplicate

// Second Solotion:
    let duplicate=false
    nums.sort()
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            duplicate=true
            break
        }
    }
    return duplicate