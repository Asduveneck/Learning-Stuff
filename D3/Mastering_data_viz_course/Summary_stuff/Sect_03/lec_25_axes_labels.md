### Main topics
 
 Why does this matter? You need labels to interpret your bar chart. Clearly.

  * Using D3 axis generators in bar chart to show scale
  * Adding axis labels to tell us what we're looking at

### How do we make axis?

D3 has 4 inbuilt methods to generate axis. We'll most often use:
  - `d3.axisLeft('Y Scale')` and `d3.axisBottom('X Scale')`

But we can also use:
  - `d3.axisLeft('Y Scale')` and/or `d3.axisBottom('X Scale')`.

All of these will be based in the origin/center of our canvas (top or left), so we need to move them to the proper place if the axis is on the right or bottom.
<details>
<summary>Example Screenshot of code</summary>

![Code and visualization](Screenshots/lec_25_4_axis.png)
</details>

To do the movement, we'll want to place the axis in a `group` and `translate` them.
Afterwards, we use the `.call()` method to generate the axis.

#### Customizing the ticks

##### Size:
There are 3 methods to adjust tick sizes:
  * `tickSizeOuter("VALUE")`: which affects the outermost ticks only
  * `tickSizeInner("VALUE")`: which affects the inner ticks only
  * `tickSize("VALUE")`: which affects ALL ticks

When we chain these methods, the stuff further down the chain overrides the previous.
```js
d3.axisBottom(x)
  .tickSizeInner("VALUE A") // initially sets inner tick sizes
  .tickSize("VALUE B");  // Overwrites tickSizeInner!
```

##### How many ticks?
```js
d3.axisBottom(x)
  .ticks(10);
```
D3 places the # of ticks based upon some algorithm, so we won't always get the # we specify

##### Text Formatting?

To specify floating point with no decimals:
```js
d3.axisBottom(x)
  .tickFormat(d3.format(",.0f"));
```
Custom formatting:

```js
d3.axisBottom(x)
  .tickFormat( (d) => "TICK TEXT"  );
```

##### Specifying explicit values

```js
d3.axisBottom(x)
  .tickValues( [1, 2, 3, 5, 8, 13, 21] )
```

  **NB:**If you use `tickValues` and `tickFormat`, d3 will take your tick values and pass them into `tickFormat`.

### Ex Code: 3.10

#### First we need to create our axis
  We first need to create a variable for our X Axis. (line 60)
  Our y axis doesn't need to be transformed; only our x axis. (~3:37)

```js
var xAxisCall = d3.axisBottom(x); 
g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")") // Move from top to bottom
    .call(xAxisCall) // invoke our x axis

var yAxisCall = d3.axisLeft(y) // line 72 in 3.10
g.append("g")
    .attr("class", "y-axis")
    .call(yAxisCall);
```

#### Next we need to adjust our x axis text labels to not overlap (~4:45)

First, we grab all the text generated from our call on `d3.axisBottom(x)`:
```js
var xAxisCall = d3.axisBottom(x); 
g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")") // Move from top to bottom
    .call(xAxisCall) // invoke our x axis
.selectAll("text")
    .attr("y", "10")
    .attr("x", "-5")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-40)");
```

  And then we chain on various attributes to have better control over our labels (such as rotating)

#### Let's demonstrate adjusting ticks for the y axis:

```js
var yAxisCall = d3.axisLeft(y)
    .ticks(3) // specify 3 ticks
    .tickFormat(function(d){
        return d + "m"; // Add the letter m to the end of each string (m for meter)
    });
g.append("g") // Rest we've seen before
    .attr("class", "y-axis")
    .call(yAxisCall);
```

#### Let's add a labels to our Axes 
Code starts at line 20 in `3.10 main.js`.

Our canvas (w/ margins), is defined and saved as a group `g`. (line 12).

**X Label:**
```js
g.append("text") // Add some text
    .attr("class", "x axis-label")
    .attr("x", width / 2) // position text halfway through
    .attr("y", height + 140) // push it to the bottom
    .attr("font-size", "20px")
    .attr("text-anchor", "middle") // anchor point in middle to center text
    .text("The word's tallest buildings"); // text to display
```
**Y Label:**
```js
g.append("text")
    .attr("class", "y axis-label")
    .attr("x", - (height / 2)) // NB: SEE BELOW
    .attr("y", -60)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)") // Rotate to make vertical
    .text("Height (m)");
```
**NB:** Because we rotate the same time we set these values, we reverse our x and y positions.