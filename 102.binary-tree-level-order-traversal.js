/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (52.03%)
 * Total Accepted:    14.4K
 * Total Submissions: 27.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
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
var levelOrder = function(root) {
  if(!root) return [];

  const a =[];
  BST(root,(v,l)=>{
    if(!Array.isArray(a[l])){
      a[l] = [v.val];
    }else{
      a[l].push(v.val);
    }
  });
  
  return a;
};
function BST(l,callback,level = 0){
  if(!l) return ;
  
  callback(l,level);

  const nextLevel = level+1;
  BST(l.left,callback,nextLevel);
  BST(l.right,callback,nextLevel);
}
// let end = levelOrder({"val":1,"right":null,"left":{"val":2,"right":null,"left":null}})
// console.log(end);
// debugger
