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

    'SinglyLinkedList\'s push instance method should accept one argument and creates a new node using the value passed to the argument. If head is null, set the head and tail to the new node passed in.': function () {
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

    'SinglyLinkedList\'s push instance method should increment the length of the SinglyLinkedList.': function () {
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
    }
});