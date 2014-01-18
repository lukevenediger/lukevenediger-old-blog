/**
 * Linked Lists example implementation
 */

/**
 * Create a linked list
 * @param {number} size
 */
var createLinkedList = function (size) {
    var head = new LinkNode(_.random(100));
    var tail = head;
    _.range(size - 1).forEach(function () {
        tail.next = new LinkNode(_.random(100));
        tail = tail.next;
    });
    return head;
};

/**
 * Create a cyclic linked list.
 */
var createCyclicLinkedList = function (size) {
    var list = createLinkedList(size);
    tail(list).next = list;
    return list;
};

/**
 * Determines if this linked list is cyclic
 * @param {ListNode} head
 */
var isCyclic = function (head) {
    var tortoise = head;
    var rabbit = head.next;
    while (true) {
        if (rabbit === null || rabbit.next === null) {
            return false;
        }
        if (rabbit === tortoise /* We caught up with the tortoise */
            || rabbit.next === tortoise /* We're behind the tortoise when we had started infront */) {
            return true;
        }
        // Advance
        rabbit = rabbit.next.next;
        tortoise = tortoise.next;
    }
};

$('#create').click(function () {
    var list = createLinkedList(5);
    window.list = list;
    print('List created as window.list.');
    print(list);
});

$('#createCyclic').click(function () {
    window.list = createCyclicLinkedList(5);
    print('List created as window.list. Printing it will lock your browser up ;)');
});

$('#isCyclic').click(function () {
    if (!window.list) {
        print('Create a list first.');
        return;
    }
    var result = isCyclic(window.list);
    print(result ? 'List is cyclic' : 'List is acyclic');
});

$('#clear').click(function () {
    $('#output').empty();
});
