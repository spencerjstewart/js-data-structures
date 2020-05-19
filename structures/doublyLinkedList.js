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

    /**
     * If length is 0, return undefined.
     * Store current head.
     * If length is 1, set head and tail to null.
     * Set head to be next of old head.
     * Set head prev property to null.
     * Decrement length.
     * Return value of old head.
     */
    shift () {
        if (this.length === 0) {
            return undefined;
        }

        let removedHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return removedHead.val;
        }

        this.head = removedHead.next;
        this.head.prev = null;

        this.length--;

        return removedHead.val;
    }

    /**
     * If length is 0
     *     set head to new node
     *     set tail to new node
     * Else
     *     set prev on head to new node
     *     set next on new node to head
     *     update head to new node
     * Increment length
     * Return list
     */
    unshift (data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }
}







