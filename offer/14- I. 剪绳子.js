/*
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jian-sheng-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * 第一种解法：动态规划
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
    const dp = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        let maxNum = 0;
        for (let j = 1; j < i; j++) {
            // 绳子必须至少剪成两段，如果直接用dp的数据，则至少三段了，需要考虑2段的j * (i - j)的情况
            maxNum = Math.max(dp[j] * (i - j), j * (i - j), maxNum);
        }
        dp[i] = maxNum;
    }
    console.log(dp);
    return dp[n];
};

cuttingRope(10);