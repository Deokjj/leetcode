// Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.
// 
// If there aren't two consecutive 1's, return 0.

/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let maxCount = 0;
    let count = 1;
    let foundFirstOne = false;
    const binaryStr = N.toString(2);
    
    for (let i = 0; i < binaryStr.length; i++){
        if(foundFirstOne === false && binaryStr[i] === '1'){
            foundFirstOne = true;
            continue;
        }
        
        if(binaryStr[i] === '0'){
            count++;
        }
        else{
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
    }
    return maxCount;
};