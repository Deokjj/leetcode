// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// 
// Given two integers x and y, calculate the Hamming distance.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let hammingDis = (x ^ y).toString(2).split("");
    let count = 0;
    for (let i = 0; i < hammingDis.length; i++){
        if(hammingDis[i] === '1')
            count++;
    }
    
    return count;
};