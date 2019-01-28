/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (34.46%)
 * Total Accepted:    13.7K
 * Total Submissions: 39.7K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(!head) return true;
  let s = head;
  let f = head;

  while(f && f.next && f.next.next) {
      s = s.next;
      f = f.next.next;
  }
  let right = s.next;
  s.next = null;

  let current = right;
  let last = null;
  while(current){
    const next = current.next;
    current.next = last;
    last = current;
    current = next;
  }

  a = head;
  b = last;

  while(a && b) {
    if(a.val !== b.val) {
      return false;
    }
    a = a.next;
    b = b.next;
  }
  return true;
};
// isPalindrome({"val":1,"next":{"val":2,"next":null}});
