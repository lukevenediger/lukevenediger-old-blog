<!--
    title=Skip List
    template=algorithms
    wikipedia=http://en.wikipedia.org/wiki/Skip_list
    menu=projects

    readTime=O(log n) / O(n)
    insertTime=O(log n) / O(n)
    deleteTime=O(log n) / O(n)
-->
A skip list is made up of several layers of linked lists and optimises for faster search times. The first
layer - Layer 0 - is the full list of elements. The next layer - Layer 1 - is made up of elements from Layer 0
at the same position as those elements. An element is repeated in Layer 1 from Layer 0 if it's chosen by
a probability function. This process is repeated until Layer N ends up with only 1 node.

## Videos
Lecture 12: Skip Lists
<iframe width="640" height="390" src="//www.youtube.com/embed/IXRzBVUgGl8" frameborder="0" allowfullscreen></iframe>