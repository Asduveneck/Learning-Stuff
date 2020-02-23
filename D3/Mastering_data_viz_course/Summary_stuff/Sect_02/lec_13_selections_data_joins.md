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

  If we always return constants for our functions, we still get the same # of circles as the length of our array. It's just that they'll all be superimposed. And if we're just going to have a function return a constant, we could just use that constant instead.
  
  To use functions and our data, we should define our function to return some # based based upon `d` or `i` and assign that to an attribute.

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
        // return 25; // stacks on top if cy is also a constant
        return (25 + 50*i); // offset each circle by the total max diameter, so each circle will be next to each other if they all have radius d.
      }  )
      .attr("cy", function(d) {
        return 25; // No real point. Might as well not bother with a function and just replace this with 25 haha
      })
      .attr("r", (d) => d)
      .attr("fill", "red")
```
