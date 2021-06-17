/*
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。


示例 1：

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：

输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(board, word, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

function dfs(board, word, i, j, index) {
    const selfRight = board[i][j] === word[index];
    if (word.length - 1 === index) {
        return selfRight;
    }
    if (selfRight) {
        // 不允许往回走
        board[i][j] = '';
        const reulst =  [1, -1, 1, -1].some((item, tempIndex) => {
            const isI = tempIndex <= 1;
            const newI = isI ? i + item : i;
            const newJ = isI ? j : j + item;
            const valid = newI >= 0 && newI < board.length && newJ >= 0 && newJ < board[newI].length;
            return valid && dfs(board, word, newI, newJ, index + 1);
        });
        // 回溯的时候恢复一下
        board[i][j] = word[index];
        return reulst;
    }
    return false;
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
"ABCCED"));
console.log(exist([["a","a"]],
"aaa"));