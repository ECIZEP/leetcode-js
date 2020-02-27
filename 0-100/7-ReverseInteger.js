/*
Given a 32-bit signed integer, reverse digits of an integer.

Input: 123
Output: 321
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const biggest32 = 2 ** 31;
    let y = 0;
    let first = true;
    while (x != 0) {
        const rest = x % 10;
        x = parseInt(x / 10);
        if (rest === 0 && first) {
            continue;
        }
        first = false;
        y = y * 10 + rest;
    }
    if (y < (- biggest32) || y > biggest32 - 1) {
        return 0;
    }
    return y;
};

console.log(reverse(120));

console.log(reverse(-120));

console.log(reverse(1534236469));