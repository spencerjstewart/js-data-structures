/*
    Linked list contains a head, tail, and length property.

    Linked list consists of nodes, and each node has a value
    and a pointer to another node or null.

    Implement:
    - create
    - insertion
    - removal
    - search

    linked lists vs. arrays:
        Lists:
            - not indexed
            - no random access
            - connected via nodes with a next pointer
        Arrays:
            - indexed in order
            - possibly expensive insertion and deletion
            - fast access using index

 */

/**
 * val: piece of data
 * next: reference to next node
 */
class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Pseudocode:
     * - Accept a value
     * - Create a new node using the value passed to the function.
     * - If no head, set head and tail to new node.
     * - Else set next property of tail to be new node
     *     and set
     * - Increment length of list.
     * - Return the list.
     * @param data - arbitrary data
     * @returns {SinglyLinkedList}
     */
    push (data) {
        if (this.head === null) {
            this.head = new Node(data);
            this.tail = this.head;
        }

        if (this.length === 1) {
            let newNode = new Node(data);
            this.head.next = newNode;
            this.tail = newNode;
        }

        if (this.length > 1) {
            let newNode = new Node(data);
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    /**
     * Pseudocode:
     * - If no nodes, return undefined.
     * - Loop through list until tail.
     * - Set the next property of the 2nd to last node to be null.
     * - Set the tail to be the 2nd to last node.
     * - Decrement length of list.
     * - Return the value of the node removed.
     */
    pop () {
        if (this.length === 0) {
            return undefined;
        }

        let pre = this.head;

        while (pre.next.next) {
            pre = pre.next;
        }

        this.tail = pre;
        let removedNode = this.tail.next;
        this.tail.next = null;

        this.length--;

        return removedNode.val;
    }

    /**
     * Pseudocode:
     * - If no nodes, return undefined.
     * - Store the current head in a variable.
     * - Set the head to be the current head's next property.
     * - Decrement length of list.
     * - Return the value of the removed node.
     */
    shift () {
        if (this.length === 0) {
            return undefined;
        }

        let removedHead = this.head;

        this.head = this.head.next;

        this.length--;

        return removedHead.val;
    }

}

let list = new SinglyLinkedList();

list.push("one")
    .push("two")
    .push("three")
    .push("four");

console.log(list.pop());
console.log(list.shift());











