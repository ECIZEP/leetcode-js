const waitSort = [ 8, 4, 5, 5, 7, 1, 3, 6 ];

function switchElement(array, left, mid, right) {
    let i = left;
    let j = mid + 1;
    let temp = [];

    while (i <= mid && j <= right) {
        if (array[i] <= array[j]) {
            temp.push(array[i++]);
        } else {
            temp.push(array[j++]);
        }
    }

    while (i <= mid) {
        temp.push(array[i++]);
    }

    while (j <= right) {
        temp.push(array[j++]);
    }

    i = left;
    temp.forEach(value => {
        array[i++] = value;
    });
}

function mergeSort(array, start, end) {
    if (start < end) {
        const mid = parseInt((start + end) / 2, 10);
        mergeSort(array, start, mid);
        mergeSort(array, mid + 1, end);
        switchElement(array, start, mid, end);
    }
}

mergeSort(waitSort, 0, waitSort.length - 1);
console.log(waitSort);