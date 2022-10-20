function pivotIndex(nums: number[]): number {
    let index = -1;
    for(let i = 0; i < nums.length; i++){
        let sumLeft = 0;
        let sumRight = 0;
        for(let j = 0; j < nums.length; j++){
            if(i > j){
                sumLeft += nums[j]
            }
            if(i < j){
                sumRight += nums[j]
            }
        }
        if(sumLeft === sumRight){
            index = i; 
            break;
        }
        sumLeft = 0;
        sumRight = 0;
    }
    return index;
};