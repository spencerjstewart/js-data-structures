tests({

    // push

    'If head is null, set head and tail to be newly created node.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        eq(list.head.val, "one");
        eq(list.tail.val, "one");
    },

    'If head is not null, set next property of the tail to be the new node.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        eq(list.head.val, "one");
        eq(list.head.next.val, "two");
    },

    'If head is not null, set the prev property of the new node to be tail.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        eq(list.head.val, "one");
        eq(list.tail.prev.val, "one");
    },

    'Set the tail to be the new node.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        eq(list.tail.val, "two");
    },

    'Increment length.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        eq(list.length, 2);
    },

    'Return the list.': function () {
        let list = new DoublyLinkedList();
        let list2 = list.push("one");
        eq(list, list2);
    }
});