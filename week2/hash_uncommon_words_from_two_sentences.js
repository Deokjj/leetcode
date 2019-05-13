// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
// 
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// 
// Return a list of all uncommon words. 
// 
// You may return the list in any order.

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const allWords = (A + ' ' + B).split(" ");
    const hashWords = {};
    const result = [];
    
    allWords.forEach((word)=>{
        if(hashWords.hasOwnProperty(word)){
            hashWords[word] += 1;
        }
        else{
            hashWords[word] = 1;
        }
    });
    
    for (let key in hashWords){
        if(hashWords[key] === 1){
            result.push(key);
        }
    }
    
    return result;
    
//     const aSet = new Set(A.split(" "));
//     const wordsInB = B.split(" ");
//     const result = [];
    
//     // get uncommon in B
//     wordsInB.forEach((word)=>{
//         if(aSet.has(word)){
//             aSet.delete(word);
//         }
//         else{
//             result.push(word);
//         }
//     });
    
//     // get uncommon in A
//     [...aSet].forEach((word)=>{
//         result.push(word);
//     });
    
//     return result;
};