// hash表 时间O(n) 空间O(n) 不修改原有数据
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    const duplicated = [];
    for (let item of nums) {
        if (duplicated[item] === item) {
            return item;
        } else {
            duplicated[item] = item;
        }
    }
};

// hash表空间改进版  时间O(n) 空间O(1) 修改原有数据
// 把数字对应位置上的元素变成负数
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber2 = function(nums) {
    let zeroCounter = 0;
    for (let item of nums) {
        const abs = Math.abs(item);
        if (nums[abs] < 0) {
            return abs;
        } else {
            nums[abs] = -nums[abs];
            // 需要考虑0的情况
            nums[abs] === 0 ? zeroCounter++ : '';
            if (zeroCounter > 1) {
                return 0;
            }
        }
    }
};

// 是否有空间复杂度为O(1) 同时不修改原有数据的方法?
var findRepeatNumber3 = function(nums) {
    for (let i = 0; i < nums.length; ) {
        if (nums[i] !== i && nums[i] === nums[nums[i]]) {
            return nums[i];
        } else if (nums[i] !== i) {
            const temp = nums[i];
            nums[i] = nums[nums[i]];
            nums[temp] = temp;
        }
        nums[i] === i && i++;
    }
};
