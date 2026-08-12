/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let newHead = new ListNode(0, null);
        let dummy = newHead;
        while (list1 && list2) {
           if (list1.val < list2.val) {
                newHead.next = list1;
                list1 = list1.next
           } else {
                newHead.next = list2;
                list2 = list2.next;
           }
           newHead = newHead.next;
        }
        if (list1) {
            newHead.next = list1;
        } else {
            newHead.next = list2;
        }
        return dummy.next;
    }
}
