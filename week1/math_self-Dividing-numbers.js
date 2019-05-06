// A self-dividing number is a number that is divisible by every digit it contains.
// 
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// 
// Also, a self-dividing number is not allowed to contain the digit zero.
// 
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const cache = {};
    const result = [];
    
    for (let i = left; i <= right; i++){
        if(cache.hasOwnProperty(i) && cache[i] === true){
            result.push(i);
        }
        else{
            if(isSelfDividing(i)){
                cache[i] = true;
                result.push(i);
            }
            else{
                cache[i] = false;
            }
        }
    }

    return result;
         
    function isSelfDividing(num) {
        let numArr = num.toString().split('');
        for (let i = 0; i < numArr.length; i++){
            if(num % numArr[i] !== 0)
                return false;
        }
        return true;
    }
};

//Creat cache in case this function is called repeated so we won't do the same calculations repeatedly.