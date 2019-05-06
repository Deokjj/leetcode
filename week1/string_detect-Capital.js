// Given a word, you need to judge whether the usage of capitals in it is right or not.
// 
// We define the usage of capitals in a word to be right when one of the following cases holds:
// 
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital if it has more than one letter, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let end = word.length -1;
    
    if(word[end].toUpperCase() === word[end]){
        //if last letter is uppercase, we expect all letters to be uppercase
        for(let i = end -1; i > -1; i--){
            if(word[i].toLowerCase() === word[i]){
                return false;
            }
        }
    }
    else{
        // if last letter is lower case, 
        //we expect All letters lowercase or only first letter not lower case
        for(let i = end-1; i > 0; i--){
            if(word[i].toUpperCase() === word[i]){
                return false;
            }
        }
    }
    
    return true;
};