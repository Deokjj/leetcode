// Write a program that outputs the string representation of numbers from 1 to n.
// 
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];
    
    for(let i = 1; i < n + 1; i++){
        let str = "";
        if(i % 3 === 0){
            str += "Fizz";
        }
        if(i % 5 === 0){
            str += "Buzz";
        }
        
        if(str === ""){
            result.push(i.toString());
        }
        else{
            result.push(str);
        }
    }
    
    return result;
};