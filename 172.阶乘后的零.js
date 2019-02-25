/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 *
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (36.63%)
 * Total Accepted:    7.7K
 * Total Submissions: 21K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。
 * 
 * 示例 1:
 * 
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: 1
 * 解释: 5! = 120, 尾数中有 1 个零.
 * 
 * 说明: 你算法的时间复杂度应为 O(log n) 。
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let s = 1;
  let m = 0;
  for(let i = 1;i <= n; i++){
    s = s*i
  };
  console.log(s.toString())
  while(s%10 == 0){
    m = m+1;
    s = s/10;
  };
  return m;
};
console.log(trailingZeroes(30))
