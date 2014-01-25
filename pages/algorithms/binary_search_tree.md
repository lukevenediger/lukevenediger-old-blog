<!--
    title=Binary Search Tree
    template=algorithms
    menu=project
    wikipedia=http://en.wikipedia.org/wiki/Binary_search_tree

    readTime=O(log n) / O(n)
    insertTime=O(log n) / O(n)
    deleteTime=O(log n) / O(n)
-->
A Binary Search Tree is a tree where:

* Every node can have at most two children
* A node's left child has a lesser value
* A node's right child has a greater value
* Every subtree is also a Binary Search Tree

### Balanced Binary Tree
A balanced binary tree has the same number of child nodes on both sides. A balanced tree ensures that the
worst-case search time for a value is O(log n). A tree that isn't balanced at all behaves like a linked list
with a worst-case search time of O(n).