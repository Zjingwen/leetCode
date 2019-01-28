/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 *
 * https://leetcode-cn.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (64.72%)
 * Total Accepted:    30.3K
 * Total Submissions: 46.8K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，其作用是将输入的字符串反转过来。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "olleh"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: "amanaP :lanac a ,nalp a ,nam A"
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let a = '';
  for(let i = s.length-1;i>=0;i--){
    a = a + s[i];
  }

  return a;
};
// reverseString('A man, a plan, a canal: Panama')
