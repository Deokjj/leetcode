// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// 
// Note: For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz0123456789'.split(''));
    const onlyLetter = [];
    
    s = s.toLowerCase().split('');
    for(let i = 0; i < s.length; i++){
        if(alphabetSet.has(s[i])){
            onlyLetter.push(s[i]);
        }
    }
    
    let start = 0, end = onlyLetter.length -1;
    while(start < end){
        if(onlyLetter[start] !== onlyLetter[end]){
            return false;
        }
        start++;
        end--;
    }
    
    return true;
};