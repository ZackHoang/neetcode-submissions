class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (set.has(board[i][j])) {
                    return false;
                }
                if (board[i][j] != ".") {
                    set.add(board[i][j]);
                }
            }
            set.clear();
        }
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (set.has(board[j][i])) {
                    return false;
                }
                if (board[j][i] != ".") {
                    set.add(board[j][i]);
                }
            }
            set.clear();
        }
        
        for (let square = 0; square < board.length; square++) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (set.has(board[row][col])) {
                        return false;
                    }
                    if (board[row][col] != ".") {
                        set.add(board[row][col]);
                    }
                }
            }
            set.clear();
        }
        return true;
    }
}
