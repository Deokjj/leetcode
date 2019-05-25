// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// 
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
// 
// The replacement must be in-place and use only constant extra memory.
// 
// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
    if(nums.length < 2) return nums;
    
    const bubbleSort = (start, end) => {
        while (start < end){
            let swapped = false;
            for(let i = start; i < end; i++){
                if(nums[i] > nums[end]){
                    [nums[i],nums[end]] = [nums[end],nums[i]];
                    swapped = true;
                }
            }
            if(!swapped){
                break;    
            }
            end--;
        }
    }

    for(let i = nums.length -2; i > -1; i--){
        for (let j = nums.length -1; j > i; j--){
            if(nums[i] < nums[j]){
                [nums[i],nums[j]] = [nums[j], nums[i]];
                bubbleSort(i+1, nums.length -1);
                return nums;
            }
        }
    }
    
    bubbleSort(0,nums.length-1);
    
    return nums;
};