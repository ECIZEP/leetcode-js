function getSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

function getKey(i, j) {
    let result = '';
    result += i < 10 ? `0${i}` : i.toString();
    result += j < 10 ? `0${j}` : j.toString();
    return result;
}

function findDFS(i, j, m, n, k, visited) {
    if (i < 0 || i >=m || j < 0 || j >= n || getSum(i) + getSum(j) > k || visited[getKey(i, j)]) return 0;
    visited[getKey(i, j)] = true;
    return findDFS(i-1, j, m, n, k, visited) + findDFS(i+1, j, m, n, k, visited) +
        findDFS(i, j-1, m, n, k, visited) + findDFS(i, j+1, m, n, k, visited) + 1;
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    const visited = {};
    const result = findDFS(0, 0, m, n, k, visited);
    console.log(visited);
    return result;
};

console.log(movingCount(38, 15, 9));