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
    },

    // pop

    'If no head, return undefined.': function () {
        let list = new DoublyLinkedList();
        let result = list.pop();
        eq(result, undefined);
    },

    'If length is 1, set head and tail to be null and return removed node value.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        let valueOfRemovedNode = list.pop();
        eq(list.head, null);
        eq(list.tail, null);
        eq(valueOfRemovedNode, "one");
    },

    'Set node before tail to be the new tail.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        list.pop();
        eq(list.tail.val, "one");
    },

    'Set new tail\'s next property to be null.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        list.pop();
        eq(list.tail.next, null);
    },

    'Decrement length.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        list.pop();
        eq(list.length, 1);
    },

    'Return removed node val.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        let result = list.pop();
        eq(result, "two");
    },

    // shift

    'Return undefined if length is 0.': function () {
        let list = new DoublyLinkedList();
        let result = list.shift();
        eq(result, undefined);
    },

    'If length is 1, set head and tail to null and return val of old head.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.shift();
        eq(list.head, null);
        eq(list.tail, null);
    },

    'Set head to be the next of old head.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        list.shift();
        eq(list.head.val, 'two');
    },

    'Set head prev property to be null.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        list.shift();
        eq(list.head.prev, null);
    },

    'Shift should decrement length.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        list.shift();
        eq(list.length, 1);
    },

    'Shift should return the value of old head.': function () {
        let list = new DoublyLinkedList();
        list.push("one");
        list.push("two");
        let result = list.shift();
        eq(result, 'one');
    }
});









