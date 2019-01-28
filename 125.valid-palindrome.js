/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (37.15%)
 * Total Accepted:    20.2K
 * Total Submissions: 54.5K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) return true;
  let a = [];
  let b = [];
  s = s.toLowerCase();
  for(i of s) {
    const code = i.charCodeAt(); 
    if( (48 <= code && code <= 57) || (97 <= code && code<= 122)){
      a.unshift(code);
      b.push(code);
    }
  }
  
  return JSON.stringify(a) == JSON.stringify(b);
};
// const str = 'A man, a plan, a canal: Panama';
// const str = 'race a car';
// const end = isPalindrome(str);
// console.log(end);
// debugger
