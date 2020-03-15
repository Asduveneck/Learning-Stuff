### Goals

* Moving from static viz to dynamic viz where part of our code will be consistently running.
* To do this constant update, we'll write an update function to run inside our interval function
* We'll need to think which parts of our code should run once, and which parts should be constantly run. 


### When updating, what should change?
  * We'll structure our updates with an `update` function, which we'll call inside a loop
  * Our scales and axes need to change in case our data changes (max Y, or we add more data)
  * If our scales and axes change, then we need to update size/position of rectangles to match

### Ex: Code demo

[See: ](https://github.com/Asduveneck/Learning-Stuff/blob/6cd9c808ca66d6d2eacf9647edd0a4441927c426/D3/Mastering_data_viz_course/Provided/05/5.03/js/main.js#L68) `Mastering_data_viz_course/Provided/05/5.03/js/main.js`

The following are commented in as P1 P2 P3

1. 1:44 We start by adding our code to make the graph in our update
We won't focus on the rectangles just yet.
With our axis, we only care about the domain, and we set the scale after the domain. Thus, we only need the `domain` and not the scale inside our update function.

2. Next, when we define our Axis, we append it each time as a group. If we append a new group each time with each update, we'll start to stagger or overlap our axis. That's not good. We want to append it once at the top of our file, then call it each time afterwards in our `update`.

  * We define the xAxis as xAxisGroup and yAxis as yAxisGroup.
  * We move the `.call()` functions to our `update` function.

3. We need to have the axis load the first time.

### Summary
We should know why we need to update our scales and axis the way we did.

