tests({
    'SinglyLinkedList should have a constructor with properties head, tail, and length that default to null, null, and 0 respectively.': function () {
        let list = new SinglyLinkedList();
        eq(list.head, null);
        eq(list.tail, null);
        eq(list.length, 0);
    },

    'Node should have a constructor that accepts one argument val with properties val and next that will be set to the argument passed in and null.': function () {
        let node = new Node('one');
        eq(node.val, 'one');
        eq(node.next, null);
    },

    /**
     * push()
     */

    'SinglyLinkedList\'s push instance method should accept one argument and creates a new node using the argument passed. If head is null, set the head and tail to the newly created node.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        eq(list.head.val, 'one');
        eq(list.tail.val, 'one');
    },

    'SinglyLinkedList\'s push instance method should set the next property of tail to be the new node if head contains a Node.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        list.push('two');
        eq(list.head.val, 'one');
        eq(list.tail.val, 'two');
    },

    'SinglyLinkedList\'s push instance method should increment the length of the SinglyLinkedList instance.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        eq(list.length, 1);
    },

    'SinglyLinkedList\'s push instance method should throw an Error if no argument is passed in.': function () {
        let list = new SinglyLinkedList();
        let threwError = false;
        try {
            list.push();
        } catch {
            threwError = true;
        }
        eq(threwError, true);
    },

    'SinglyLinkedList\'s push instance method should return the list.': function () {
        let list = new SinglyLinkedList();
        let shouldBeSameList = list.push('one');
        eq(list, shouldBeSameList);
    },

    /**
     * pop()
     */

    'SinglyLinkedList\'s pop instance method should return undefined if there are no nodes on the instance.': function () {
        let result = new SinglyLinkedList().pop();
        eq(result, undefined);
    },

    'SinglyLinkedList\'s pop instance method should return the value of the tail property and set the head and tail property to null if the length is 1.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        let result = list.pop();
        eq(result, 'one');
        eq(list.head, null);
        eq(list.tail, null);
    },

    'SinglyLinkedList\'s pop instance method should set the next property of the 1st to last node to be null.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        list.push('two');
        list.push('three');
        eq(list.head.next.next.val, 'three');
        list.pop();
        eq(list.head.next.next, null);
    },

    'SinglyLinkedList\'s pop instance method should set the tail to be the 1st to last node.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        list.push('two');
        list.push('three');
        eq(list.tail.val, 'three');
        list.pop();
        eq(list.tail.val, 'two');
    },

    'SinglyLinkedList\'s pop instance method should decrement the length of the instance.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        eq(list.length, 1);
        list.pop();
        eq(list.length, 0);
    },

    'SinglyLinkedList\'s pop instance method should return the value of the removed node.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        let result = list.pop();
        eq(result, 'one');
    },

    /**
     * shift()
     */
    'SinglyLinkedList\'s shift instance method should return undefined if there are no nodes on the instance.': function () {
        let result = new SinglyLinkedList().shift();
        eq(result, undefined);
    },

    'SinglyLinkedList\s shift instance method should return the value of the head property and set the head and tail to be null if the length of the instance is 1.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        let result = list.shift();
        eq(result, 'one');
    },

    /**
     * unshift()
     */
    'SinglyLinkedList\'s unshift instance method should accept one argument and create a new node using the argument passed in. If head is null, set the head and tail to the newly created node.': function () {
        let list = new SinglyLinkedList();
        list.unshift('one');
        eq(list.head.val, 'one');
        eq(list.tail.val, 'one');
    }
});