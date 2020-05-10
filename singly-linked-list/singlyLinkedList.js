/**
 * SinglyLinkedList consists of a head, tail, and length property.
 * The head and tail property contain Node or null.
 *
 * Each Node consists of a val and next property.
 * The val property contains arbitrary data.
 * The next property contains a reference to the next node or null.
 *
 * Implement:
 * - create
 * - insertion
 * - removal
 * - search
 *
 * linked lists vs. arrays:
 * Lists:
 * - not indexed
 * - no random access
 * - connected via nodes with a next pointer
 * Arrays:
 * - indexed in order
 * - possibly expensive insertion and deletion
 * - fast access using index
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
     * - Increment length of list.
     * - Return the list.
     * @param data - arbitrary data
     * @returns {SinglyLinkedList}
     */
    push (data) {
        if (data === undefined) {
            throw new Error('Parameter data is undefined.');
        }

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

    /**
     * Pseudocode:
     * - Accept one argument.
     * - Create a new node using argument.
     * - If no head, set head and tail to be the newly created node.
     * - Else set the newly created node's next property to be the current head.
     * - Set the head property to be the newly created node.
     * - Increment length of list.
     * - Return list.
     */
    unshift (data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }
}
















