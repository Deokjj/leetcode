// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// 
// An input string is valid if:
// 
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    
    for (let i = 0; i < s.length; i++){
        //opening bracket
        if(brackets.hasOwnProperty(s[i])){
            stack.push(s[i]);
        }
        //closing bracket
        else{
            // closing and opening brackets don't match
            if(s[i] !== brackets[stack[stack.length - 1]]){
                return false;
            }
            stack.pop();
        }
    }
    
    return (stack.length === 0) ? true : false;
};