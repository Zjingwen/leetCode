/*
 * [1] Two Sum
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (42.35%)
 * Total Accepted:    113.1K
 * Total Submissions: 267.1K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let next = null;
    let prev = null;
    let index = 0;

    while(index < nums.length){
      nums.forEach((v,i)=>{
        if(i > index && nums[index]+v == target){
          next = nums[index];
          prev = v;
        };
      });
      index++;
    };

    return [nums.indexOf(next),nums.indexOf(prev,nums.indexOf(next)+1)]
};