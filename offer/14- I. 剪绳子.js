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