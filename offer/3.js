// 找出重复的数字 数字在0 到n-1的范围内
const array = [ 2, 3, 1, 0, 2, 5, 3 ];

// 因为数值是在0 - n-1范围, 所以按数值直接哈希填表（有点哈希表的搞法，如果冲突说明重复，不冲突则交换值）
function duplicate(array, duplication) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== i) {
            if (array[i] === array[array[i]]) {
                duplication.push(array[i]);
                continue;
            } else {
                const newIndex = array[i];
                array[i] = array[newIndex];
                array[newIndex] = newIndex;
            }
        }
    }
}

let duplication = [];
duplicate(array, duplication);
console.log(array, duplication);
