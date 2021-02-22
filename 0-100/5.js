/**
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

链接：https://leetcode-cn.com/problems/longest-palindromic-substring


动态规划解法：
1、状态转移  d[i][j] = d[i+1][j-1] && d[i] === d[j]
 */


 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s;
    }
    const dp = new Array(s.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s.length);
    }
    let start = 0;
    let currentLength = 1;
    // 从长度1开始 
    for (let len = 1; len <= s.length; len++) {
        for (let i = 0; i < s.length - len + 1; i++) {
            let j = i + len - 1;
            if (len === 1) {
                dp[i][j] = true;
            } else if (len === 2) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            }
            if (dp[i][j] && len > 1) {
                currentLength = len;
                start = i;
            }
        }
    }
    return s.slice(start, start + currentLength);
};

console.log(longestPalindrome('babad'));