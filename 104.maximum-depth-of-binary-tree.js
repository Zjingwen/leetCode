/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (65.88%)
 * Total Accepted:    24.8K
 * Total Submissions: 37.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
var maxDepth = function (root) {
  function depth(p) {
    if(p == null) return 0;
    var i = depth(p.left);
    var j = depth(p.right);
    return Math.max(i,j)+1;
  };
  return depth(root);
};

// const n = {
//   val: 1,
//   right:
//   {
//     val: 3,
//     right: { 
//       val: 5,
//       right: null, 
//       left: null,
//     },
//     left: null,
//   },
//   left: {
//     val: 2,
//     right: null,
//     left: {
//       val: 4, 
//       right: null, 
//       left: null,
//     }
//   }
// };

// const n = {
//   "val": 0,
//   "right": {
//     "val": 4,
//     "right": {
//       "val": -1,
//       "right": {
//         "val": 8,
//         "right": null,
//         "left": null
//       },
//       "left": null
//     },
//     "left": {
//       "val": 3,
//       "right": {
//         "val": 6,
//         "right": null,
//         "left": null
//       },
//       "left": null
//     }
//   },
//   "left": {
//     "val": 2,
//     "right": null,
//     "left": {
//       "val": 1,
//       "right": {
//         "val": 1,
//         "right": null,
//         "left": null
//       },
//       "left": {
//         "val": 5,
//         "right": null,
//         "left": null
//       }
//     }
//   }
// }
// maxDepth(n);