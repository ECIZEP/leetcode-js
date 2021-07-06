/* 
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1
提示：

1 <= n,m <= 100
0 <= k <= 20

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

function getSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

function getKey(i, j) {
    let result = '';
    result += i < 10 ? `0${i}` : i.toString();
    result += j < 10 ? `0${j}` : j.toString();
    return result;
}

function findDFS(i, j, m, n, k, visited) {
    if (i < 0 || i >=m || j < 0 || j >= n || getSum(i) + getSum(j) > k || visited[getKey(i, j)]) return 0;
    visited[getKey(i, j)] = true;
    return findDFS(i-1, j, m, n, k, visited) + findDFS(i+1, j, m, n, k, visited) +
        findDFS(i, j-1, m, n, k, visited) + findDFS(i, j+1, m, n, k, visited) + 1;
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    const visited = {};
    const result = findDFS(0, 0, m, n, k, visited);
    console.log(visited);
    return result;
};

console.log(movingCount(38, 15, 9));