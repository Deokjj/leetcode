/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const numOneCanHave = candies.length /2;
    const numOfKinds = new Set(candies).size;
    
    if(numOfKinds > numOneCanHave){
        return numOneCanHave;
    }
    else{
        return numOfKinds;
    }
    
};