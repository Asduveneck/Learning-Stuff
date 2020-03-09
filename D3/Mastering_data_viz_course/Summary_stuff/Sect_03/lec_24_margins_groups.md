### Main Topics:

SVG groups: invisible svg element to organize our data, needed for axes. (next lec)

* Introduction to SVG groups, to structure elements together on the page
* Use transformations to alter SVGs' position
* Following D3 margin convention to give space for axes.

### Why do we need margins?

We add margins to give space, and this space lets us use d3's in built methods to add in axes (on all 4 sides of the viz)
How do we add margins? Groups

### SVG groups

We can follow D3 margin convention by adding everything to a group, and attaching that to the center of our canvas.

SVG group elements are containers for different SVGs or shapes.
They can bundle graphical elements together, and can move/transform many svgs simultaneously.

**EX: Using groups to transform**

  If we want move 2 rectangles, we can manually specify the x and y coordinate.
  But if we want to move 100 rectangles, we can nest them inside a  group, `<g>/<g>` to move all the rectangles simultaneously.

```html  
 <g transform="translate(200,0)"> 
   <rect></rect>
   <rect></rect>
   ...
  </g>
```
translate is an x and a y. We can also rotate SVGs as well.

### Example Walkthrough: 3.09

  * In our bar chart, we need extra space on the left and bottom to store our axis and labels.
    * So, when we define our `margin` POJO, we give extra space for `left` and `bottom`
  * We then calculate width and height, and subtract our margins. This width and height is for the plot of the graph, and excludes the axes.

  By using our margins and defining them in a POJO once, we make it easier to modify the spacing of our margin.

```js
var margin = { left:100, right:10, top:10, bottom:100 };

var width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom; // 
```

**NB:** When we define our svg canvas, however, we include our margins because the canvas should include our axes/labels as well

```js
var g = d3.select("#chart-area")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
```