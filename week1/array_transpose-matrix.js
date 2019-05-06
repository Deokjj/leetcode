// Given a matrix A, return the transpose of A.
// 
// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const yLength = A.length, xLength = A[0].length;
    let result = new Array(xLength);
    for (let i = 0; i<result.length; i++){
        result[i] = new Array(yLength);
    }
    
    for (let x = 0; x < xLength; x++){
        for(let y = 0; y < yLength; y++){
            result[x][y] = A[y][x];
        }
    }
    
    return result;
};

// Given y by x matrix, initialize a x by y matrix and populate them by nested for loop. 
// 
// Time: O(N+M)
// Space: O(N+M)