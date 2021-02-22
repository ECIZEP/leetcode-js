function climbStairs(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    let a = 1;
    let b = 2;
    let temp = 0;
    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
}

function climbStairs2(n) {
    const memory = [];
    memory[0] = 1;
    memory[1] = 1;
    for (let i = 2; i <= n; i++) {
        memory[i] = memory[i - 1] + memory[i - 2];
    }
    return memory;
}
console.log(climbStairs2(15));
console.log(climbStairs(6));
