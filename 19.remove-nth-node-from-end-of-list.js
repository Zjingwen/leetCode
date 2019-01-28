/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (31.35%)
 * Total Accepted:    25.5K
 * Total Submissions: 81.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let L = head;
  let i = [];
  let List = null;
  let current = null;

  while (L) {
    i.push(L.val);
    L = L.next;
  };
  i.splice(i.length-n,1);

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  for(s of i){
    if(!List){
      List = new ListNode(s);
      current = List;
      continue;
    }
    current.next = new ListNode(s);
    current = current.next;
  };

  return List;
};
// let list = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
// let num = 2;
// removeNthFromEnd(list,num);