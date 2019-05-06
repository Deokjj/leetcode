// Given two strings s and t , write a function to determine if t is an anagram of s.
// 
// Example 1:
// 
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// 
// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
    const sHash = {}, tHash = {};
    
    for(let i = 0; i < s.length; i++){
        //sHash
        if(!sHash.hasOwnProperty(s[i])){
            sHash[s[i]] = 1;
        }
        else{
            sHash[s[i]] += 1;
        }
        //tHash
        if(!tHash.hasOwnProperty(t[i])){
            tHash[t[i]] = 1;
        }
        else{
            tHash[t[i]] += 1;
        }   
    }
    
    for(let letter in sHash){
        if(sHash[letter] !== tHash[letter])
            return false;
    }
    
    return true;
};