// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// 
// You may return any answer array that satisfies this condition.
/**
 * @param {number[]} A
 * @return {number[]}
 */
//   v v
//[4,1,2,3]
var sortArrayByParity = function(A) {
    let start = 0, end = A.length -1;
    
    while(start < end){
        if(A[start] % 2 === 0){
            //if vals at start and end are both even
            if(A[end] %2 === 0){
                start++;
            }
            //if val at start is even and at end is odd 
            else{
                start++;
                end--;
            }
        }
        else{
            //if val at start is odd and end is even
            if(A[end] %2 === 0){
                [A[start],A[end]] = [A[end],A[start]];
                start++;
                end--;
            }
            //if vals at both are odd
            else{
                end--;
            }
        }
    }
    
    return A;
};

//Creating a result array and adding values might be much easier but wanted to solve it in place ( as in to keep it Auxillary space of O(1) )