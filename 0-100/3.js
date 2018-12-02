/* 
3. 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/

/**
 * 我的思路是有重复了将i重置回去，下面的滑动窗口解法因为有两个index，但是思路是类似的
 * 时间复杂度最差情况都是 2n
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let last = new Map();
    let current = new Map();
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (current.has(char)) {
            let backIndex = current.get(char);
            if (current.size > last.size) {
                // 找到更大的
                last = current;
                current = new Map();
            } else {
                // 放弃重来
                current.clear();
            }
            i = backIndex;
        } else {
            current.set(char, i);
        }
    }
    return current.size > last.size ? current.size : last.size;
};


/**
 * 官方解法： 滑动窗口
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0, result = 0;
    let set = new Set();
    while(i < s.length && j < s.length) {
        let char = s.charAt(j);
        if (!set.has(char)) {
            set.add(char);
            j++;
            result = Math.max(set.size, result);
        } else {
            set.delete(s.charAt(i++));
        }
    }
    return result;
};
