/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (44.63%)
 * Total Accepted:    12.8K
 * Total Submissions: 28.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let [sum, step] = ["", 0];
  let [lga, lgb] = [a.length - 1, b.length - 1];
  let temp = 0;
  for (let i = 0; a[lga - i] || b[lgb - i]; i++) {
    temp = Number(a[lga - i] || 0) + Number(b[lgb - i] || 0) + step;
    if (temp >= 2) {
      sum = temp % 2 + sum;
      step = 1;
    } else {
      sum = temp + sum;
      step = 0;
    }
  }
  return step > 0 ? step + sum : sum;
};