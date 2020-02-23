### What data does d3 take?
  csv, tsv, or json (via `d3.csv("File_Path").then( (data) => {} )`, `d3.tsv("File_Path").then( (data) => {} )`, or `d3.json("File_Path").then( (data) => {} )`)

### What are these files like?

csv or tsv: commas or tabs form columns.
json: large javascript object.

### Warning:

  This is what screwed you over when you first tried teaching yourself. Before version 5, loading data was based upon callbacks.

ex:
```js
d3.csv("File_Path", function(data) {
  // code
})
```

  But now, with promises, we use the `.then()`. (or even `Promise.all`).
  
*NB: Unfortunately, this course was originally written in v4 so we'll have to catch it ourselves.*



