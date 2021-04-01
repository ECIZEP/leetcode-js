/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 尾递归解法
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    if (head === null) {
        return [];
    }
    if (head.next === null) {
        return [head.val];
    }
    const result = reversePrint(head.next);
    result.push(head.val);
    return result;
};


// 栈解法
var reversePrint = function(head) {
    const result = [];
    while(head) {
        result.unshift(head.val);
        head = head.next;
    }
    return result;
};

