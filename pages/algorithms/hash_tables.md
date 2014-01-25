<!--
    Title=Hash Tables
    template=algorithms
    menu=projects
    wikipedia=http://en.wikipedia.org/wiki/Hash_table

    readTime=O(1) / O(n)
    insertTime=O(1) / O(n)
    deleteTime=O(1) / O(n)
-->
A hash table provides a way to store values hash a key without needing to know how many
keys there are and without creating a huge memory footprint. The key is transformed in
a compression function into a hash code with an acceptable probability of uniqueness and
stored in a bucket.

There is one bucket per compressed key. It's only necessary to create a new bucket if
one doesn't exist already for a value about to be inserted. At insert time the **original**
key and value are stored together in a linked list called the **chain**.

### Playpen
<p>
  <input type="number" class="small-input" min="0" id="key" placeholder="Key" />
  <input type="text" class="small-input" id="value" placeholder="Value" />
  <button id="add">Add</button>
  <button id="addRandom">Add Random</button>
  <button id="restart">Restart</button>
  &nbsp;
  &nbsp;
  <input type="number" class="small-input" min="0" id="fetchKey" placeholder="Key"/>
  <button id="fetch">Fetch Value</button>
  <span id="valueFound"></span>
</p>
<p>
   window.exampleHash stats: Buckets = <span id="numBuckets">0</span>, Values = <span id="numValues">0</span>
</p>
<div id="output">
</div>
### Properties of a Hash Table
A hash table is _usually_ fast because the compression function maps a unique key to a
unique hash code. However, it can happen that every key is compressed to the same hash code
and stored in the same chain under the same bucket. When this happens the asymptotic seek
time crashes to O(n) since it's actually traversing a linked list and comparing the
input key with each link list node's original key.

### Dealing With Duplicate Keys
... not duplicate _hash codes_! The implementation could choose to deal with duplicate keys
for different values by:
* Only allowing one value per unique key (not unique _hash code_)
* Allowing multiple values per unique key
The difference comes out in what happens when the user calls for the value. The first
implementation guarantees that the value will always be the same, whereas the second
will return a random value as if to say the values, while different, are actually one
in the same because their keys are identical.

### Asymptotic Performance

* Insertion
  * Best Case: O(1)
  * Worst Case: O(n)
* Deletion
  * Best Case: O(1)
  * Worst Case: O(n)
* Seek
  * Best Case: O(1)
  * Worst Case: O(n)

### Learn More
Hash Tables Lecture
<iframe width="640" height="390" src="//www.youtube.com/embed/UPo-M8bzRrc" frameborder="0" allowfullscreen></iframe>

<script src="code/hash_tables.js"></script>