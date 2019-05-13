// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.
// 
// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.
// 
// 
// 
// Example:
// 
// Input: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const symbolSet = new Set("!?',;.".split(""));
    const bannedSet = new Set(banned);
    const countHash = {};
    const wordArr = new Array(paragraph.toLowerCase());
    let max = 0;
    let result;
    
    for(let i = 0; i < wordArr.length; i++){
        if(symbolSet.has(wordArr[i][wordArr[i].length -1])){
            wordArr[i] = wordArr[i].slice(0,wordArr[i].length - 1);
        }
        if(!bannedSet.has(wordArr[i])){
            countHash[wordArr[i]] = countHash.hasOwnProperty(wordArr[i]) ? 
                                    countHash[wordArr[i]] + 1 : 1;
            
            if(countHash[wordArr[i]] > max){
                max = countHash[wordArr[i]];
                result = wordArr[i];
                console.log(result);
            }
        }
    }
    
    return result;
};