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
            throw new Error(`Parameter 'data' is undefined.`);
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
     * - If length of list is 1, return tail, set head and tail to null.
     * - Loop through list until tail.
     * - Set the next property of the 1st to last node to be null.
     * - Set the tail to be the 1st to last node.
     * - Decrement length of list.
     * - Return the value of the node removed.
     * @returns {Node.val}
     */
    pop () {
        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            let removedNode = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedNode.val;
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
     * @returns {Node.val}
     */
    shift () {
        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            let removedHead = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedHead.val;
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
     * @returns {SinglyLinkedList}
     */
    unshift (data) {
        if (data === undefined) {
            throw new Error(`Parameter 'data' is undefined.`);
        }

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

    /**
     * Pseudocode:
     * - Accept a 0-based index.
     * - Return null if index < 0 or index >= this.length
     * - Loop through list until reaching the index and return the node at that index.
     * @returns {Node}
     */
    get (index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let previousNode = this.head;
        let nextNode = null;
        for (let i = 0; i < this.length; i++) {
            if (i !== index) {
                previousNode = previousNode.next;
                nextNode = previousNode.next;
            } else {
                return previousNode;
            }
        }
    }

    /**
     * Pseudocode:
     * - Accept some data and a 0-based index.
     * - Use get() to find the node.
     * - If node not found, return false.
     * - If node is found, set the value of the node to be the value passed to the function and return true.
     */
    set (data, index) {
        let node = this.get(index);
        if (node) {
            node.val = data;
            return true;
        } else {
            return false;
        }
    }

    /**
     * Pseudocode:
     * - Accept some data and a 0-based index.
     * - If the index is < 0 || >= this.length, return false.
     * - If the index is the same as the length, push a new node to the end of the list.
     * - If the index is 0, behavior is same as unshift.
     * - Else use get method to access node at index - 1.
     * - Set next property on index - 1 node to be the new node.
     * - Set the next property on newly created node to be next node of the index - 1 node.
     * - Increment length of list.
     * - Return true. 
     */

    insert (data, index) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === this.length) {
            this.push(data);
            return true;
        }

        if (index === 0) {
            this.unshift(data);
            return true;
        }

        let newNode = new Node(data);
        newNode.next = this.get(index - 1).next;
        this.get(index - 1).next = newNode;

        this.length++;
        return true;
    }

    remove (index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        let nodeToBeRelinked = this.get(index - 1);
        let unlinkedNode = nodeToBeRelinked.next;
        nodeToBeRelinked.next = unlinkedNode.next;

        this.length--;

        return unlinkedNode.val;
    }
}























