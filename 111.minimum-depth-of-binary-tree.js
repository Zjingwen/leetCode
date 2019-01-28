/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (36.01%)
 * Total Accepted:    9.4K
 * Total Submissions: 26.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最小深度  2.
 * 
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
 * @return {number}
 */
var minDepth = function(root) {
  if( root == null) return 0;
  if( root.left == null && root.right == null) return 1;
  if( root.left != null && root.right == null ) return minDepth(root.left)+1;
  if( root.left == null && root.right != null ) return minDepth(root.right)+1;

  return Math.min(minDepth(root.left),minDepth(root.right)) +1;
};
// const n = minDepth({"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}})
// const n = minDepth({"val":3,"right":{"val":20,"right":null,"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}})
// console.log(n);
// debugger