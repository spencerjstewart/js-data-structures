tests({
    'SinglyLinkedList should have a constructor with properties head, tail, and length that default to null, null, and 0 respectively.': function () {
        let list = new SinglyLinkedList();
        assertStrictEquals(list.head, null);
        assertStrictEquals(list.tail, null);
        assertStrictEquals(list.length, 0);
    },

    'Node should have a constructor that accepts one argument val with properties val and next that will be set to the argument passed in and null.': function () {
        let node = new Node('one');
        assertStrictEquals(node.val, 'one');
        assertStrictEquals(node.next, null);
    },

    /**
     * push()
     */

    'SinglyLinkedList\'s push instance method should accept one argument and creates a new node using the argument passed. If head is null, set the head and tail to the newly created node.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        assertStrictEquals(list.head.val, 'one');
        assertStrictEquals(list.tail.val, 'one');
    },

    'SinglyLinkedList\'s push instance method should set the next property of tail to be the new node if head contains a Node.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        list.push('two');
        assertStrictEquals(list.head.val, 'one');
        assertStrictEquals(list.tail.val, 'two');
    },

    'SinglyLinkedList\'s push instance method should increment the length of the SinglyLinkedList instance.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        assertStrictEquals(list.length, 1);
    },

    'SinglyLinkedList\'s push instance method should throw an Error if no argument is passed in.': function () {
        let list = new SinglyLinkedList();
        let threwError = false;
        try {
            list.push();
        } catch {
            threwError = true;
        }
        assertStrictEquals(threwError, true);
    },

    'SinglyLinkedList\'s push instance method should return the list.': function () {
        let list = new SinglyLinkedList();
        let shouldBeSameList = list.push('one');
        assertStrictEquals(list, shouldBeSameList);
    },

    /**
     * pop()
     */

    'SinglyLinkedList\'s pop instance method should return undefined if there are no nodes on the instance.': function () {
        let result = new SinglyLinkedList().pop();
        assertStrictEquals(result, undefined);
    },

    'SinglyLinkedList\'s pop instance method should return the value of the tail property and set the head and tail property to null if the length is 1.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        let result = list.pop();
        assertStrictEquals(result, 'one');
        assertStrictEquals(list.head, null);
        assertStrictEquals(list.tail, null);
    },

    'SinglyLinkedList\'s pop instance method should set the next property of the 1st to last node to be null.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        list.push('two');
        list.push('three');
        assertStrictEquals(list.head.next.next.val, 'three');
        list.pop();
        assertStrictEquals(list.head.next.next, null);
    },

    'SinglyLinkedList\'s pop instance method should set the tail to be the 1st to last node.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        list.push('two');
        list.push('three');
        assertStrictEquals(list.tail.val, 'three');
        list.pop();
        assertStrictEquals(list.tail.val, 'two');
    },

    'SinglyLinkedList\'s pop instance method should decrement the length of the instance.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        assertStrictEquals(list.length, 1);
        list.pop();
        assertStrictEquals(list.length, 0);
    },

    'SinglyLinkedList\'s pop instance method should return the value of the removed node.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        let result = list.pop();
        assertStrictEquals(result, 'one');
    },

    /**
     * shift()
     */

    'SinglyLinkedList\'s shift instance method should return undefined if there are no nodes on the instance.': function () {
        let result = new SinglyLinkedList().shift();
        assertStrictEquals(result, undefined);
    },

    'SinglyLinkedList\s shift instance method should return the value of the head property and set the head and tail to be null if the length of the instance is 1.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        let result = list.shift();
        assertStrictEquals(result, 'one');
        assertStrictEquals(list.head, null);
        assertStrictEquals(list.tail, null);
    },

    'SinglyLinkedList\s shift instance method should set the head to be the current head\'s next property': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        list.push('two');
        assertStrictEquals(list.head.val, 'one');
        assertStrictEquals(list.tail.val, 'two');
        list.shift();
        assertStrictEquals(list.head.val, 'two');
        assertStrictEquals(list.tail.val, 'two');
    },

    'SinglyLinkedList\'s shift instance method should decrement the length property of the instance.': function () {
        let list = new SinglyLinkedList();

        list.push('one');
        list.shift();
        assertStrictEquals(list.length, 0);

        list.push('one');
        list.push('two');
        list.shift();
        assertStrictEquals(list.length, 1);
    },

    'SinglyLinkedList\'s shift instance method should return the value of the removed node.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        let result = list.shift();
        assertStrictEquals(result, 'one');
    },

    /**
     * unshift()
     */

    'SinglyLinkedList\'s unshift instance method should accept one argument and create a new node using the argument passed in. If head is null, set the head and tail to the newly created node.': function () {
        let list = new SinglyLinkedList();
        list.unshift('one');
        assertStrictEquals(list.head.val, 'one');
        assertStrictEquals(list.tail.val, 'one');
    },

    'SinglyLinkedList\'s unshift instance method should set the newly created node\'s next property to be the current head.': function () {
        let list = new SinglyLinkedList();
        list.unshift('one');
        list.unshift('two');
        assertStrictEquals(list.head.val, 'two');
        assertStrictEquals(list.head.next.val, 'one');
    },

    'SinglyLinkedList\'s unshift instance method should increment the length property of the instance.': function () {
        let list = new SinglyLinkedList();
        list.unshift('one');
        assertStrictEquals(list.length, 1);
    },

    'SinglyLinkedList\'s unshift instance method should return the instance.': function () {
        let list = new SinglyLinkedList();
        let returnedList = list.unshift('one');
        assertStrictEquals(list, returnedList);
    },

    'SinglyLinkedList\'s unshift instance method should throw an error if no argument is passed in.': function () {
        let list = new SinglyLinkedList();
        let threwError = false;
        try {
            list.unshift();
        } catch {
            threwError = true;
        }
        assertStrictEquals(threwError, true);
    },

    /**
     * get()
     */

    'SinglyLinkedList\'s get instance method should accept an argument called index. If the index is <0 || >= the instance\'s length property, return null.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        let resultOfMinusOne = list.get(-1);
        assertStrictEquals(resultOfMinusOne, null);
        let resultOfEqualToListLength = list.get(list.length);
        assertStrictEquals(resultOfEqualToListLength, null);
    },

    'SinglyLinkedList\'s get instance method should loop through list starting at the head and return the node at the passed in index.': function () {
        let list = new SinglyLinkedList();

        list.push('one');
        list.push('two');
        list.push('three');
        list.push('four');

        let result = list.get(0);
        eq(result.val, 'one');

        result = list.get(1);
        eq(result.val, 'two');

        result = list.get(2);
        eq(result.val, 'three');

        result = list.get(3);
        eq(result.val, 'four');

        result = list.get(4);
        eq(result, null);
    },

    /**
     * set()
     */

    'SinglyLinkedList\'s set method should accept some data and a 0-based index. If node not found at the index, return false.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        let result = list.set('something', 1);
        eq(result, false);
    },

    'SinglyLinkedList\'s set method should return true if node is found at the index passed in as the second argument.': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        let result = list.set('something', 0);
        eq(result, true);
    },

    'SinglyLinkedList\'s set method should set the value of the node found to be the value passed in as the first argument and return ': function () {
        let list = new SinglyLinkedList();
        list.push('one');
        list.set('something', 0);
        eq(list.get(0).val, 'something');
    }
});















