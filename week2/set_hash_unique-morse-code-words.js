// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
// 
// For convenience, the full table for the 26 letters of the English alphabet is given below:
// 
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const hashTable = {};
    let result = [];
    
    for(let i = 0; i < alphabet.length; i++){
        hashTable[alphabet[i]] = morseCodes[i];
    }

    for(let i = 0; i < words.length; i++){
        result.push("");
        for(let j = 0; j < words[i].length; j++ ){
            result[i] += hashTable[words[i][j]];
        }
    }
    
   return new Set(result).size;
};