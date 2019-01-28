/*
 * [7] Reverse Integer
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (28.63%)
 * Total Accepted:    36.4K
 * Total Submissions: 127K
 * Testcase Example:  '123'
 *
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if( -10 < x && x < 10 ) return x;
  
  let a = x.toString().split('');
  let s = '';
  const NUMBER_MAX = Number(Math.pow(2, 31) - 1);
  const NUMBER_MIN = Number(-Math.pow(2, 31));
  
  if( a[0] == '-' ) s = a.shift();

  let param = Number(s+a.reverse().join(''));

  if( NUMBER_MIN > param || param > NUMBER_MAX ) return 0;

  return param;
};