/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    if(head == null) return;
    
    let current = head;
    let pfast = head;
    
    while(pfast !== null && pfast.next !== null){
        pfast = pfast.next.next;
        current = current.next;
    }
    return current
};