/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const allPaths = [];
    const currentPath = [];
    let getPaths = (root, sum) => {
        if (root === null) {
            return void 666;
        }
        if (root.left === null && root.right === null && root.val === sum) {
            allPaths.push([...currentPath, root.val]);
        }
        currentPath.push(root.val);
        root.left && getPaths(root.left, sum - root.val);
        root.right && getPaths(root.right, sum - root.val);
        currentPath.pop();
    }
    getPaths(root, sum);
    return allPaths;
};

 