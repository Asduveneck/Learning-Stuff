We'll be using D3 `select`, `append`, and `attr`, which we'll chain together to make new shapes.
This lecture corresponds with

### How does the d3 select function work?

* Like the CSS select / jquery select.
* `d3.select("query")` returns the first  match, while `d3.selectAll("query")` returns all matches.
* You can use this to identify things by the tag, class, or even id!

### How does append and attr work?

  Once we have the thing selected, we can `append` new tags to that object.

  Then, we set attributes to the thing we just appended via `.attr` .

### Example process?

1. Select svg canvas
```js
  let svg = d3.select("#canvas")
```
2. Append rectangle
```js
  let rect = svg.append("rect")
```
3. Set attributes
```js
  rect.attr("x", 25)
    .attr("y", 0)
```
