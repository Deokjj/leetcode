// Given a pattern and a string str, find if str follows the same pattern.
// 
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
// 
// Example 1:
// 
// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:
// 
// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:
// 
// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:
// 
// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const patternSet = new Set();
    const wordSet = new Set();
    const wordHash = {};
    const strArr = str.split(" ");
    
    if(pattern.length !== strArr.length){
        return false;
    }
    
    for(let i = 0; i < pattern.length; i++){
        if(!patternSet.has(pattern[i])){
            if(wordSet.has(strArr[i])){
                return false;
            }
            patternSet.add(pattern[i]);
            wordSet.add(strArr[i]);
            wordHash[pattern[i]] = strArr[i];
        }
        else{
            if(wordHash[pattern[i]] !== strArr[i]){
                return false;
            }
        }
    }
    
    return true;
};