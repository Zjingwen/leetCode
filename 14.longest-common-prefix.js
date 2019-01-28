/*
 * [14] Longest Common Prefix
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (28.80%)
 * Total Accepted:    20.9K
 * Total Submissions: 72.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(!strs.length) return '';

  let next = strs.shift();
  let swi = true;
  let index = 1;
  let len = null;
    
  strs.forEach((v,i)=>{
    if(v.length < next.length){
      strs.push(next);
      next = strs[i];
      strs.splice(i,1);
    }
  });

  while(index <= next.length){
    swi = strs.every((v)=>{
      return v.substring(0,index) == next.substring(0,index);
    });
    if(swi){
      len = index;
    }
    index++;
  }

  return next.substring(0,len);
};
