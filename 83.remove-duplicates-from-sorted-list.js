/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (42.35%)
 * Total Accepted:    13.4K
 * Total Submissions: 31.6K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if(head == null) return head;

  let current = head;
  while(current.next){
    if(current.val == current.next.val){
      current.next = current.next.next;
    }else{
      current = current.next;
    }
  };
  return head;
};
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// };
// function LinkedList(arr) {
//   let head = null;
//   arr.forEach((v, i) => {
//     let node = new ListNode(v);
//     let current = null;
//     if (i == 0) {
//       head = node;
//     } else {
//       current = head;
//       while (current.next) {
//         current = current.next;
//       };
//       current.next = node;
//     }
//   });
//   return head;
// };
// deleteDuplicates(LinkedList([1, 1, 2]));
// debugger
