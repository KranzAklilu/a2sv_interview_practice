function longestOnes(nums: number[], k: number): number {
    let maxWindowSize = 0;
    let currentZeros = 0;
    let windowStart = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            currentZeros++
        }
        
        if(currentZeros <= k){
            maxWindowSize = Math.max(maxWindowSize, i - windowStart + 1);
        }
            while(currentZeros > k){
                if(nums[windowStart] === 0){
                    currentZeros--;
                }
                windowStart++;
        }
    }
    return maxWindowSize;
};