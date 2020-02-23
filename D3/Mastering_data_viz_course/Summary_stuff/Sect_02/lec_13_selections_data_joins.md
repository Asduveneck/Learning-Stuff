Whole goal of D3 is to tie SVG to data, giving us data driven documents

D3 can perform a data join. Reads in an array of data,and associates each element to an svg.

Instead of having just one circle svg, we're going to have multiple ones.

Before, we had something like:

```js
let svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400);

let circle = svg.append("circle")
  .attr("cx", 200)
  .attr("cy", 200)
  .attr("r", 100)
  .attr("fill", "blue")

```

but now we'll add data like:

```js
  let data = [25, 20, 10, 12, 15];

  let svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

  let circles = svg.selectAll("circle") // get all the circles on the screen
    .data(data); // pass in the data to all the circles

  circles.enter() // pass on the result of passing in the data to `.enter()`
    .append("circle")
      .attr("cx", 200)
      .attr("cy", 200)
      .attr("r", 100)
      .attr("fill", "red")
```

  D3 has an update pattern. 

  We can now set in an anonymous function to be responsive to our data.

  The first input (`d`) is the value in the array, the second (`i`) the position.
```js
  let data = [25, 20, 10, 12, 15];

  let svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

  let circles = svg.selectAll("circle") // get all the circles on the screen
    .data(data); // pass in the data to all the circles

  circles.enter() // pass on the result of passing in the data to `.enter()`
    .append("circle")
      .attr("cx", function(d, i) {
        console.log("Item: " + d, "Index: " + i);
      }  )
      .attr("cy", function(d) {
        console.log("Item: " + d);
      })
      .attr("r", 100)
      .attr("fill", "red")
```

  And for now, since our functions return nothing, we won't have any circles just yet.