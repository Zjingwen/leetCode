/*
 * [20] Valid Parentheses
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (32.38%)
 * Total Accepted:    17.7K
 * Total Submissions: 54.8K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   let map = ['()', '[]', '{}'];
//   let arr = s.split('');
//   let len = arr.length - 1;
  
//   if(arr.length == 1 && arr[0] == '') return true;
//   if(arr.length % 2 !== 0) return false;

//   function search(val,index){
//     // debugger
//     if(index == 0){
//       return map.some(v => v == val+arr[index+1] || v == val+arr[len - index]);
//     }

//     if(index == len){
//       return map.some(v => v == arr[index-1]+val || v == arr[len - index]+val);
//     }

//     return map.some((v) => {
//       return v == val+arr[index+1] || v == arr[index-1]+val || v == val+arr[len - index] || v == arr[len - index]+val ;
//     });
//   };
 
//   return arr.every((v,i)=>{
//     return search(v,i);
//   })
// };

var isValid = function(s){
  let stack = [];
  let arr = s.split('');

  for(let i in arr){
    if (arr[i] == '(') stack.push(')');
    else if (arr[i] == '{') stack.push('}');
    else if (arr[i] == '[') stack.push(']');
    else if (!stack.length || stack.pop() != arr[i]) return false;
  }

  return new Boolean(!stack.length);
}

// let end1 = isValid('()') == true;
// let end2 = isValid('()[]{}') == true;
// let end3 = isValid('(]') == false;
// let end4 = isValid('([)]') == false;
// let end5 = isValid('{[]}') == true;
// let end6 = isValid('({[]})') == true;
// let end7 = isValid('(){') == false;
// let end8 = isValid('') == true;
// let end9 = isValid('{{)}') == false;
// let ene10 = isValid('(([]){})') == true;
// debugger