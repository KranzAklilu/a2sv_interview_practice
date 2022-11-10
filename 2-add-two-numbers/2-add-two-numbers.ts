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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1 === null || l2 === null){
        return null
    }
    let dummyL = new ListNode();
    let current = dummyL;
    let carry = 0;
    
    while(l1 !== null || l2!== null || carry !== 0){
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        let sum = val1 + val2 + carry;
        
        carry = Math.floor(sum / 10);
        console.log(sum, carry)
        if(carry === 1){
            current.next= new ListNode(parseInt(String(sum).split('')[1]));
        }else {
        current.next= new ListNode(sum);
        }
        current = current.next
        
        if(l1 !== null){
        l1 = l1.next    
        }
        if(l2 !== null){
        l2 = l2.next
        }
    }
    
    return dummyL.next
};