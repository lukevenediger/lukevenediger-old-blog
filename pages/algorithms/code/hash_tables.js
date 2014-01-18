/// <reference path="common.js" />
/**
 * Stores values by key and allows for fast lookup.
 * Only supports positive integer-based keys.
 * @constructor
 */
var Hashtable = function () {
    var me = this;

    // Begin life with 10 buckets
    this.buckets = new Array(5);
    this.capacityBeforeIncrease = this.buckets.length * 2; // double the number of buckets
    this.itemCount = 0;

    /**
     * Add a key-value pair
     * @param {number} key
     * @param {ANY} value
     */
    this.add = function (key, value) {
        if (this.itemCount + 1 > this.capacityBeforeIncrease) {
            this.increaseCapacity();
        }
        var hashCode = this.hash(key);
        if (this.buckets[hashCode]) {
            tail(this.buckets[hashCode]).next = new LinkNode({ key: key, value: value });
        } else {
            this.buckets[hashCode] = new LinkNode({ key: key, value: value });
        }
        this.itemCount++;
    };

    /**
     * Get a value based on the key
     * @param {number} key
     * @returns {ANY}
     */
    this.get = function (key) {
        var hashCode = this.hash(key);
        if (!this.buckets[hashCode]) {
            return undefined;
        }
        var node = this.buckets[hashCode];
        do {
            if (node.value.key === key) {
                return node.value.value;
            }
        } while ((node = node.next) !== null)
        return undefined;
    };


    /**
     * Compresses (hashes) a key to a hash code
     * @param {number} key
     * @returns {number} the hashcode
     */
    this.hash = function (key) {
        return key % this.buckets.length;
    };

    /**
     * Increase the capacity of the hashtable
     */
    this.increaseCapacity = function () {
        // Double our current capacity
        var oldBuckets = this.buckets;
        this.buckets = new Array(oldBuckets.length * 2);
        this.capacityBeforeIncrease = this.buckets.length * 2;
        print('Increasing capacity from ' + oldBuckets.length + ' to ' + this.buckets.length);
        // Rehash all values and find a new home for them
        oldBuckets.forEach(function (head) {
            var node = head;
            do {
                me.add(node.value.key, node.value);
            } while((node = node.next) !== null)
        });
    };
};

var initialiseExample = function () {
    window.exampleHash = new Hashtable();
    updateStats();
    printHashTable();
};

var updateStats = function () {
    $('#numBuckets').text(window.exampleHash.buckets.length);
    $('#numValues').text(window.exampleHash.itemCount);
};

var printHashTable = function () {
    $('#output').empty();
    print(exampleHash.buckets);
};

$('#add').click(function () {
    exampleHash.add($('#key')[0].valueAsNumber, $('#value').text());
    updateStats();
    printHashTable();
});

$('#addRandom').click(function () {
    var uniqueID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    exampleHash.add(_.random(1000), uniqueID);
    updateStats();
    printHashTable();
});

$('#fetch').click(function() {
    var value = exampleHash.get($('#fetchKey')[0].valueAsNumber);
    if (value !== undefined) {
        $('#valueFound').text(value); // pretending that all values are strings
    } else {
        $('#valueFound').text("Not found!");
    }
});

$('#restart').click(function () {
    $('#output').empty();
    $('#valueFound').empty();
    initialiseExample();
});

initialiseExample();