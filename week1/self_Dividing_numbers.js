/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const cache = {};
    const result = [];
    
    let timer;
    console.time(timer);
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
    
    console.timeEnd(timer);
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