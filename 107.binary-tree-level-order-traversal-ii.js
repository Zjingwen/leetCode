/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (57.51%)
 * Total Accepted:    8.2K
 * Total Submissions: 14.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  // let i = [[root.val]];

  // BST(root.left, root.right, 1);
  function BST(p, q,level) {
    // debugger;
    if (p || q) {
      let j = [];
      p && j.push(p.val);
      q && j.push(q.val);
      i[level] = j;
      console.log(level-1);
      // i.unshift(j);
      // i[level] = j;
      // i[level] ? i[level].push([]):'';
      // console.log(level);
      q && BST(q.left, q.right,++level);
      p && BST(p.left, p.right,++level);
      
    }
  };
  // console.log(JSON.stringify(i));

  let bottomUp = function(root, deep, number) {
    if(root == null) {
        return 
    }
    if(!!number[deep]) {
        number[deep].push(root.val)
    } else {
        number[deep] = [root.val]
    }
    
    if(root.left != null) {
        bottomUp(root.left, deep+1, number)
    }
    if(root.right != null) {
        bottomUp(root.right, deep+1, number)
    }
  };
  let arr = [];
  bottomUp(root,0,arr);
  // console.log(JSON.stringify(arr.reverse()));
  return arr.reverse();
};

// let root = { 
//   val: 3, 
//   right: { 
//     val: 20, 
//     right: { 
//       val: 7, 
//       right: null, 
//       left: null 
//     }, 
//     left: { 
//       val: 15, 
//       right: null, 
//       left: null 
//     }, 
//   }, 
//   left: { 
//     val: 9, 
//     right: null, 
//     left: null 
//   }, 
// };

// let root = { 
//   val: 1, 
//   right: null, 
//   left: { 
//     val: 2, 
//     right: null, 
//     left: null 
//   }, 
// };

let root = { 
  val: 1, 
  right: { 
    val: 3, 
    right: { 
      val: 5, 
      right: null, 
      left: null 
    }, 
    left: null 
  }, 
  left: { 
    val: 2, 
    right: null, 
    left: { 
      val: 4, 
      right: null, 
      left: null 
    } 
  } 
};
levelOrderBottom(root);
// debugger;