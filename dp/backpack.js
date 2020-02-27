// 物品的重量和价值
const weightArray = [ 3, 4, 5 ];
const valueArray = [ 4, 5, 6 ];

/**
 * 01背包
 * @param {number} cpacity 背包容量
 * @param {Array<number>} weight 物品重量
 * @param {Array<number>} value 物品价值
 */
function backpack(cpacity, weight, value) {
    const cost = new Array(weight.length + 1);
    for (let i = 0; i <= weight.length; i++) {
        cost[i] = new Array(cpacity + 1);
        for (let j = 0; j <= cpacity; j++) {
            if (i === 0) {
                cost[i][j] = 0;
                continue;
            } else {
                cost[i][j] = cost[i - 1][j];
            }
            // 选择
            if (j >= weight[i - 1] && cost[i - 1][j - weight[i - 1]] + value[i - 1] > cost[i - 1][j]) {
                cost[i][j] = cost[i - 1][j - weight[i - 1]] + value[i - 1];
            }
        }
    }
    console.log(cost);
}

backpack(10, weightArray, valueArray);