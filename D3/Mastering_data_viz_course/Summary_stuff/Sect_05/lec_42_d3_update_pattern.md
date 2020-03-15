### Lecture Goals

* Editing size and pos of rectangles inside update function
* To do this, we need to learn about the D3 update pattern; one of hardest parts of d3...

  The d3 update pattern will be used in every viz from now on, and it'll come with practice/experience.

### How does the d3 update pattern work?
<!-- FINDME: NB: This is probably one of the most important lectures in this series -->

First, we need to see what's going on in the simplest case when we join data. Back in section 2:
```js
// Selects... nothing?
let rects = svg.selectAll("rect")
  .data(data)

// Magic:
rects.enter().append("rect")
  .attr("y", (d) => y(d.revenue) )
  .attr("x", (d) => x(d.month) )
  .attr("height", (d) => height - y(d.revenue) )
  .attr("width", x.bandwidth)
  .attr("fill", "grey")

```

When we call d3 `selectAll`, we have some virtual selectors going on. And if we console log our rects before the `magic`, we see there are three groups/things: `enter`, `exit`, and `groups`.

  * `Enter` represents all elements in our data array that don't exist on the page.
  * `Exit` represents all elements on page that don't exist in our data array. These elements we need to remove from the screen.
  * `Group` represents all elements on the screen.

#### Ex d3 walkthrough

The first time we observe our `rects`, the `Enter` has 7 elements to match our data.
Once the bars load, our `Enter` is empty since that's all our data we had. The `Exit` and `Group` both have the data that was originally in our `Enter`.


### What does that mean in terms of our d3? 
IN D3, we want to stick to our update pattern whenever possible whenever we add new data.

#### Example steps
1. `Data Join` - select all matching elements on screen with `selectAll`, and update data we're using
2. `Exit` - use the `exit()` selector to remove elements that don't exist in our new array of data
3. `Update` - set attributes for existing elements on screen
4. `Enter` - use the `enter()` selector to set attributes for new items in data array

**Code:**

```js
//     1. DATA JOIN
// Join new data with old elments, if any

let text = g.selectAll("text")
  .data(data);

//      2. EXIT
// Remove old elements as needed
text.exit().remove();

//     3. UPDATE
// Update old elements as needed
text.attr("class", "update")
  .attr("fill", "red"); // Other than fill, everything else is the same

//     4. ENTER
// Create new elements as needed
text.enter().append("text") // these apply to only new elements. Using append to add new stuff.
  .attr("class", "enter")
  .attr("x", (d, i) => i*32)
  .attr("y", 20)
  .attr("fill", "green")
  .text( (d) => d );

```

#### OG example with magic. What's going on again?

```js
// Selects... nothing?
let rects = svg.selectAll("rect") // Selection that has no rectangles
  .data(data) // but since we pass in an array of data, we have some selectors

// Magic:
rects.enter().append("rect") // Accessing the groups via enter(), and adding `rects` via the append.
  .attr("y", (d) => y(d.revenue) )
  .attr("x", (d) => x(d.month) )
  .attr("height", (d) => height - y(d.revenue) )
  .attr("width", x.bandwidth)
  .attr("fill", "grey")

```

### Ex: Main.js Again

[See](https://github.com/Asduveneck/Learning-Stuff/blob/6cd9c808ca66d6d2eacf9647edd0a4441927c426/D3/Mastering_data_viz_course/Provided/05/5.04/js/main.js): `Mastering_data_viz_course/Provided/05/5.04/js/main.js`

P1 Join:
P2: Exit
P3: Update part: Set attributes. Same code as enter, but we don't need to set the fill again
P4: Enter: same as before.