// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// 
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// 
// A partially filled sudoku which is valid.
// 
// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // row
    for(let y = 0; y < 9; y++){
        const set = new Set(); 
        for(let x = 0; x < 9; x++){
            if(set.has(board[y][x])){
                return false;
            }
            
            if(board[y][x] !== '.'){
                set.add(board[y][x]);
            }
        }
    }
    
    //column
    for(let x = 0; x < 9; x++){
        const set = new Set(); 
        for(let y = 0; y < 9; y++){ 
            if(set.has(board[y][x])){
                return false;
            }
            
            if(board[y][x] !== '.'){
                set.add(board[y][x]);
            }
        }
    }
    
    //0-2 3-5 6-9
    //sub Box
    for(let bigY = 0; bigY < 3; bigY++){
        for(let bigX = 0; bigX < 3; bigX++){
            const set = new Set(); 
            for (let y = 3*bigY; y< 3*(bigY + 1); y++){
                for (let x = 3*bigX; x < 3*(bigX + 1); x++){
                    if(set.has(board[y][x])){
                        return false;
                    }

                    if(board[y][x] !== '.'){
                        set.add(board[y][x]);
                    }
                }
            }
        }
    }
    
    return true;
};