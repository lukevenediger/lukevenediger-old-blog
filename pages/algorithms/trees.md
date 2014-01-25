<!-- 
title=Trees
template=Algorithms
wikipedia=http://en.wikipedia.org/wiki/Tree_data_structure
menu=projects
-->
A tree is a collection of nodes that are linked by edges so that there is **exactly one** path
between any two nodes. Since every node is linked by an edge it follows that a tree with
N nodes will have N-1 edges.

### Trees with a Root Node
Giving a tree a root node is the same as introducing another dimension: depth. The root node
is a tree at depth zero, while all child nodes are at depth one, two and so on. Rooting a
tree also introduces ownership, such that the root node is the parent of all nodes beneath it,
a node that has a parent is called a child, and two nodes that share the same parent are
siblings. It might follow that children at the same depth are called cousins, since they will
eventually all have the same parent.

### In Computer Science
Unlike other data structures, such as [linked lists](linked_lists.html), trees have vastly different
asymptotic operation times when doing reads versus writes, allowing them to cluster common nodes together
while still providing highly performant access times.

## Binary Search Trees
A Binary Search Tree is a rooted tree where each node can have up to two children and the value of a
node is greater than its left child and less than its right child.  

