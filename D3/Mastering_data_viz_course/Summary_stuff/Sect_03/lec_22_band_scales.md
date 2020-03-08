Lecture Objectives:

Summary: We use Band scales when we want to space out rectangles. commonly used for bar charts.

* Cover sdyntax
* Purpose of this scale for bar chart
* Update our bar chart so data comes from our scale


### Problem from our last code:

  Before, we had an issue with our y-axis where we'd need to scale our y axis to fit into the svg canvas (instead of rescaling it within the data).

  We have something similar for the x axis; what if we have too many rectangles/bars? It'll just get pushed/drawn off campus (if we hard-coded our widths).

### When do we use band scales?

Pretty much used only in bar charts.
We give everything an equal width
We give an array, and min max for range (pixel values we want our chart spaced over). We need ratios on paddingOuter and paddingInner, defining how thick our bands should be. We also have access to bandwidth to set the width, and step 


PaddingInner: Define padding between. Accepts value between 0 and 1. 0 for no padding.
PaddingOuter: Accept value between 0 and 1. 0 for no padding between first bar and edge of svg canvas (and last bar and edge of svg canvas)

**NB** We can't add in new values the same way we do with ordinal. So fi we thrtow in a new value that wasn't in our domain, we return `undefined`.

### Coding Syntax basic example:

```js
let x = d3.scaleBand()
  .domain(["Africa", "N.America", "Europe", "S.America", 
    "Asia", "Australia"])
  .range([0,400])
  .paddingInner(0.3)
  .paddingOuter(0.2);


```