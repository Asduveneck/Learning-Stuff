### Lecture Objectives

  * Set domains of scales automatically based upon data.
  * Learn syntrax for D3 min, max, extent
  * Use `map` functions to provide array of category names for ordinal/band scales

### Why does this matter?

  Remember in lecture 22, where we set up the labels/domain for our bars?

  We had an array where we manually defined each building (Provided/03/3.06/js/main.js). If we add in new data (like hundreds of data), we'd have to update our JS code. That's not easily maintainable.

  Remember how we set a linear scale to scale down our data for us automatically?
  What if we don't know the max value of the building. If we keep adding in new data, then we might get a new 'max' value. So we need a way to easily find the `max` value

  **In short, we want a way to automatically set the `domains` for our various `d3 scales`**

### D3 min, max, and extent will help us set our domains automatically

  How do these work? 
    These functions take in an array of data, and a callback function.


#### Ex 1: D3 min max syntax
```js
let data = [
  { grade: "A", value: 4},
  { grade: "B", value: 3},
  { grade: "C", value: 2}
]

let min = d3.min(data, function(d) {
  return d.value
}); // 2

let max = d3.max(data, function(d) {
  return d.value
}); // 4

let extent = d3.extent(data, function(d) {
  return d.value
}); // [2, 4]

let grade_map = data.map(function(d) {
  return d.grade;
}); // ["A", "B", "C"]

```

The `grade_map` is useful because it lets us avoid hard-coding in the names of discrete data as we build `ordinal` or `band` scales.

### Ex 2: Applying min, max, extent, with scales.

```js
// Usiing min and max, nested in array
let y = d3.scaleLinear()
  .domain( [ // nesting into array
    d3.min(data, function(d) { return d.value; }),
    d3.max(data, function(d) { return d.value; }),
  ] );
  .range([0, 400])

// Using extent
y = d3.scaleLinear() 
  .domain(d3.extent(data, (d) => d.value )) // FINDME: BUG:? check if we need to nest d3.extent into another array. Online video seems to say we do...
  .range([0, 400]);

let x = d3.scaleBand()
  .domain(data.map( (d) => d.grade ))
  .range([0, 400])
  .paddingInner(0.3)
  .paddingOuter(0.3);

```

### Detailed code
See main.js in 3.07
