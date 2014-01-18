<!--
    Title=Linked Lists
    template=algorithms
    menu=projects
    wikipedia=http://en.wikipedia.org/wiki/Linked_list
-->
Linked lists provide a way to store a long chain of data without having to pre-allocate
how much space will be needed upfront. A linked list differs from an array in where and
how the data is stored.

## Playpen
<p>
   <button id="create">Create Linked List</button>
   <button id="createCyclic">Create Cyclic Linked List</button>
   <button id="isCyclic">Is Cyclic?</button>
   <button id="clear">Clear</button>
</p>
<div id="output">
</div>


## Properties of a Linked List
* Each node contains the value you want to store and a pointer to the next node in the chain.
* The last node in a linked list doesn't point to anything (or we can say that it points to null).
* An acyclic linked list is one that has an end (i.e. a node with a 'next node' pointer of null).
* A cyclic linked list is one that doesn't have an end because all nodes have a link to another node.

Advantages:

* No need to pre-allocate space when creating a list

Disadvantages:

* Worst-case seek time is O(n) for n elements in the list
* Determining the length can also take O(n)
* Linked lists can become a loop.

## Timings of Common Operations
* Appending a node: O(n)
* Prepending a node: O(1)
* Inserting a node: O(n)
* Deleting a node: O(n)

## Tweaks for Optimising Common Operations
Add a Length property to the node definition and increment the first node's Length counter
after adding a new node. Finding the first node in a linked list takes O(1).

## Learn More
Linked Lists Lecture 1:
<iframe width="640" height="390" src="//www.youtube.com/embed/htzJdKoEmO0" frameborder="0" allowfullscreen></iframe>

Linked Lists Lecture 2:
<iframe width="640" height="390" src="//www.youtube.com/embed/-c4I3gFYe3w" frameborder="0" allowfullscreen></iframe>

### Links
* [How to find if a linked list is cyclic or acyclic](http://www.programmerinterview.com/index.php/data-structures/how-to-find-if-a-linked-list-is-circular-or-has-a-cycle-or-it-ends/)

<script src="code/linked_lists.js"></script>