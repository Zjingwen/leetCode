/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (34.69%)
 * Total Accepted:    18.4K
 * Total Submissions: 53K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = new Map();
  let index = -1;
  for(i of s){
    let j = 0;
    if(map.has(i)){
      j = map.get(i);
      map.set(i,++j);
    }else{
      map.set(i,j);
    }
  };

  for (let key of map) {
    if(key[1] == 0){
      index = s.indexOf(key[0]);
      break;
    }
  };

  return index;
};
// firstUniqChar("loveleetcode")
