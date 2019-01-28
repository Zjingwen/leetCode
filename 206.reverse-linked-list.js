/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (56.29%)
 * Total Accepted:    29.1K
 * Total Submissions: 51.7K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
var reverseList = function(head) {
  let current = null;
  let node = null;
  let i = [];

  while(head){
    i.unshift(head.val);
    head = head.next;
  };

  function ListNode(val) {
    this.val = val;
    this.next = null;
  };
  
  while(i.length){
    if(node){
      while (current.next != null) {
        current = current.next;
      }
      current.next = new ListNode(i.shift());
    }else{
      node = new ListNode(i.shift());
      current = node;
    }
  }
  return node;
};

