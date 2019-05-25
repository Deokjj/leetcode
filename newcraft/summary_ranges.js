// Given a sorted integer array without duplicates, return the summary of its ranges.
// 
// Example 1:
// 
// Input:  [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
// Example 2:
// 
// Input:  [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.

/**
 * @param {number[]} nums
 * @return {string[]}
 */

//start = 3, end = 3, i = 5
//result = ["0->2",]
var summaryRanges = function(nums) {
    let start = 0, end = -1, i =0;
    const result = [];
    while (i < nums.length + 1){
        //continuous range
        if(i === 0 || nums[i - 1] + 1 === nums[i]){
            end++;
        }
        //not continuous
        else{
            let str = "";
            str += nums[start];
            if(start !== end){
                str = str + "->" + nums[end];
            }
            result.push(str);
            
            start = i;
            end = i;
        }
        i++;
    }
    
    return result;
};