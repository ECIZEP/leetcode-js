// https://wiki.jikexueyuan.com/project/easy-learn-algorithm/fast-sort.html  交换的思路
// https://blog.csdn.net/MoreWindows/article/details/6684558  挖坑的思路

const waitSort = [ 8, 4, 5, 5, 7, 1, 3, 6 ];

// 对 [left, right] 闭区间排序 交换的方式
function partition(array, left, right) {
    const temp = array[left];
    let i = left;
    let j = right;
    while (i < j) {
        while (array[j] >= temp && i < j) {
            j--;
        }
        while (array[i] <= temp && i < j) {
            i++;
        }
        if (i < j) {
            const t = array[j];
            array[j] = array[i];
            array[i] = t;
        }
    }
    array[left] = array[i];
    array[i] = temp;
    return i;
}

function partition2(array, left, right) {
    const temp = array[left];
    let i = left;
    let j = right;
    while (i < j) {
        while (array[j] > temp && i < j) {
            j--;
        }
        if (i < j) {
            array[i++] = array[j];
        }
        while (array[i] <= temp && i < j) {
            i++;
        }
        if (i < j) {
            array[j--] = array[i];
        }
    }
    array[i] = temp;
    return i;
}

function quickSort(array, left, right) {
    if (left < right) {
        const divideIndex = partition2(array, left, right);
        quickSort(array, left, divideIndex - 1);
        quickSort(array, divideIndex + 1, right);
    }
}

quickSort(waitSort, 0, waitSort.length - 1);
console.log(waitSort);
