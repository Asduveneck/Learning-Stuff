### Q1
What domain and range should you choose for the y axis?

Axis y value is from 0 to 6342, but height of svg is 500.
Looks to be linear graph, so we'll want a scaleLinear() and a range of 0-500 and a domain of 0-6342

### Q2 
What domain and range for the x axis?

Since it's a bar chart, we want a scaleBand. Domain is our values, which are letters A to F. Range will be the pixel width.
And we need to control our spacing between bars.

### Q3
What if we want to set the domain of our y scale using a function based upon the data?
The y axis is from 0 to the max value. So we don't want to use `d3.extent`. Instead, we set our min to be 0, and our upper range of our array should be `d3.max`. 

### Q4
What can we do to make our domain?

  Technically, you could manually write an array manually, but it's not maintainable. So it's best to use `data.map()` to return an array. 
