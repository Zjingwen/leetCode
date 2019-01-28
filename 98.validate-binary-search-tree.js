/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (23.54%)
 * Total Accepted:    12.8K
 * Total Submissions: 54.4K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 
 * 假设一个二叉搜索树具有如下特征：
 * 
 * 
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let a = [];
  
  BST(root,(v)=>{
    a.push(v);
  });
  
  return a.every((item, index) => item > (index > 0 ? a[index - 1] : -Infinity));
};
let BST = function(root,callback){
  function search(root,callback){
    if(root){
      search(root.left,callback);
      callback(root.val);
      search(root.right,callback);
    }
  };
  search(root,(v)=>{
    callback(v);
  });
};
// const end = isValidBST({"val":3,"right":{"val":5,"right":{"val":6,"right":null,"left":null},"left":{"val":4,"right":null,"left":null}},"left":{"val":1,"right":{"val":2,"right":{"val":3,"right":null,"left":null},"left":null},"left":{"val":0,"right":null,"left":null}}});
// console.log(end);
