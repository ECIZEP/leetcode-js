/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

/*
解法一：
按照规律输出字符，第一行间隔是 2n-2  第二行间隔是 2n-4 2n-6 2n-4 2n-6交替
首行和尾行间隔不变
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    let result = '';
    for (let i = 1; i <= numRows; i++) {
        let index = i - 1;
        let first = (numRows - i) * 2;
        let second = 2 * i - 2;
        let switchFlag = true;
        while (index <= s.length - 1) {
            result += s.charAt(index);
            if (i === 1) {
                index += first;
            } else if (i === numRows) {
                index += second;
            } else {
                index += switchFlag ? first : second;
                switchFlag = !switchFlag;
            }
        }
    }
    console.log(result);
    return result;
};

convert('PAYPALISHIRING', 4);