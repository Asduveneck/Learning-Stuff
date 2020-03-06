Time scales are just a special form of linear scales.

We'll be working with JS Date objects.

Dates take in year, month, day.

Ex:
```js
let x = d3.scaleTime()
  .domain([ new Date(2000, 0, 0), new Date(2001, 0, 0) ])
   .range([0, 400])
```


```js
x(new Date(2000, 7, 1)) // 199
x(new Date(2001, 0, 0)) // 200

x.invert(360) // Sun Nov 25 2000

```