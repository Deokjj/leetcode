// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let answer = s.split(' ');
    answer = answer.map((word)=>{
        return word.split('').reverse().join('');
    });
    
    return answer.join(' ');
};