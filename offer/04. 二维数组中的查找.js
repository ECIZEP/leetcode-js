/* 
题目描述
在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。

请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

样例

输入数组：

[
  [1,2,8,10]，
  [2,4,9,12]，
  [4,7,11,13]，
  [6,8,12,15]
]

如果输入查找数值为7，则返回true，

如果输入查找数值为5，则返回false。
*/

function findArray(array, target) {
  let i = array.length - 1, j = 0;
  while (i >= 0 && j < array[0].length) {
    if (target > array[i][j]) {
      j++;
    } else if (target < array[i][j]) {
      i--;
    } else {
      return true;
    }
  }
  return false;
}

console.log(findArray([[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]],17));