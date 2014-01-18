/// <reference path="../../../static/scripts/underscore.js" />
/**
 * Print the string into the output area
 */
var print = function (message) {
    if (_.isArray(message) || _.isObject(message)) {
        message = JSON.stringify(message, null, ' ');
    }
    $('#output').append($('<pre/>').text(message));
};

/**
 * One link with a value and a next pointer
 * @constructor
 * @param {ANY} value
 * @param {LinkNode} next
 */
var LinkNode = function (value, next) {
    this.value = value;
    this.next = next || null;
    this.toString = function () {
        return value;
    };
};

/**
 * Seeks to the tail of an acyclic linked list
 */
var tail = function(head) {
    var node = head;
    while(true) {
        if (node.next === null){
            return node;
        }
        node = node.next;
    }
};