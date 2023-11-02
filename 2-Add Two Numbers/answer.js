/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
 
    const reverseList = (list) => {
        let prev=null
        let curr=list
        let next

        while(curr){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        return prev
    }   

    const listToNum = (list) => {
        let num=''
        while(list){
            num+=(list.val).toString()
            list=list.next
        }
        return BigInt(num)
    }

    let list1=listToNum(reverseList(l1))
    let list2=listToNum(reverseList(l2))

    let sumArrays=Array.from((list1+list2).toString()).reverse().map(Number)
    let prevNode=new ListNode()
    let headNode=prevNode

    for(let i=0; i<sumArrays.length ;i++){
        const currNode= new ListNode(sumArrays[i])
        prevNode.next=currNode
        prevNode=currNode
    }
    return (headNode.next)
};