// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
// 
// Note:
// The given integer is guaranteed to fit within the range of a 32-bit signed integer.
// You could assume no leading zero bit in the integer’s binary representation.

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const str = num.toString(2);
    let result = "";
    
    for(let i = 0; i < str.length; i++){
        result += str[i] === '1' ? '0' : '1';
    }
 
    return parseInt(result,2);
}