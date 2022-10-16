function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const que = Array(nums1.length).fill(-1);
    for(let i = 0; i < nums1.length; i++) {
        let equalsIdx = nums2.findIndex(num => num === nums1[i]);
        for(let j = 0; j < nums2.length; j++){
            if(j >= equalsIdx && nums1[i] < nums2[j]){
                que[i] = nums2[j];
                break;
            }
        }
    }
    return que;
};