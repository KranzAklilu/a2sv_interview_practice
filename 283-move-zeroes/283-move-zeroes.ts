/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {


    let i = 0;
    let nextInt = 0;

    while(i < nums.length && nextInt !== -1){
        if(nums[i] === 0){
            nums.splice(i, 1);
            nums.push(0);
            nextInt = nums.findIndex((num, idx) => num !== 0 && idx > i)
        }
        else{
            i++
        }
    }
    
};