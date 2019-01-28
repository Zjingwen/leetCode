/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (58.65%)
 * Total Accepted:    14.3K
 * Total Submissions: 24.4K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(!numRows) return [];
  if(numRows == 1) return [[1]];
  if(numRows == 2) return [[1],[1,1]];

  let col = [[1],[1,1]];

  for(let j = 3; j < numRows+1;j++){
    col.push([]);
    for(let i = 0; i< j;i++){
      if(i == 0) {
        col[j-1][0] = 1;
      } else if(i == j-1){
        col[j-1][j-1] = 1;
      } else{
        // console.log(`(${j-1-1},${i-1}),(${j-1-1},${i})`);
        // console.log(col[j-1-1][i-1])
        // console.log(col[j-1-1][i])
        // console.log('---------');
        col[j-1].push(col[j-1-1][i-1]+col[j-1-1][i]);
      }
    }
  };

  return col;
};
// const end = generate(6);
// console.log(JSON.stringify(end));
