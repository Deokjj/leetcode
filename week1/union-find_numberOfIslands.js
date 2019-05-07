// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
// 
// Example 1:
// 
// Input:
// 11110
// 11010
// 11000
// 00000
// 
// Output: 1
// Example 2:
// 
// Input:
// 11000
// 11000
// 00100
// 00011
// 
// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length === 0) return 0;
    const yLength = grid.length;
    const xLength = grid[0].length;
    
    function removeIsland(y,x){
        if(y < 0 || y > yLength -1 || x < 0 || x > xLength -1 || grid[y][x] === '0'){
            return;
        }
        grid[y][x] = '0';
        removeIsland(y-1,x);
        removeIsland(y+1,x);
        removeIsland(y,x-1);
        removeIsland(y,x+1);
    }
    
    let count = 0;
    for(let y = 0; y < yLength; y++){
        for(let x =0; x < xLength; x++){
            if(grid[y][x] === '1'){
                count++;
                removeIsland(y,x);
            }
        }
    }
    
    return count;
};