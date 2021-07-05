/*
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) {
        return l1 || l2;
    }
    // 先初始化一个假的头结点，避免额外处理第一次的初始化的过程
    const dummyHead = new ListNode(null);
    let resultLinkHead = dummyHead, resultLinkP = dummyHead;
    while(l1 && l2) {
        const minNode = l1.val <= l2.val ? l1 : l2;
        resultLinkP.next = minNode;
        minNode === l1 ? (l1 = l1.next) : (l2 = l2.next);
        resultLinkP = resultLinkP.next;
    }
    if (l1) {
        resultLinkP.next = l1;
    }
    if (l2) {
        resultLinkP.next = l2;
    }
    return resultLinkHead.next;
};