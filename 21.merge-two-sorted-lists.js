/*
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (49.16%)
 * Total Accepted:    19K
 * Total Submissions: 38.6K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let list = new ListNode(0);
  let i = list;
  while(l1 !== null && l2 !== null){
      if(l1.val < l2.val){
          i.next = l1;
          i = i.next;
          l1 = l1.next;
      }else{
          i.next = l2;
          i = i.next;
          l2 = l2.next;
      }
  }

  if(l1 == null){
      i.next = l2;
  }else{
      i.next = l1;
  }
  return list.next;
};