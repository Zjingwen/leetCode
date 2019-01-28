/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (27.79%)
 * Total Accepted:    13.4K
 * Total Submissions: 48.3K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length-1;
  let count = 0;
  while(i >= 0){
    if(s[i] >= 'a' && s[i]<= 'z' || s[i] >= 'A' && s[i]<= 'Z') {
      count++
    }else{
      if (count !== 0 ) break;
    }
    i--;
  }
  // debugger
  return count;
};
// console.log(lengthOfLastWord('" a"'));
// debugger