// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
// 
// Note:
// 
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const resultArr = new Array(s.length).fill(false);
    
    for(let j = 0; j < s.length; j ++){
        for(let i = 0; i <= j; i++){
            const word = s.slice(i,j+1);
            if(wordSet.has(word) && (i === 0 || resultArr[i-1] === true) ){
                resultArr[j] = true;
            }
        }
    }
    
    return resultArr[resultArr.length - 1];
};