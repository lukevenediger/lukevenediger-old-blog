<!--
    title=Binary Heap
    template=Algorithms
    wikipedia=http://en.wikipedia.org/wiki/Binary_heap
    menu=projects

    readTime=-
    insertTime=O(1) / O(log n)
    deleteTime=O(log n) / O(log n)
-->
A binary heap is binary tree that has the following properties:

* Each node has at most two children
* The value of a node's child is always less than that of the node itself

Interestingly, and unlike a [binary search tree](binary_search_tree.html), there is no requirement
that the left child be less than the right child of a node.

### Regular Structure
A heap is usually represented using an array, because there is a predictable (formal) way of going
from a node to its left and right child. This makes it less memory intensive because there's no
need to store pointers to child nodes.

### Finding Nodes
For any node at position _i_, where i is a zero-based index into an array of length _n_
 
* The left node will be at _2n + 1_
* the right node will be at _2n + 2_