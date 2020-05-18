/**
 * Identical to singly linked lists except every Node has another pointer to the previous Node.
 */

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * - Create new node with value passed to function.
     * - If head is null, set head and tail to be new node.
     * - Else set the next property of tail to be the new node.
     * - Set the prev property of new node to be tail.
     * - Set tail to be new node.
     * - Increment length
     * - Return list.
     */
    push (data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail.next.prev = this.tail;
        this.tail = newNode;

        this.length++;

        return this;
    }

    /**
     * If no head, return undefined.
     * If length is 1, set head and tail to be null.
     * Set node before tail to be tail.
     * Set new tail's next property to null.
     * Decrement length.
     * Return removed node val.
     */
    pop () {
        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            let dereferencedNodeVal = this.head.val;
            this.head = null;
            this.tail = null;
            return dereferencedNodeVal;
        }

        let dereferencedNodeVal = this.tail.val;
        this.tail = this.tail.prev;
        this.tail.next = null;

        this.length--;

        return dereferencedNodeVal;
    }
}







