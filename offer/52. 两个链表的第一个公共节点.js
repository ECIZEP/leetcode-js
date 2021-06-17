/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 链表遍历两次的思路，第一次遍历算出长度差count，第二遍让长的先跑count，然后就会相遇
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let isA = null;
    let count = 0;
    let p1 = headA, p2 = headB;
    while (p1 || p2) {
        if (!p1 || !p2) {
            if (isA === null) {
                isA = !p1;
            }
        }
        p1 = p1 && p1.next;
        p2 = p2 && p2.next;
        isA !== null && count++;
    }
    p1 = headA, p2 = headB;
    while (count > 0) {
        isA ? (p2 = p2.next) : (p1 = p1.next);
        count--;
    }
    while (p1 !== p2 && p1 && p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};