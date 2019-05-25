// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charHash = {};
    let min = Infinity;
    for(let i = 0; i < s.length; i++){
        if(charHash.hasOwnProperty(s[i])){
            charHash[s[i]] = 'repeated';
        }
        else{
            charHash[s[i]] = i;
        }
    }
    
    for(let key in charHash){
        if(charHash[key] > -1) 
            min = Math.min(min,charHash[key]);
    }
    
    return (min < s.length) ? min : -1;
};