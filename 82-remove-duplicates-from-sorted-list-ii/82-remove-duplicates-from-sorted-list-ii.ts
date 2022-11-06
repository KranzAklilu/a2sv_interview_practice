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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let dummy = new ListNode()
    dummy.next =head;
    
    let prevPointer = dummy;
    while(head !== null){
        if(head.next !== null && head.val === head.next.val){
            while(head.next !== null && head.val === head.next.val){
                head = head.next
            }
            prevPointer.next = head.next
        }else {
            prevPointer = head;
        }
        
        head = head.next
    }
    return dummy.next
};