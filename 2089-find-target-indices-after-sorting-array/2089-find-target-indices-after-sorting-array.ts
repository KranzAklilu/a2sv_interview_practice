function targetIndices(nums: number[], target: number): number[] {
    const sortedAr = [...nums];
    const output = [];
    for(let i = 0; i < sortedAr.length; i++){
        for(let j = 0; j < sortedAr.length; j++){
            if(sortedAr[i] < sortedAr[j]){
                let temp = sortedAr[i]
                sortedAr[i] =  sortedAr[j]
                sortedAr[j] = temp;
            }
        }
    }
    for(let i = 0; i < sortedAr.length; i++){
        if(sortedAr[i] == target){
        output.push(i)
        }
    }
    return output;
};