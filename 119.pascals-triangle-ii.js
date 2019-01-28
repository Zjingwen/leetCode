/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (52.65%)
 * Total Accepted:    8.5K
 * Total Submissions: 16.2K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(!rowIndex) return [1];
  if(rowIndex == 1) return [1,1];
  // if(rowIndex == 2) return [[1],[1,1]];

  let col = [[1],[1,1]];

  for(let j = 3; j <= rowIndex+1;j++){
    col.push([]);
    for(let i = 0; i< j;i++){
      if(i == 0) {
        col[j-1][0] = 1;
      } else if(i == j-1){
        col[j-1][j-1] = 1;
      } else {
        col[j-1].push(col[j-1-1][i-1]+col[j-1-1][i]);
      }
    }
  };

  return col[3];
};
// const end = getRow(3);
// console.log(JSON.stringify(end));
