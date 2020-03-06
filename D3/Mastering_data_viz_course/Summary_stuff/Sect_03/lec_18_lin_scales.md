What are scales, and why we need the,?
Basic syntax for linear scales.

### Why do we need scales?
  If the value > svg canvas height, we need to either increase the svg size, or compute our data to fit within the height.


### What are scales?
1-1 functions that take a domain and return a range.

We can use this to rescale numeric values.
Colors are also numeric (based upon pixels), so we can use this to build a heat map

#### Ex:
```js
let y = d3.scaleLinear()
  .domain([0, 828])
  .range([0, 400])
```
We can use our scale directly, or chain on `.invert()` to use the scale in reverse.

```js
y(100) // returns 48.3
y.invert(48.3) // returns 100
```

### How will we use this?

  We'll use our scales to transform our height to fit the svg, instead of pre-computing the heights in the first place

Ex: See `Provided/03/3.02/js/main.js` 
